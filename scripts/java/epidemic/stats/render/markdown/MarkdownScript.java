package epidemic.stats.render.markdown;

import static epidemic.stats.Util.DOT;
import static epidemic.stats.Util.SCREENSHOT_FILE_EXTENSION;
import static epidemic.stats.Util.chopInTwo;
import static epidemic.stats.Util.log;
import static epidemic.stats.Util.mustHave;
import static epidemic.stats.Util.quote;
import static epidemic.stats.render.DataView.HUNDRED_THOU;
import static epidemic.stats.render.DataView.change;
import static epidemic.stats.render.DataView.diff;
import static epidemic.stats.render.DataView.forceNumeric;
import static epidemic.stats.render.DataView.perCapita;
import static epidemic.stats.render.DataView.round;
import static epidemic.stats.render.DataView.sign;
import static epidemic.stats.render.markdown.MarkdownRendering.barForGraph;
import static epidemic.stats.render.markdown.MarkdownRendering.linkToScreenshot;
import static java.util.stream.Collectors.toList;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Stream;

import epidemic.stats.Abort;
import epidemic.stats.datastore.FileSys;
import epidemic.stats.datastore.FileSys.Dir;
import epidemic.stats.model.Jurisdiction;
import epidemic.stats.model.Series;
import epidemic.stats.model.SourceData;
import epidemic.stats.render.DataView;
import epidemic.stats.render.ExcludeFeds;
import epidemic.stats.render.Range;
import epidemic.stats.render.Rendering;
import epidemic.stats.render.json.JsonScript;

/** 
 Script to generate markdown files that can be viewed in the github repo.
 
 Validates the data in various ways as the script is running. 
 If a problem is found, then the script terminates with a stack trace. 
*/
public class MarkdownScript extends ScriptTemplate {
  
  /**
    Run this script against local files. 
    The base directory must be passed as a param on the Java command line.
    It points to this project's 'data' directory.
    
    The basic flow is: 
    <ol>
     <li>core data from a csv file
     <li>read a .tmp template file from the tmp dir; it has placeholders ${blah} for formatted data 
     <li>generate the text that will replace the placeholders
     <li>simple find-replace on the ${blah} placeholders
     <li>save the resulting text in the md dir, in a markdown file with extension .md
    </ol>
  */
  public static void main(String... args) {
    log("Starting...");
    try {
      mustHave(args.length == 1, "Must pass base dir location as first arg.");
      MarkdownScript script = new MarkdownScript(args[0]);
      script.run();
      
      log("Generating json too.");
      //note: this needs to be called after the first script; only the first script does extensive validation
      JsonScript jsonScript = new JsonScript(args[0]);
      jsonScript.run();
    } 
    catch (Throwable ex) {
      log(ex.getMessage());
      ex.printStackTrace();
    }
    log("Done.");
  }

  MarkdownScript(String baseDir) throws Abort {
   super(new FileSys(baseDir), Dir.md);
 }

  /** Run this script. */
  void run() throws Abort, IOException {
    checkForBadScreenshotDirNames();

    // screenshot validations, for the new dir only
    File mostRecentScreenshotDir = mostRecentScreenshotDir();
    log("Most recent screenshots: " + mostRecentScreenshotDir.getName());
    String dateOfMostRecentScreenshots = chopInTwo(mostRecentScreenshotDir.getName(), DATE_TIME_SEP)[0];
    log("Report-date (from dir name) " + dateOfMostRecentScreenshots);
    validateScreenshotFileNamesForThe(mostRecentScreenshotDir);
    validateExpectedDataSeries();

    coreStats(dateOfMostRecentScreenshots);
    SourceData deaths = parseCsv(Series.deaths);
    SourceData knownCases = parseCsv(Series.known_cases);
    SourceData tests = parseCsv(Series.tests);
    //since validations are done above, they aren't repeated again here, before generating this piece
    perJurisdictionStats(dateOfMostRecentScreenshots, deaths, knownCases, tests);
    summaryStats(dateOfMostRecentScreenshots, deaths, knownCases, tests);
  }

  // PRIVATE

  private static final String DATE_TIME_SEP = "_";
  /** yyyy-mm-dd_. The underscore at the end is important. */
  private String DATE_PATTERN = "^\\d{4}-\\d{2}-\\d{2}" + DATE_TIME_SEP;
  private Pattern SCREENSHOT_DIR_NAME_PATTERN = Pattern.compile(DATE_PATTERN);
  
  /** Relies on a convention for the names of directories containing the screenshots. */
  private File mostRecentScreenshotDir() throws Abort {
    File screenshotsDir = fileSys().dir(Dir.screenshots);
    Optional<File> mostRecent = Stream.of(screenshotsDir.listFiles()).max(File::compareTo);
    return mostRecent.get();
  }

