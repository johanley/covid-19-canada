package epidemic.stats.datastore;

import static epidemic.stats.Util.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import epidemic.stats.Abort;
import epidemic.stats.model.Jurisdiction;
import epidemic.stats.model.SourceData;

/**
  Read csv files of a very specific format, and create time-series data that can be used 
  to make tables and charts.
  
  The time-series data is passed to {@link SourceData}.
  {@link SourceData} doesn't know about csv files, and can returns the data in different ways, for different purposes.
  
  Example csv data:
  <pre>
   Jurisdiction,Country,Lat,Long,2020-04-02,2020-04-01,2020-03-31
   BC, CA, 49.28,-123.12, 1121,1066,1013
   AB, CA, 53.93,-116.58, 968,N,754
  </pre>
  
  It's important to note that codes such as 'N' (not reported) can appear in the data.
*/
public final class ParseCsvDataIntoTimeSeries {
  
  public ParseCsvDataIntoTimeSeries(File file){
    this.file = file;
  }
  
  /**
   Returns a map of maps. Do some basic validations on the data. 
   Key 1 is {@Jurisdiction}, key 2 is date-reported '2020-04-02'. The value is the underlying data point, usually a number. 
  */
  public Map<Jurisdiction, Map<String /*2020-04-02*/, String /*123|N*/>> parseIntoTimeSeries() throws IOException, Abort {
    Map<Jurisdiction, Map<String /*2020-04-02*/, String /*123|N*/>> result = new LinkedHashMap<>();
    List<String>lines = lines(file);
    
    //all dates at the end of the first row 
    List<String> dates = datesFrom(lines, file); //trimmed
    
    //values on the remaining rows
    int idx = 0; //allows skipping of the first line
    for (String line : lines) {
      if (idx == FIRST_LINE) {
        ++idx;
        continue; //skip the first line having the field names; that was processed above, for the dates
      }
      mustHave(hasContent(line), errorMsg("Line has no content in csv file.", line));
      
      String[] parts = line.split(CSV_SEP);
      int numFields = dates.size() + FIRST_DATE_FIELD;
      
      mustHave((parts.length == numFields), errorMsg("Line has " + parts.length + " fields, but expecting " + numFields, line));
      mustHave(Jurisdiction.known(parts[JURISDICTION]), errorMsg("Unknown jurisdiction.", line));
      
      Jurisdiction juris = Jurisdiction.valueOf(parts[JURISDICTION].toLowerCase());
      //now grab the values as a time series
      List<String> values = Arrays.asList(parts).subList(FIRST_DATE_FIELD, numFields); //trim on the next line 
      
      //mapify: date -> value
      Map<String/*date*/, String /*val*/> dateToVal = mapifyAndTrim(dates, values);
      result.put(juris, dateToVal);
      ++idx;
    }
    
    return result;
  }
  
  // PRIVATE
  
  private File file;
  
  private static final Integer FIRST_LINE = 0;
  private static final int FIRST_DATE_FIELD = 4;

  private String errorMsg(String msg, String line) {
    return msg + " Line:" + quote(line) + " File:" + quote(file.getName());
  }
  
  /** Comments are stripped out. Empty lines are stripped out. All lines are trimmed. */
  private List<String> lines(File file)  throws IOException, Abort {
    Path path = Paths.get(file.getPath());
    List<String> result = Files.readAllLines(path, ENCODING);
    result.removeIf(line -> line.startsWith(COMMENT));  
    result.removeIf(line -> (line.trim().length() == 0));
    mustHave((result.size() > 2), "File appears to have no data. Too few lines: " + file.getName());
    result.stream().forEach(line -> line.trim());
    return result;
  }
  
  /**
   Examines the first line only:
   
    'Jurisdiction,Country,Lat,Long,2020-04-02,2020-04-01,2020-03-31'
   
   Returns the list [2020-04-02,2020-04-01,2020-03-31], with dates trimmed. 
  */
  private List<String> datesFrom(List<String> lines, File file) throws Abort{
    List<String> result = new ArrayList<>();
    String firstLine = lines.get(FIRST_LINE);
    
    List<String> parts = Arrays.asList(firstLine.split(CSV_SEP));
    int size = parts.size(); //example: 7
    //ignore the first few fields
    parts = parts.subList(FIRST_DATE_FIELD, size); //example: 4..7: correct!
    for(String part : parts) {
      String date = part.trim();
      mustHave(hasContent(date), "Date is empty");
      result.add(date);
    }
    return result;
  }

  /** Ensures the data is trimmed. */
  private Map<String/*date*/, String /*val*/> mapifyAndTrim(List<String> dates, List<String> values) throws Abort{
    Map<String/*date*/, String /*val*/> result = new LinkedHashMap<>();
    //iterate over the 2 lists in sync, using a simple index
    int idx = 0;
    for (String date : dates) {
      String value = values.get(idx).trim();
      mustHave(hasContent(value), "Value is empty");
      result.put(date.trim(), value);
      ++idx;
    }
    return result;
  }
}