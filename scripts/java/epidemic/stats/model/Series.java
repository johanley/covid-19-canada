package epidemic.stats.model;

/** 
 The data series being tracked, per jurisdiction. 
*/
public enum Series {
  
  /** Cumulative. */
  deaths, 
  
  /** Cumulative. Confirmed and probable/presumptive. */
  known_cases,
  
  /** Cumulative. Completed tests. Different: the federal jurisdiction doesn't track tests. */
  tests;
}