  private void checkForBadScreenshotDirNames() throws Abort {
    File screenshotsDir = fileSys().dir(Dir.screenshots);
    Predicate<File> badDirName = file -> !screenshotDirNameOK(file);
    List<File> badDirNames = Stream.of(screenshotsDir.listFiles()).filter(badDirName).collect(toList());
    mustHave(badDirNames.isEmpty(), "Screenshot directories aren't following the naming convention yyyy-mm-dd_blah: " + badDirNames);
  }

  /**
   deaths.csv corresponds to the 'deaths' data-series, for example.
   Naming conventions: that same name is used in different places: deaths.csv, deaths.tmp, deaths.md.
  */
  private List<String> dataSeriesNames() {
    File dir = fileSys().dir(Dir.csv);
    return Stream.of(dir.listFiles()).map(file -> dataSeriesName(file)).collect(toList());
  }

  private String dataSeriesName(File file) {
    return chopInTwo(file.getName(), DOT)[0];
  }

  private static final class FileNameParts {
    FileNameParts(File file) {
      String[] parts = chopInTwo(file.getName(), DOT);
      this.name = parts[0];
      this.extension = parts[1];
    }
    String name;
    String extension;
  }

  private boolean screenshotDirNameOK(File dir) {
    Matcher matcher = SCREENSHOT_DIR_NAME_PATTERN.matcher(dir.getName());
    return matcher.find();
  }

  private void validateScreenshotFileNamesForThe(File mostRecentDir) throws Abort {
    int numImages = mostRecentDir.listFiles().length;
    mustHave(numImages == Jurisdiction.values().length, "Num of images is " + numImages + " should be " + Jurisdiction.values().length);
    for (File file : mostRecentDir.listFiles()) {
      FileNameParts parts = new FileNameParts(file);
      mustHave(Jurisdiction.known(parts.name), "Image file name unexpected: " + parts.name);
      mustHave(SCREENSHOT_FILE_EXTENSION.equals(parts.extension), "Image file name has unexpected extension: " + parts.extension);
    }
  }

  private void validateExpectedDataSeries() throws Abort {
    // names of the data-series, from csv files
    List<String> seriesNames = dataSeriesNames();
    List<String> expected = Stream.of(Series.values()).map(s->s.name()).collect(toList());
    log("Data series found from .csv file names: " + seriesNames);
    for (String series : seriesNames) {
      mustHave(expected.contains(series), "Unexpected series named " + quote(series));
    }
  }

  /** 
   Table only, no graphs.
   The core, nominal data, with links to screenshots of the underlying government web page. 
  */
  private void coreStats(String dateOfMostRecentScreenshots) throws IOException, Abort {
    for (Series series : Series.values()) {
      SourceData data = parseCsv(series);
      List<String> allDates = new ArrayList<String>(data.timeSeries().get(Jurisdiction.bc).keySet()); //relies on the iteration order of the Set
      String firstDate = allDates.get(0); 
      mustHave(firstDate.equals(dateOfMostRecentScreenshots), "Mismatch. Expected date is " + dateOfMostRecentScreenshots + " but I see another date in the csv: " + firstDate);
      String template = templateFor(series);
      Map<String, String/*replacement*/> replacements = new LinkedHashMap<>();
      MarkdownBuilder builder = new MarkdownBuilder();
      
      Jurisdiction[] juriss = (Series.tests == series) ? Jurisdiction.valuesWithoutCA() : Jurisdiction.values();
      replacements.put(Key.tableHeaderJurisdictions.name(), builder.tableHeaderFor(juriss));
      replacements.put(Key.tableHeaderSeparator.name(), builder.tableHeaderSeparator(juriss));
      replacements.put(Key.tableRowsWithLinks.name(), builder.tableRows(data, linkToScreenshot(fileSys())));
      output(series, template, replacements);
    }
  }
  
