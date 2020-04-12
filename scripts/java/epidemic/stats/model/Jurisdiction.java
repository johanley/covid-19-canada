package epidemic.stats.model;

import java.util.Arrays;

/** Provinces, territories, and the federal government. */
public enum Jurisdiction {

  /** 
   The order is significant.
   The order here must reflect the order of columns used in the blah.md tables.
   The names must match the names of screenshot image files. 
  */
  bc(5110917L),
  ab(4413146L),
  sk(1181666L),
  mb(1377517L),
  on(14711827L),
  qc(8537674L),
  nb(779993L),
  ns(977457L),
  pe(158158L),
  nl(521365L),
  nu(39097L),
  nt(44904L),
  yt(41078L),
  
  /** The top-level jurisdiction, containing all the others. */
  ca(37894799L);
  
  /* IMPROVEMENT: this could be replaced by a csv file, instead of hard-coded names and data. */
  
  /** Case is not significant. */
  public static boolean known(String text) {
    Jurisdiction juris = Jurisdiction.valueOf(text.toLowerCase());
    return juris != null;
  }
  
  public Long getPopulation() {
    return population;
  }

  /** Some contexts need to exclude the federal jurisdiction.  */
  public static Jurisdiction[] valuesWithoutCA() {
    Jurisdiction[] result = Arrays.copyOfRange(values(), 0, values().length-1);
    return result;
  }
  
  // PRIVATE
  
  private Jurisdiction(Long population) {
    this.population = population;
  }
  
  /** 
   Used in per-capita views of the data.
   Taken from StatCan, estimated values for 2020-Q1, retrieved on 2020-04-04:
      https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710000901
  */
  private Long population; 

}
