package epidemic.stats.render.markdown;

import static epidemic.stats.Util.*;

import java.math.BigDecimal;
import java.util.Optional;

import epidemic.stats.datastore.FileSys;
import epidemic.stats.model.Jurisdiction;
import epidemic.stats.model.SourceData;
import epidemic.stats.render.Range;
import epidemic.stats.render.Rendering;

/** Renderings that are specific to Markdown. */
class MarkdownRendering {
  
  static Rendering linkToScreenshot(FileSys fileSys) {
    Rendering result = (v,juris,date,sourceData) -> {
      String s = v;
      if (hasContent(v)) {
        String screenshotDir = fileSys.screenshotDirNameForDate().get(date);
        s = "[" + v + "](" + SCREENSHOT_BASE_URL + screenshotDir + SLASH + juris + DOT + SCREENSHOT_FILE_EXTENSION + ")";
      }
      return s;
    };
    return result;
  }
  
  /**
   Nice trick: the image as small as a single pixel.
   You tweak the width of the image to represent a numeric value (proportional).
   The image simply resides in the same dir as the generated markdown files. 
   If code present, then the width is 0. 
  */
  static Rendering barForGraph(Range range) {
    Rendering result = (v,juris,date,sourceData) -> {
      String s = v;
      if (hasContent(v)) {
        String image = imageFor(v);
        s = "<img src='" + image + "' height='10' width='" + graphWidth(v, sourceData, juris, range) +"' title='" + v + "'>";
      }
      return s;
    };
    return result;
  }

  // PRIVATE
  private static final String SCREENSHOT_BASE_URL = "https://github.com/johanley/covid-19-canada/blob/master/data/screenshots/";
  private static final String SLASH = "/";
  private static final Integer IMAGE_MAX_WIDTH = 350; //500: complaints about truncation on an old ipad

  private static Integer graphWidth(String v, SourceData data, Jurisdiction juris, Range range) {
    //Typical data:
    // 7000 cases
    // 70   deaths
    // 4    cases per 100,000
    // 0.74 deaths per 100,000
    //calculate all with doubles; truncate to integer
    Double result = 0D; //for cases where there is no number
    Optional<BigDecimal> numericVal = asNum(v);
    if(numericVal.isPresent() && range.MAX > 0) {
      result = (IMAGE_MAX_WIDTH * numericVal.get().doubleValue()) / range.MAX; //integer division: truncates, doesn't round
    }
    return result.intValue(); //rounding vs truncation really doesn't matter here
  }
  
  private static String imageFor(String val) {
    String result = "bar.png";
    Optional<BigDecimal> numericVal = asNum(val);
    if(numericVal.isPresent() && numericVal.get().compareTo(BigDecimal.ZERO) < 0) {
      result = "negative.png";
    }
    return result;
  }
}
