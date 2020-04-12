package epidemic.stats.render;

import epidemic.stats.model.Jurisdiction;
import epidemic.stats.model.SourceData;

/**
 Render a data-point value in some arbitrary way.
 
 Some renderings output a number, some don't.
 It only makes sense to do the numeric renderings first, before all non-numeric renderings.
 
 <P>Chaining together renderings in different ways lets you mix and match 
 different policies for rendering the data.
 
 <P>It's important to note that the original data, although mostly numeric, 
 can also contain codes as well, for example 'N' for not-reported.
 That's why the data is modeled here as a String, and not in a numeric form.
*/
@FunctionalInterface
public interface Rendering {

  /** Render a value taken from {@link SourceData}. */
  String render(String val, Jurisdiction juris, String date, SourceData sourceData);
  
}