  /** Both tables and charts. The tables come first. Time series in the charts. */
  private void perJurisdictionStats(String dateOfMostRecentScreenshots, SourceData deaths, SourceData knownCases, SourceData tests) throws IOException, Abort {
    for (Jurisdiction juris : Jurisdiction.values()) {
      String templateName = "jurisdiction";
      if (Jurisdiction.ca == juris) {
        //because CA has no testing stats!
        templateName = templateName + "_ca";
      }
      String template = templateFor(templateName);
      
      Map<String, String /*replacement*/> replacements = new LinkedHashMap<>();
      MarkdownBuilder builder = new MarkdownBuilder();
      
      //the summary table
      replacements.put(Key.jurisdiction.name(), juris.toString().toUpperCase());
      replacements.put(Key.dateOfMostRecentScreenshots.name(), dateOfMostRecentScreenshots);
      
      injectValueFor(Key.totalDeaths, deaths, dateOfMostRecentScreenshots, juris, replacements, forceNumeric(), linkToScreenshot(fileSys()));
      injectValueFor(Key.totalDeathsDailyIncrease, deaths, dateOfMostRecentScreenshots, juris, replacements, change(1, diff()), sign());
      injectValueFor(Key.totalDeathsPerCapita, deaths, dateOfMostRecentScreenshots, juris, replacements, forceNumeric(), perCapita(HUNDRED_THOU), round(2));
      
      injectValueFor(Key.totalCases, knownCases, dateOfMostRecentScreenshots, juris, replacements, forceNumeric(), linkToScreenshot(fileSys()));
      injectValueFor(Key.totalCasesDailyIncrease, knownCases, dateOfMostRecentScreenshots, juris, replacements, change(1, diff()), sign());
      injectValueFor(Key.totalCasesPerCapita, knownCases, dateOfMostRecentScreenshots, juris, replacements, forceNumeric(), perCapita(HUNDRED_THOU), round());
      
      //tests data is simply ignored by the CA template (see above)
      injectValueFor(Key.totalTests, tests, dateOfMostRecentScreenshots, juris, replacements, forceNumeric(), linkToScreenshot(fileSys()));
      injectValueFor(Key.totalTestsDailyIncrease, tests, dateOfMostRecentScreenshots, juris, replacements, change(1, diff()), sign());
      injectValueFor(Key.totalTestsPerCapita, tests, dateOfMostRecentScreenshots, juris, replacements, forceNumeric(), perCapita(HUNDRED_THOU), round());
      
      //bar graphs (per capita not shown here, because there's only 1 jurisdiction present) 
      jurisdictionTimeSeries(Key.deathsGraph, juris, replacements, deaths, builder);
      jurisdictionTimeSeriesDailyChange(Key.deathsDailyIncreaseGraph, juris, replacements, deaths, builder);
      
      jurisdictionTimeSeries(Key.knownCasesGraph, juris, replacements, knownCases, builder);
      jurisdictionTimeSeriesDailyChange(Key.knownCasesDailyIncreaseGraph, juris, replacements, knownCases, builder);
      
      //tests data is simply ignored by the CA template (see above)
      jurisdictionTimeSeries(Key.testsGraph, juris, replacements, tests, builder);
      jurisdictionTimeSeriesDailyChange(Key.testsDailyIncreaseGraph, juris, replacements, tests, builder);
      
      output(juris, template, replacements);
    }
  }

  private void injectValueFor(Key key, SourceData data, String dateOfMostRecentScreenshots, Jurisdiction juris, Map<String, String> replacements, Rendering... renderings) {
    DataView view = new DataView(data, dateOfMostRecentScreenshots, juris, renderings);
    String rendering = view.render();
    replacements.put(key.name(), rendering);
  }

  /**
   Time series graph with horizontal bars. Don't force numeric.
   Two renderings for the same item. 
  */
  private void jurisdictionTimeSeries(Key key, Jurisdiction juris, Map<String, String> replacements, SourceData data, MarkdownBuilder builder) {
    Rendering[] rcase1 = {linkToScreenshot(fileSys())}; 
    Range range = DataView.rangeAcrossTimeForGiven(juris, data, 0, rcase1);
    Rendering[] rcase2 = {barForGraph(range)}; 
    replacements.put(key.name(), builder.jurisdictionHistogramRows(data, juris, rcase1, rcase2));
  }
  
  private void jurisdictionTimeSeriesDailyChange(Key key, Jurisdiction juris,  Map<String, String> replacements, SourceData data, MarkdownBuilder builder) {
    Rendering[] daily = {change(1, diff()), sign()}; 
    Range range = DataView.rangeAcrossTimeForGiven(juris, data, 1, daily);
    Rendering[] bar = {change(1, diff()), barForGraph(range)}; 
    replacements.put(key.name(), builder.jurisdictionHistogramRows(data, juris, daily, bar));
  }
  
