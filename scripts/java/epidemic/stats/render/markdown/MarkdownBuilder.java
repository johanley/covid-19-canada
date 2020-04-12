package epidemic.stats.render.markdown;

import static epidemic.stats.Util.NL;

import java.util.Map;

import epidemic.stats.model.Jurisdiction;
import epidemic.stats.model.SourceData;
import epidemic.stats.render.DataView;
import epidemic.stats.render.ExcludeFeds;
import epidemic.stats.render.Rendering;

/**
 Helper for generating markdown views of the data. 
 
 Ref: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet 
*/
class MarkdownBuilder {
  
  /** The caller passes 'blah' for the key, but it's ${blah}' that's actually replaced in the template text. */
  String populate(String templateText, Map<Key, String/*val*/> replacements) {
    String result = templateText; //to start with
    for (Key key : replacements.keySet()) {
      result = result.replace("${"+key.name()+"}", replacements.get(key));
    }
    return result;
  }
  
  /**
    bc|ab|....|ca| 
    Note the first char is NOT a pipe char. 
    Right-aligned, assumes numbers present. 
  */
  String tableHeaderFor(Jurisdiction[] values) {
    StringBuilder result = new StringBuilder();
    for(Jurisdiction juris : values) {
      result.append(juris.name().toUpperCase() + SEP);
    }
    return result.toString();
  }
  
  /** 
   ---:|---:|---:|
   Most columns are right-aligned, by placing the ":" on the right of the dashes.
   Note the first char is NOT a pipe char.
   Right-aligned, assumes numbers present. 
  */
  String tableHeaderSeparator(Jurisdiction[] values) {
    StringBuilder result = new StringBuilder(); 
    for(@SuppressWarnings("unused") Jurisdiction juris : values) {
      result.append(DASHES + COL_ALIGNMENT + SEP);
    }
    return result.toString();
  }
  
  String tableRows(SourceData data, Rendering... renderings) {
    StringBuilder result = new StringBuilder();
    //data.table(); k1 date, k2 juris
    for(String date : data.table().keySet()) {
      result.append(SEP+date+SEP);
      for(Jurisdiction juris : data.table().get(date).keySet()) {
        DataView view = new DataView(data, date, juris, renderings);
        String rendering = view.render();
        result.append(rendering+SEP);
      }
      result.append(NL); //end of the row
    }
    return result.toString();
  }
  
  /**
   |2020-04-03|[346](url of screenshot)|<img src='bar.gif' height='10' width='346' title='346'>| 
  */
  String jurisdictionHistogramRows(SourceData data, Jurisdiction juris, Rendering[] first, Rendering[] second) {
    StringBuilder result = new StringBuilder();
    //data.timeSeries(); k1 juris, k2 date
    for(String date : data.timeSeries().get(juris).keySet()) {
      result.append(SEP+date+SEP);
      
      DataView view = new DataView(data, date, juris, first);
      result.append(view.render()+SEP);
      
      view = new DataView(data, date, juris, second);
      result.append(view.render()+SEP);
      
      result.append(NL); //end of the row
    }
    return result.toString();
  }

  
  String summaryRowFor(SourceData data, String date, Rendering... renderings) {
    StringBuilder result = new StringBuilder();
    for (Jurisdiction juris : Jurisdiction.values()) {
      DataView view = new DataView(data, date, juris, renderings);
      result.append(view.render()+SEP);
    }
    //result.append(NL); //the new line is in the template file
    return result.toString();
  }

  /** 
   |BC|25|img tag: (two renderings of the same data-point).
   @param numNumericRenderings indicates how many of the first renderings are numeric; this is needed 
   in order to calculate the max value, which is in turn needed to render the bar graph.
   @param excludeFeds exists because you don't want to mix apples and oranges, when the data is NOT per-capita 
  */
  String summaryHistoRows(SourceData data, String date, Rendering[] first, Rendering[] second, ExcludeFeds excludeFeds) {
    StringBuilder result = new StringBuilder();
    for (Jurisdiction juris : Jurisdiction.values()) {
      
      if (ExcludeFeds.YES == excludeFeds && Jurisdiction.ca == juris) {
        continue;
      }
      
      result.append(SEP+juris.name().toUpperCase()+SEP);
      
      DataView view = new DataView(data, date, juris, first);
      result.append(view.render()+SEP);
      
      view = new DataView(data, date, juris, second);
      result.append(view.render()+SEP);
      
      result.append(NL); 
    }
    return result.toString();
  }

  //PRIVATE 
  
  private static final String SEP = "|";
  private static final String COL_ALIGNMENT = ":";
  private static final String DASHES = "---";
}
