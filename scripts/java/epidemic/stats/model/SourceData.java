package epidemic.stats.model;

import java.util.LinkedHashMap;
import java.util.Map;


/** 
  The stats data, in data structures convenient to creators of charts and tables.
  
  <P>This class has no knowledge of the files in which the data is stored.

  <P>Note the two core data structures, maps of maps, differ only in the order of their keys
  <ul>
   <li>JD: Jurisdiction -> Date -> Value
   <li>DJ: Date -> Jurisdiction -> Value
  </ul>
  
  <P>Implementation note: In general, maps in Java don't necessarily have a well defined iteration order.
  That issue is easily avoided here, by using LinkedHashMap as the map implementation.
*/
public final class SourceData {

  public SourceData(Map<Jurisdiction, Map<String /*2020-04-02*/, String /*123|N*/>> timeSeriesData, Series series) {
    this.timeSeriesData = timeSeriesData;
    this.series = series;
  }
  
  public Series getSeries() { return series; }
  
  /** 
   Table-view of the data, for all dates.
 
   Returned map has:
   <ul> 
    <li>Key 1: the date as a String '2020-04-02'
    <li>Key 2: Jurisdiction
    <li>Value: number or 'flag' value, such as 'N' for no-update-that-day.
   </ul>
 
   <P>The iteration order is the natural order of strings of the form 'yyyy-mm-dd',
    and the natural order of {@link Jurisdiction}.
  */
  public Map<String /*2020-04-02*/, Map<Jurisdiction, String /*123|N*/>> table(){
    if (histogramsData.isEmpty()) {
      histogramsData = histogramsImpl();
    }
    return histogramsData;
  }
  
  /** 
   Time-series view of the data.
   
   Returned map has:
   <ul> 
    <li>Key 1: Jurisdiction
    <li>Key 2: the date as a String '2020-04-02'
    <li>Value: number or 'flag' value, such as 'N' for no-update-that-day.
   </ul>
   
    <P>The iteration order is the natural order of {@link Jurisdiction}, 
    and the natural order of strings of the form 'yyyy-mm-dd'.
  */
  public Map<Jurisdiction, Map<String /*2020-04-02*/, String /*123|N*/>> timeSeries(){
    return timeSeriesData;
  }

  // PRIVATE 

  private Series series;
  
  /** Time series data. */
  private Map<Jurisdiction, Map<String /*2020-04-02*/, String /*123|N*/>> timeSeriesData = new LinkedHashMap<>();

  /** Histograms (PLURAL) for all days (less commonly used). */
  private Map<String /*2020-04-02*/, Map<Jurisdiction, String /*123|N*/>> histogramsData = new LinkedHashMap<>();
  
  /** Dumb data carrier. */
  private static final class DataPoint {
    DataPoint(Jurisdiction juris, String date, String value){
      this.juris = juris;
      this.date = date;
      this.value = value;
    }
    Jurisdiction juris;
    String date;
    String value;
  }
  
  /** Transform time-series data into histogram-data. */
  private Map<String /*2020-04-02*/, Map<Jurisdiction, String /*123|N*/>> histogramsImpl(){
    Map<String /*2020-04-02*/, Map<Jurisdiction, String /*123|N*/>> result = new LinkedHashMap<>();
    for(Jurisdiction juris : timeSeriesData.keySet()) {
      Map<String, String> timeSeries = timeSeriesData.get(juris);
      for (String date : timeSeries.keySet()) {
        String value = timeSeries.get(date);
        DataPoint dp = new DataPoint(juris, date, value);
        //now that we have the data point, we can shove it into the histogram data structure
        //we have to manage how that works, because the level-2 map may not yet exist
        Map<Jurisdiction,String> one = result.get(dp.date);
        if (one == null) {
          //the level-2 map hasn't been created yet, so we need to do that first
          Map<Jurisdiction, String> newOne = new LinkedHashMap<>();
          newOne.put(dp.juris, dp.value);
          //now we can add the new map, which already contains its first value
          result.put(dp.date, newOne);
        }
        else {
          //the level-2 map exists, so just use it
          one.put(dp.juris, dp.value);
        }
      }
    }
    return result;    
  }
}