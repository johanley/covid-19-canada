package epidemic.stats.render.json;

import static epidemic.stats.Util.NL;
import static epidemic.stats.Util.asNum;
import static epidemic.stats.Util.log;
import static epidemic.stats.Util.mustHave;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;

import epidemic.stats.Abort;
import epidemic.stats.datastore.FileSys;
import epidemic.stats.datastore.FileSys.Dir;
import epidemic.stats.model.Jurisdiction;
import epidemic.stats.model.Series;
import epidemic.stats.model.SourceData;
import epidemic.stats.render.markdown.ScriptTemplate;

/**
 Render the underlying source data in the JSON format.
 
 Creates one file for each data series. 
 Uses a template file for the boilerplate text. 
*/
public class JsonScript extends ScriptTemplate {
  
  /** 
   Run this script against local files. 
   The base directory must be passed as a param on the Java command line.
   It points to this project's 'data' directory.
  
   <p>WARNING: this class doesn't validate the details of the source data: it's assumed 
   that that task has been done by other scripts, run before this one. 
    
    The basic flow is: 
    <ol>
     <li>core data from a csv file
     <li>read a .tmp template file from the tmp dir; it has placeholders ${blah} for formatted data 
     <li>generate the text that will replace the placeholders
     <li>simple find-replace on the ${blah} placeholders
     <li>save the resulting text in the json dir, with extension .json
    </ol>
  */
  public static void main(String... args) {
    log("Starting...");
    try {
      mustHave(args.length == 1, "Must pass base dir location as first arg.");
      JsonScript script = new JsonScript(args[0]);
      script.run();
    } 
    catch (Throwable ex) {
      log(ex.getMessage());
      ex.printStackTrace();
    }
    log("Done.");
  }
  
  public JsonScript(String baseDir) throws Abort  {
    super(new FileSys(baseDir), Dir.json);
  }

  /** Generate .json files from the .csv files. */
  public void run() throws Abort, IOException {
    for (Series series : Series.values()) {
      String template = templateFor("json");
      SourceData data = parseCsv(series);
      Map<String, String> replacements = new LinkedHashMap<String, String>();
      replacements.put("series", series.name().toString());
      replacements.put("description", series.getDescription());
      replacements.put("rows", buildJsonRowsForThe(data));
      output(series.name(), template, replacements);
    }
  }
  
  // PRIVATE 
  
  private static final String INDENT = "   ";
  /** JSON requires double quotes! */
  private static final String QUOTE = "\"";
  private static final String COMMA = ",";
  private static final String START_ARRAY = "[";
  private static final String END_ARRAY = "]";
  private static final String COLON = ":";
  private static final String START_OBJECT = "{";
  private static final String END_OBJECT = "}";

  /**
   Typical line structure:
   
      "BC" : [{"2020-04-01":15}, {"2020-04-02": "N"} ],
      
   Using an array ensures there's no monkey business with iteration order of object properties.      
   Javascript allows trailing comes since 2009-12, but JSON does not.
   Javascript allows single quotes, but JSON does not. 
   
   You can validate the returned JSON string using https://jsonlint.com/, or similar.
  */
  private String buildJsonRowsForThe(SourceData data) {
    StringBuilder result = new StringBuilder("");
    for(Jurisdiction juris : data.timeSeries().keySet()) {
      result.append(INDENT + quote(juris) + COLON + START_ARRAY);
      for(String date : data.timeSeries().get(juris).keySet()) {
        String nominalVal = data.timeSeries().get(juris).get(date); //might be a code, not a number
        result.append(objectWith(date, nominalVal));
        result.append(COMMA); 
      }
      result.deleteCharAt(result.length()-1); //trim the last comma
      result.append(END_ARRAY);
      result.append(COMMA);
      result.append(NL);
    }
    result.deleteCharAt(result.length()-3); //trim the last comma + carriage-return/new line
    return result.toString();
  }
  
  private String quote(Object thing) {
    return QUOTE + thing + QUOTE;
  }
  
  private String objectWith(String date, String nominalVal) {
    StringBuilder result = new StringBuilder();
    result.append(START_OBJECT);
    result.append(quote(date));
    result.append(COLON);
    result.append(quoteNonNumeric(nominalVal));
    result.append(END_OBJECT);
    return result.toString();
  }
  
  private String quoteNonNumeric(String nominalVal) {
    String result = nominalVal;
    Optional<BigDecimal> numeric = asNum(nominalVal);
    if (!numeric.isPresent()) {
      result = quote(nominalVal); 
    }
    return result;
  }
}