  /** Top level summary for all jurisdictions. Compares jurisdictions. */
  private void summaryStats(String dateOfMostRecentScreenshots, SourceData deaths, SourceData knownCases, SourceData tests) throws IOException, Abort {
    String SUMMARY = "summary";
    String template = templateFor(SUMMARY);
    Map<String, String /*replacement*/> replacements = new LinkedHashMap<>();
    
    MarkdownBuilder builder = new MarkdownBuilder();
    replacements.put(Key.dateOfMostRecentScreenshots.name(), dateOfMostRecentScreenshots);
    replacements.put(Key.tableHeaderJurisdictions.name(), builder.tableHeaderFor(Jurisdiction.values()));
    replacements.put(Key.tableHeaderSeparator.name(), builder.tableHeaderSeparator(Jurisdiction.values()));
    
    //numeric table: nominal, daily change, per capita 
    replacements.put(Key.summaryTableDeaths.name(), builder.summaryRowFor(deaths, dateOfMostRecentScreenshots, forceNumeric(), linkToScreenshot(fileSys())));
    replacements.put(Key.summaryTableDeathsDaily.name(), builder.summaryRowFor(deaths, dateOfMostRecentScreenshots, change(1, diff()), sign()));
    replacements.put(Key.summaryTableDeathsPerCapita.name(), builder.summaryRowFor(deaths, dateOfMostRecentScreenshots, forceNumeric(), perCapita(HUNDRED_THOU), round(2)));

    replacements.put(Key.summaryTableCases.name(), builder.summaryRowFor(knownCases, dateOfMostRecentScreenshots, forceNumeric(), linkToScreenshot(fileSys())));
    replacements.put(Key.summaryTableCasesDaily.name(), builder.summaryRowFor(knownCases, dateOfMostRecentScreenshots, change(1, diff()), sign()));
    replacements.put(Key.summaryTableCasesPerCapita.name(), builder.summaryRowFor(knownCases, dateOfMostRecentScreenshots, forceNumeric(), perCapita(HUNDRED_THOU), round()));
    
    replacements.put(Key.summaryTableTests.name(), builder.summaryRowFor(tests, dateOfMostRecentScreenshots, forceNumeric(), linkToScreenshot(fileSys())));
    replacements.put(Key.summaryTableTestsDaily.name(), builder.summaryRowFor(tests, dateOfMostRecentScreenshots, change(1, diff()), sign()));
    replacements.put(Key.summaryTableTestsPerCapita.name(), builder.summaryRowFor(tests, dateOfMostRecentScreenshots, forceNumeric(), perCapita(HUNDRED_THOU), round()));
    
    //histograms by jurisdiction: nominal, daily change, per capita
    summaryHistograms(Key.summaryHistoDeaths, Key.summaryHistoDeathsPerCapita, Key.summaryHistoDeathsDailyIncrease, replacements, deaths, dateOfMostRecentScreenshots, builder);
    summaryHistograms(Key.summaryHistoCases, Key.summaryHistoCasesPerCapita, Key.summaryHistoCasesDailyIncrease, replacements, knownCases, dateOfMostRecentScreenshots, builder);
    summaryHistograms(Key.summaryHistoTests, Key.summaryHistoTestsPerCapita, Key.summaryHistoTestsDailyIncrease, replacements, tests, dateOfMostRecentScreenshots, builder);

    output(SUMMARY, template, replacements);
  }

  /** 
   Histograms per N jurisdictions. 
   Three of them: nominal data, daily increase, and per-capita.
   Nominal and per-capita force-numeric; daily increase can show 'N'.
   Two renderings in sequence for the same item: number + bar.
  */
  private void summaryHistograms(Key nominal, Key perCapita, Key dailyIncrease, Map<String, String> replacements, SourceData data, String currentDate, MarkdownBuilder builder) {
    //nominal
    Rendering[] n1 = {forceNumeric(), linkToScreenshot(fileSys())}; 
    Range range = DataView.rangeAcrossJurisdictionsForGiven(currentDate, data, ExcludeFeds.YES, 1, n1);
    Rendering[] n2 = {forceNumeric(), barForGraph(range)}; 
    replacements.put(nominal.name(), builder.summaryHistoRows(data, currentDate, n1, n2, ExcludeFeds.YES));

    //per-capita: include the feds (CA) only in this case 
    int decimals = Series.deaths == data.getSeries() ? 2 : 0;
    Rendering[] pc1 = {forceNumeric(), perCapita(HUNDRED_THOU), round(decimals)}; 
    range = DataView.rangeAcrossJurisdictionsForGiven(currentDate, data, ExcludeFeds.NO, 3, pc1);
    Rendering[] pc2 = {forceNumeric(), perCapita(HUNDRED_THOU), round(decimals), barForGraph(range)}; 
    replacements.put(perCapita.name(), builder.summaryHistoRows(data, currentDate, pc1, pc2, ExcludeFeds.NO));
    
    //daily increase 
    Rendering[] di1 = {change(1, diff()), sign()}; //don't force numeric here; can be a code
    range = DataView.rangeAcrossJurisdictionsForGiven(currentDate, data, ExcludeFeds.YES, 1, di1); //ignore the sign!
    Rendering[] di2 = {change(1, diff()), sign(), barForGraph(range)}; 
    replacements.put(dailyIncrease.name(), builder.summaryHistoRows(data, currentDate, di1, di2, ExcludeFeds.YES));
  }
}