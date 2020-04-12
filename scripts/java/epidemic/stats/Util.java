package epidemic.stats;

import java.math.BigDecimal;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.Optional;
import java.util.regex.Pattern;

public final class Util {
  
  public static final Charset ENCODING = StandardCharsets.UTF_8;
  public static final String CSV_SEP = ",";
  public static final String COMMENT = "#";
  public static final Integer JURISDICTION = 0;
  public static final String PIPE = "|";
  public static final String NL = System.getProperty("line.separator");
  public static final String DOT = ".";
  public static final String NOT_REPORTED = "N";
  public static final String SCREENSHOT_FILE_EXTENSION = "png";

  
  public static String[] chopInTwo(String text, String sep) {
    return text.split(Pattern.quote(sep));
  }
  
  public static void log(Object msg) {
    if (msg != null) System.out.println(msg.toString());
  }

  public static boolean hasContent(String text) {
    return text != null && text.trim().length() > 0;
  }

  /** 
   Throw a checked exception if the condition is not met.
   This method is very helpful, in that it makes 'guard code' compact, 
   and it reduces the amount of error handling code to a minimum. 
  */
  public static void mustHave(boolean condition, String msg) throws Abort {
    if (!condition) throw new Abort(msg); 
  }

  public static String quote(String name) {
    return "'" + name + "'";
  }
  
  /** Returns null if absent or non-numeric value. */
  public static Optional<BigDecimal> asNum(String val) {
    BigDecimal result = null;
    if (hasContent(val)) {
      try {
        result = new BigDecimal(val);
      }
      catch(Throwable e) {
        //ignore! it might be a code, like 'N'
      }
    }
    return Optional.ofNullable(result);
  }


}
