package epidemic.stats.render;

import static epidemic.stats.Util.asNum;
import static epidemic.stats.Util.hasContent;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import epidemic.stats.Util;
import epidemic.stats.model.Jurisdiction;
import epidemic.stats.model.SourceData;

/** 
 Render a data-point using an ORDERED chain of instructions on how the data is to be calculated/formatted, 
 starting from the raw value. 
 
 <P>The same data can be viewed in multiple ways. 
 Nominal, per capita (per N people), change over N days, change % over N days, rounding,  
 never-show-codes (i.e. force using the most recent numeric value), linking to screenshots,
 linking to jurisdiction-pages, and so on.
 
 <P>IMPLEMENTATION NOTE: using functional interfaces ({@Rendering}) is very useful here. 
 The caller can easily mix and match N policies for massaging the data in the desired way,
  which can be very particular to a specific set of requirements.
*/
public final class DataView {
  
  /**
   @param renderings the ordered steps in a chain of processing, taking the raw value and transforming it into 
   the final result. If the caller passes no steps, then the plain, raw value is rendered, including codes.
  */
  public DataView(SourceData sourceData, String date, Jurisdiction juris, Rendering... renderings) {
    this.sourceData = sourceData;
    this.date = date;
    this.juris = juris;
    this.renderings = renderings;
  }
  
  /** 
   Render a data-value for the given date, jurisdiction, and steps passed to the constructor.
   (Internally, this method always starts with the nominal value of the data-point; the caller doesn't 
   pass in any renderings in order to get the nominal value.) 
  */
  public String render() {
    String result = sourceData.timeSeries().get(juris).get(date); //always start with the raw value
    for (Rendering step : renderings) {
      result = step.render(result, juris, date, sourceData);
    }
    return result;
  }
  
  /** 
   Assumes all numeric renderings come UP TO AND INCLUDING the indicated one.
   This was created to help with examining the numeric values in a given context. 
   For example, a caller might 'pre-render' as numeric first, to find out the min..max range of a data-set.
  */
  public Double renderNumeric(int numNumeric) {
    String result = sourceData.timeSeries().get(juris).get(date); //always start with the raw value
    //only do part of the renderings!
    int idx = 0;
    for (Rendering step : renderings) {
      if (idx < numNumeric) {
        result = step.render(result, juris, date, sourceData);
      }
      else {
        break;
      }
      ++idx;
    }
    return Double.valueOf(result);
  }
  
  public static Long HUNDRED_THOU = 100000L;
  /** No rounding applied! See {Jurisdiction#getPopulation()}. */
  public static Rendering perCapita(Long perSoManyPeople){
    Rendering result = (v,juris,date,sourceData) -> {
      String s = v;
      if (hasContent(v)) {
        Optional<BigDecimal> value = asNum(v);
        if (value.isPresent()) {
          BigDecimal population = BigDecimal.valueOf(juris.getPopulation());
          Double valPerCapita =  perSoManyPeople * (value.get().doubleValue() / population.doubleValue()); //NOT integer division
          s = valPerCapita.toString();
        }
      }
      return s;
    };
    return result;
  }
  
  public static Integer TWO_DECIMALS = 2;
  /** Round to the given number of decimal places. */
  public static Rendering round(Integer decimals){
    Rendering result = (v,juris,date,sourceData) -> {
      String s = v;
      if (hasContent(v)) {
        Optional<BigDecimal> value = asNum(v);
        if (value.isPresent()) {
          //I'm not going to mess about with dividing with BigDecimal here
          Double dbl = value.get().doubleValue();  
          Double factor = Math.pow(10, decimals);  
          dbl = Math.round(dbl * factor) / factor;  //25.0
          if (decimals == 0) {
            s = Integer.valueOf(dbl.intValue()).toString(); //25
          }
          else {
            s = dbl.toString(); // 0.71
          }
        }
      }
      return s;
    };
    return result;
  }
  /** Round to the nearest integer. */
  public static Rendering round(){
    return round(0);
  }
  
  /** 
   If the raw value is 'N' (not updated that day) or some alpha code, then use the first previous numeric value instead.
   If this step is used, then it almost always needs to be done early in processing.
   If no numeric entry is found (rare!), then return "0". 
  */
  public static Rendering forceNumeric() {
    Rendering result = (v,juris,date,sourceData) -> {
      String s = "0";
      if (hasContent(v)) {
        Optional<BigDecimal> value = asNum(v);
        if (value.isPresent()) {
          s = value.get().toPlainString();
        }
        else {
          //the entry for the given date isn't a number
          //find the most recent numeric entry, if any; 
          //NOTE: the comparison of dates: needs to be BEFORE the given 'date' param!
          for(String otherDate : sourceData.timeSeries().get(juris).keySet()) {
            if (otherDate.compareTo(date) < 0) {
              String val = sourceData.timeSeries().get(juris).get(otherDate);
              Optional<BigDecimal> valNum = asNum(val);
              if (valNum.isPresent()) {
                s = valNum.get().toPlainString();
                break;
              }
            }
          }
        }
      }
      return s;
    };
    return result;
  }
  
