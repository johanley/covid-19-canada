package epidemic.stats.render;

/** 
 Simple struct for a range of values.
 This was created for calculated the width of bar graphs. 
*/
public class Range {
  public Range(Double min, Double max) {
    this.MIN = min;
    this.MAX = max;
  }
  public Double MIN;
  public Double MAX;
}
