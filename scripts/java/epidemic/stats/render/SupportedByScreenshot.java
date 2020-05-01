package epidemic.stats.render;

import epidemic.stats.model.Jurisdiction;
import epidemic.stats.model.Series;

/** 
 Define what data is actually backed by a supporting screenshot.
 Links to screenshots should only be created when the screenshot shows the actual data. 
*/
public class SupportedByScreenshot {
  
  /* https://github.com/johanley/covid-19-canada/issues/5 */
  
  public boolean hasScreenshot(Series series, Jurisdiction juris, String date) {
    boolean result = true;
    if (Series.tests == series) {
      if (matchesBad(Jurisdiction.nb, "2020-04-16", juris, date)) {
        result = false;
      }
    }
    else if (Series.hosp == series) {
      if (matchesBad(Jurisdiction.on, "2020-04-01", juris, date)) {
        result = false;
      }
      if (matchesBad(Jurisdiction.qc, "2020-04-06", juris, date)) {
        result = false;
      }
      if (matchesBad(Jurisdiction.nb, "2020-04-05", juris, date)) {
        result = false;
      }
      if (matchesBad(Jurisdiction.ns, "2020-04-06", juris, date)) {
        result = false;
      }
      if (matchesBad(Jurisdiction.nl, "2020-04-03", juris, date)) {
        result = false;
      }
    }
    return result;
  }
  
  private boolean matchesBad(Jurisdiction badJuris, String badEndDate /*inclusive*/, Jurisdiction juris, String date) {
    //the date format makes it easy to compare using strings
    return badJuris == juris && date.compareTo(badEndDate) <= 0;
  }
}