  /**
   The change in the data between the given value and some N days previous.
   Can return non-numeric codes! If either end of the from-to data is not numeric, then this will return a 
   non-numeric code.
  */
  public static Rendering change(Integer numDays, ChangeCalc changeCalc){
    Rendering result = (vTo,juris,date,sourceData) -> {
      String s = Util.NOT_REPORTED; //guilty by default: assume one end of the change has not been reported
      //grab the earlier value, if possible
      String vFrom = sourceData.timeSeries().get(juris).get(earlierDate(date, numDays));
      if (hasContent(vFrom) && hasContent(vTo)) {
        Optional<BigDecimal> vFromVal = asNum(vFrom);
        Optional<BigDecimal> vToVal = asNum(vTo);
        if (vFromVal.isPresent() && vToVal.isPresent()) {
          //both from and to are present and numeric
          //calculate the diff, according to the given policy
          BigDecimal change = changeCalc.apply(vFromVal.get(), vToVal.get(), numDays);
          s = change.toPlainString(); //no rounding here; no percent sign here
        }
      }
      return s;
    };
    return result;
  }
  
  /** Prepend a plus or minus sign. */
  public static Rendering sign(){
    Rendering result = (v,juris,date,sourceData) -> {
      String s = v;
      if (hasContent(v)) {
        Optional<BigDecimal> value = asNum(v);
        if (value.isPresent()) {
          int sign = value.get().compareTo(BigDecimal.ZERO);
          String signStr = ""; //for 0
          if (sign > 0) {signStr = "+";};
          if (sign < 0) {signStr = "";}; //not needed! it's already there in the number!
          s = signStr + s;
        }
      }
      return s;
    };
    return result;
  }
  
  /** Change per day: (v2 - v1)/days. The caller will round. */
  public static ChangeCalc diff() {
    ChangeCalc result = (from, to, numDays) -> {
      BigDecimal res = to.subtract(from);
      if (numDays > 1) {
        BigDecimal denom = new BigDecimal(numDays);
        res = res.divide(denom, 10, RoundingMode.HALF_EVEN); //10 is arbitrary and big; the caller will round later
      }
      return res;
    };
    return result;
  }
  
  /** Percent change per day: 100*(v2 - v1)/(v1*days). The caller will round. */
  public static ChangeCalc percentageDiff() {
    ChangeCalc result = (from, to, numDays) -> {
      BigDecimal days = new BigDecimal(numDays);
      BigDecimal denom = from.multiply(days);
      BigDecimal numer = to.subtract(from).multiply(new BigDecimal("100"));
      BigDecimal res = numer.divide(denom, 10, RoundingMode.HALF_EVEN); 
      return res;
    };
    return result;
  }

  /** 
   The min..max value of the data-point, after applying all NUMERIC renderings.
   On the given date, for all jurisdictions (histogram style). 
   Returns 0s by default.
   
   <P>This method exists for calculating, for example, the overall width of bar graphs.
    
   @param numNumericRenderings can be 0, to mean that there are no numeric renderings used by the caller.
   In that case, only the nominal rendering is used, and in that case, 'N' values are ignored here.
   A rendering that is 'mostly-numeric' can also be included in this set! Any codes are ignored.
  */
  public static Range rangeAcrossJurisdictionsForGiven(String date, SourceData data, ExcludeFeds excludeFeds, int numNumericRenderings, Rendering[] renderings) {
    List<Double> vals = new ArrayList<>();
    vals.add(0.0);
    for (Jurisdiction juris : Jurisdiction.values()) {
      if (ExcludeFeds.YES == excludeFeds && Jurisdiction.ca == juris) {
        continue;
      }
      Rendering[] numerics = Arrays.copyOfRange(renderings, 0, numNumericRenderings);
      DataView view = new DataView(data, date, juris, numerics);
      addNumericsOnlyTo(vals, view);
    }
    return new Range(Collections.min(vals), Collections.max(vals));
  }
  
  /** 
   The min..max value of the data-point, after applying all NUMERIC renderings.
   For given jurisdiction, for all time (time-series style). 
   Returns 0s by default.
   @param numNumericRenderings can be 0, to mean that there are no numeric renderings used by the caller.
   In that case, only the nominal rendering is used, and in that case, 'N' values are ignored here.
  */
  public static Range rangeAcrossTimeForGiven(Jurisdiction juris, SourceData data, int numNumericRenderings, Rendering[] renderings) {
    List<Double> vals = new ArrayList<>();
    vals.add(0.0);
    for(String date : data.timeSeries().get(juris).keySet()) {
      Rendering[] numerics = Arrays.copyOfRange(renderings, 0, numNumericRenderings);
      DataView view = new DataView(data, date, juris, numerics);
      addNumericsOnlyTo(vals, view);
    }
    return new Range(Collections.min(vals), Collections.max(vals));
  }

  // PRIVATE 
  
  /** Raw unformatted data. Also knows the Series, if it's needed. */
  private SourceData sourceData;
  /** Look up the Value with the date. */
  private String date;
  /** Look up the Value with the Juris; also helps for per-capita calculations. */
  private Jurisdiction juris;
  /** The ordered steps of how to process the raw values, in order to get the desired final result. */
  private Rendering[] renderings;
  
  /** If not forcing to be numeric, then the nominal value can be 'N'. */
  private static void addNumericsOnlyTo(List<Double> vals, DataView view) {
    Optional<BigDecimal> val = asNum(view.render()); 
    if (val.isPresent()) {
      vals.add(val.get().doubleValue());
    }
  }
  
  /** 
   The returned date might not actually be in the data you're working with.
   It could be before the earliest date in the data. 
  */
  private static String earlierDate(String date, Integer numDays) {
    String result = "";
    try {
      LocalDate to = LocalDate.parse(date);
      LocalDate from = to.minusDays(numDays);
      result = from.toString();
    }
    catch(Throwable ex) {
      //can't parse the date string; this should never happen; the data has been verified earlier
      ex.printStackTrace();
    }
    return result;
  }
  
}