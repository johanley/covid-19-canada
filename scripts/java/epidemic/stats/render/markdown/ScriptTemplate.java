package epidemic.stats.render.markdown;

import static epidemic.stats.Util.ENCODING;
import static epidemic.stats.Util.NL;
import static epidemic.stats.Util.log;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import epidemic.stats.Abort;
import epidemic.stats.datastore.FileSys;
import epidemic.stats.datastore.FileSys.Dir;
import epidemic.stats.datastore.ParseCsvDataIntoTimeSeries;
import epidemic.stats.model.Series;
import epidemic.stats.model.SourceData;

/** 
 Utility methods for running scripts against the csv files.
 The scripts generate other files, derived from the source data. 
*/
public class ScriptTemplate {
  
  public ScriptTemplate(FileSys fileSys, Dir outputDir) {
    this.fileSys = fileSys;
    this.outputDir = outputDir;
  }

  /** Parse a file in the csv dir, and transform it into an appropriate data structure. */
  protected final SourceData parseCsv(Series series) throws IOException, Abort {
    File file = fileSys.fileInThe(Dir.csv, series);
    ParseCsvDataIntoTimeSeries cvsParser = new ParseCsvDataIntoTimeSeries(file);
    return new SourceData(cvsParser.parseIntoTimeSeries(), series);
  }
  
  /** Read a file in the tmp (template) dir, and just return its contents as a String. */
  protected final String templateFor(Object thing) throws IOException {
    File templateFile = fileSys.fileInThe(Dir.tmp, thing);
    return fileAsString(templateFile);
  }

  /** 
   Output a file as the output of this script. A script can output N files.
   @param replacements key ${blah} (a placeholder in a template file), value is the replacement for the placeholder. 
  */
  protected final void output(Object thingName, String template, Map<String,String> replacements) throws IOException {
    String finalText = populate(template, replacements);
    log(finalText);
    writeToFileFor(thingName, finalText);
  }
  
  protected final FileSys fileSys() {
    return fileSys;
  }
  
  // PRIVATE
  
  private FileSys fileSys;
  private Dir outputDir;
  
  /** Trims only at the end. */
  private String fileAsString(File file) throws IOException {
    StringBuilder result = new StringBuilder();
    Path path = Paths.get(file.getPath());
    List<String> lines = Files.readAllLines(path, ENCODING);
    for (String line : lines) {
     result.append(line + NL); 
    }
    return result.toString().trim();
  }
  
  private void writeToFileFor(Object thingName, String finalText) throws IOException {
    File file = fileSys.fileInThe(outputDir, thingName);
    Path path = Paths.get(file.getPath());
    Files.write(path, Arrays.asList(finalText.split(NL)), ENCODING);
  }
  
  /** The caller passes 'blah' for the key, but it's ${blah}' that's actually replaced in the template text. */
  private String populate(String templateText, Map<String/*blah*/, String/*replace-blah*/> replacements) {
    String result = templateText; //to start with
    for (String key : replacements.keySet()) {
      result = result.replace("${"+key+"}", replacements.get(key));
    }
    return result;
  }
}
