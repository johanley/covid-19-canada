package epidemic.stats.render;

import java.math.BigDecimal;

/**
 Calculate a difference between two values. 
 Nominal diff, percentage diff, for example.
*/
@FunctionalInterface
public interface ChangeCalc {
  
  BigDecimal apply(BigDecimal from, BigDecimal to, Integer numDays);
  
}
