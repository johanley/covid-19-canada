package epidemic.stats.model;

/** 
 The data series being tracked, per jurisdiction. 
*/
public enum Series {
  
  deaths("Total deaths reported. Cumulative"), 
  
  known_cases("Known cases reported. Cumulative total. Includes both confirmed and probable/presumptive cases"),
  
  /**  Different: the federal jurisdiction doesn't track tests. QC, NL, NU report on people-tested, not tests.*/
  tests("Total completed tests. Cumulative. Excludes pending tests"),

  /** Not reported by the federal jurisdiction. */
  hosp("Current number of people in hospital");
  
  public String getDescription() {
    return descr;
  }
  
  private Series(String descr) {
    this.descr = descr;
  }
  private String descr;
}
