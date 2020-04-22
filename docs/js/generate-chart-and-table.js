/** 
 Generate a dynamic chart and table, viewing the stats in the desired way.
 Returns a global object, using an IIFE. 
 Uses the plotly.js library.
*/
var GENERATE_CHART_AND_TABLE = (function(){

  /*
   - flesh out the menu; put it on every page
   - jquery?
  */
  
  //var's that aren't local to a function are in CAPS here

  /* 
   This was a bad idea. Dangerous global. 
   A better impl would access this data only at the top level, and pass it into functions.
   This global makes the code harder to maintain. 
   In some contexts, the data isn't a request param, it's some specific value. 
  */  
  var PARAMS = UTIL.requestParams(window); //default

  /* div id's */
  var DEATHS_VS_CASES = 'deaths-vs-cases'; 
  
  /** 
   Look up and store all of the dates in an array. All of the juris have the same dates. 
  */
  var all_dates_array = function(){
    var result = [];
    //hard-coding this ok, to let it run everywhere
    var data = STATS.deaths.data.bc //an array of objects like this one: {"2020-04-12":123} 
    for (var i = 0; i < data.length; ++i){
      var point = data[i];
      for (name in point){ //there's only one name/property (the date)
       if (typeof point[name] !== 'function' && point.hasOwnProperty(name)){
        result[i] = name; //the date string 
       }
      }       
    }
    return result;
  };
  var ALL_DATES = all_dates_array();
  
  var ALL_SERIES = ['deaths', 'cases', 'tests'];
  
  /* The top-level federal jurisdiction. */
  var FEDERAL = 'ca'; 

  /** Hard-coded values for per capita calculations. */  
  var PER_SO_MANY_PEOPLE = 100000;
  
  /** Using an array guarantees an iteration order, which is useful for the view-across-space. */
  var POPULATIONS = [
    {"bc": 5110917}, 
    {"ab": 4413146}, 
    {"sk": 1181666}, 
    {"mb": 1377517}, 
    {"on":14711827}, 
    {"qc": 8537674}, 
    {"nb":  779993}, 
    {"ns":  977457}, 
    {"pe":  158158}, 
    {"nl":  521365}, 
    {"nu":   39097}, 
    {"nt":   44904}, 
    {"yt":   41078}, 
    {"ca":37894799} 
  ]; 
  
  var REMOVE_BAR_BUTTONS = ['toImage', 'zoom2d', 'pan2d', 'zoomIn2d', 'zoomOut2d', 'lasso2d', 'autoScale2d', 'resetScale2d', 'toggleSpikelines', 'hoverCompareCartesian', 'select2d'];
  
  var STANDARD_OPTIONS = {
    //staticPlot: true,
    responsive: true,
    modeBarButtonsToRemove: REMOVE_BAR_BUTTONS
  };
  
  var CODE_TO_TEXT = {
    'deaths' : 'Deaths',
    'cases': 'Cases',
    'tests': 'Tests',
    'nominal': 'Total',
    'di': 'Daily',
    'pc': 'Per Capita'
  };
  
  var population_for = function(juris){
    var result;
    for (var i=0; i < POPULATIONS.length; ++i){
      var thing = POPULATIONS[i];
      if (thing.hasOwnProperty(juris)){
        result = thing[juris];
        break;
      }
    }
    return result;
  };
  
  /** Array with definite order (as usual). Analogous to all_dates. */
  var all_jurisdictions = function(){
    var result = [];
    for(var i=0; i < POPULATIONS.length; ++i){
      //each object has 1 property, that needs to be extracted
      var thing = POPULATIONS[i];
      for (name in thing){
        if (typeof thing[name] !== 'function' && thing.hasOwnProperty(name)){
          result[i] = name;
        }
      }
    }
    return result;
  };
  
  var is_num = function(thing){
    return !isNaN(thing);
  };
  
  var time_trace = function(juris, series, rendering, plot_type){
     var data = STATS[series].data[juris] //an array of objects like this one: {"2020-04-12":123} 
     //need to split array into two 'parallel' arrays, one for the x-values (dates), one for the y-values (numbers)
     var xs = [];
     var ys = [];
     var chart_renderings = pipeline_time_chart(series, rendering);
     for (var i = 0; i < data.length; ++i){
       var thing = data[i];
       //examine the props of the thing; the name goes in x, the value goes in y
       for (name in thing){ //there's only one name/property (the date)
        if (typeof thing[name] != 'function'){
          if (is_num(thing[name])){ //SKIP ANY NON-NUMERIC CODES!
            xs[i] = name; //the date string 
            var val = render(series, name, juris, chart_renderings);
            ys[i] = val;
          }
        }
       }
     }
     var result = {
       x: xs,
       y: ys,
       type: plot_type
     };
     return result;
  };
  
  /** Returns an array of trace objects. */ 
  var time_traces = function(juris, series, rendering, juris_compare, plot_type){
    var result = [];
    var trace1 = time_trace(juris, series, rendering, plot_type);
    if (juris_compare){
      trace1.name = juris.toUpperCase();
      var trace2 = time_trace(juris_compare, series, rendering, plot_type);
      trace2.name = juris_compare.toUpperCase();
      result = [trace1, trace2];
    }
    else {
      result = [trace1];
    }
    return result;
  };

  /** The object needed by the plotting tool, plotly.js. */
  var plot_details_time = function(juris, series, rendering, juris_compare){
     var result = {};
     result.data = time_traces(juris, series, rendering, juris_compare, 'bar');

     var versus = '';
     if (juris_compare){
       versus = 'vs ' + juris_compare.toUpperCase();
     }
     result.layout = {
      xaxis: {
        type: 'date',
      },
      yaxis: {
        title: ''
      },
      title: juris.toUpperCase() + " " + CODE_TO_TEXT[rendering] + " " + CODE_TO_TEXT[series] + " " + versus
     };
     if (PARAMS.logarithmic){
      result.layout.yaxis.type = 'log';
     }
     
     result.config = STANDARD_OPTIONS;
     return result;
  };
  
  /** Most recent date in the data-set. */
  var most_recent_date = function(){
    return ALL_DATES[0];
  };
  
  var oldest_date = function(){
    return ALL_DATES[ALL_DATES.length-1];
  };

  /** This will FAIL if the data-set has an insufficient number of days. */  
  var as_of_date = function(num_days_ago){
    return ALL_DATES[num_days_ago];
  };
  
  /** 
   Nice feature: preserve series/rendering when the user changes across-space to across-time, and vice versa.  
    'time.html?juris=bc&rendering=nominal&series=deaths&juris_compare=&view_across=time&submit=Show+Chart'
    'space.html?rendering=nominal&series=deaths&days_ago=0&view_across=space&submit=Show+Chart'
  */
  var url_to_opposing_view = function(opposing_view, series, rendering){
    var result = '';
    if ('space' === opposing_view){
      result = 'space.html?days_ago=0&view_across=space&submit=Show+Chart';
    }
    else {
      result = 'time.html?juris=bc&juris_compare=&view_across=time&submit=Show+Chart';
    }
    result = result + '&series=' + series;
    result = result + '&rendering=' + rendering;
    return result;
  };
  var opposite_of = function(view_across){
    return (view_across === 'space') ? 'time' : 'space';
  };
  var update_link_to_opposing_view = function(view_across, series, rendering){
    if (view_across){
      var opposing_view = opposite_of(view_across);
      var link_to_opposing_view = document.getElementById('link_to_' + opposing_view);
      link_to_opposing_view.href = url_to_opposing_view(opposing_view, series, rendering);
    }
  };
  
  /** Look up the nominal value. Returns a number or code. Returns 0 if nothing found. */
  var nominal_val_for = function(series, date, juris){
    var result;
    var points = STATS[series].data[juris]; // array of objects like {"2020-04-11": 158}
    for(var i=0; i < points.length; ++i){
      var point = points[i];
      for (name in point){
        if (typeof point[name] !== 'function' && point.hasOwnProperty(name)){
          if (name === date){ //the date matches the property name
            result = point[name];
            return result; //quick exit from 2 loops!
          }
        }
      }
    }
    return result;
  };
  
  /** 
   Use the array of date strings. Assumes there's no days missing. 
   If a date is indeed missing, then the num_days will be really be 'num-reported-days', 
   which is probably acceptable.
  */
  var earlier_date = function(date, num_days_prev)  {
    var result;
    //find the index of the given date:
    var NOT_FOUND = -1;
    var date_idx = NOT_FOUND; //default
    for(var i=0; i < ALL_DATES.length; ++i){
      if (date === ALL_DATES[i]){
        date_idx = i;
        break;
      }
    }
    if (date_idx > NOT_FOUND){
      if ((date_idx + num_days_prev) < (ALL_DATES.length)){
        result = ALL_DATES[date_idx + num_days_prev];
      }
    }
    return result;
  };
  
  /** 
   The difference between the current day and N days ago. 
   Returns a non-numeric code if either day is non-numeric! 
  */
  var render_change_for = function(num_days_prev, series, juris){
    var func_result = function(val, juris, date, series){
      var result = "N"; //not reported
      var earlier_dt = earlier_date(date, num_days_prev);
      var earlier_val = nominal_val_for(series, earlier_dt, juris);
      if (is_num(val) && is_num(earlier_val)){
        result = val - earlier_val;
      }
      return result;
    };
    return func_result;
  };  

  /** 
   If numeric, change to per 100,000 population. No rounding applied!
   Taken from StatCan, estimated values for 2020-Q1, retrieved on 2020-04-04:
    https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710000901
  */
  var render_per_capita = function(val, juris, date, series){
    var result = val; //default if not numeric
    if (is_num(val)){
      var population = population_for(juris);
      result = PER_SO_MANY_PEOPLE * (val/population); //NOT integer division in js
    }
    return result;
  };
  
  /** If numeric, round to the nearest integer. */
  var render_round = function(val, juris, date, series){
    var result = val; //default if not numeric
    if (is_num(val)){
      result = Math.round(val);
    }
    return result;
  };
  
  /** If numeric, round to the 2 decimals (I'm not bothering to parameterize the num of decimals here). */
  var render_two_decimals = function(val, juris, date, series){
    var result = val; //default if not numeric
    if (is_num(val)){
      result = Math.round((val+Number.EPSILON)*100)/100;
    }
    return result;
  };
  
  /** Plus or minus sign in front of the numeric value. */
  var render_sign = function(val, juris, date, series){
    var result = val; //default if not numeric
    if (is_num(val)){
      var sign = ""; //for 0!
      if (val > 0) sign = "+";
      if (val < 0) sign = ""; //not needed! it's already in the number!
      result = sign + val;
    }
    return result;
  };
  
  var screenshot_dir_for = function(date){
    var result = "";
    for(var i=0; i < SCREENSHOT_DIRECTORIES.length; ++i){
      if (SCREENSHOT_DIRECTORIES[i].startsWith(date)){
        result = SCREENSHOT_DIRECTORIES[i];
      }
    }
    return result;
  };
  
  var render_link_to_screenshot = function(val, juris, date, series){
    var SCREENSHOT_BASE_URL = "https://github.com/johanley/covid-19-canada/blob/master/data/screenshots/";
    var SLASH = "/";
    var url = SCREENSHOT_BASE_URL + screenshot_dir_for(date)+ SLASH + juris + ".png";
    var result = "<a href='" + url + "'>" + val + "</a>";
    return result;
  };
  
  /** 
   The raw data is in string form. It usually holds a number, but can also hold a code such as 'N', for not-updated. 
   This function gets the most recent numeric value, STARTING with the given date, and moving back in time.
  */
  var render_force_numeric = function(val, juris, date, series){
    var result = "0";
    if (is_num(val)){
      result = val;
    }
    else {
      //the data-point is not a number
      //find the most recent numeric entry, if any, going back in time from the given date
      var points = STATS[series].data[juris]; // array of objects like {"2020-04-11": 158}
      for(var i=0; i < points.length; ++i){
        var point = points[i];
        for (name in point){
          if (typeof point[name] !== 'function' && point.hasOwnProperty(name)){
            var other_date = name;
            if (other_date < date){ //before the given date
              var val = point[name];
              if (is_num(val)){
                result = val;
                return result; //quick exit from 2 loops!
              }
            }
          }
        }
      }
    }
    return result;
  };
  
  /** 157630 is rendered as 157,630. After this rendering, it's no longer a number! */
  var render_with_commas = function(val, juris, date, series){
    var result = val; //default
    if (is_num(val)){
      var parts = val.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      result = parts.join(".");    
    }
    return result;
  };
  
  /** Rendering-pipeline for the summary-data table. */  
  var pipeline_summary_table = function(series, rendering) {
    var table = {
      "deaths": {"nominal":[render_force_numeric, render_with_commas, render_link_to_screenshot], "di": [render_force_numeric, render_change_for(1), render_sign, render_with_commas], "pc": [render_force_numeric, render_per_capita, render_two_decimals]},
      "cases":  {"nominal":[render_force_numeric, render_with_commas, render_link_to_screenshot], "di": [render_force_numeric, render_change_for(1), render_sign, render_with_commas], "pc": [render_force_numeric, render_per_capita, render_round, render_with_commas]},
      "tests":  {"nominal":[render_force_numeric, render_with_commas, render_link_to_screenshot], "di": [render_force_numeric, render_change_for(1), render_sign, render_with_commas], "pc": [render_force_numeric, render_per_capita, render_round, render_with_commas]},
    };
    return table[series][rendering];
  };
  
  /** 
   Rendering-pipeline for the chart.
   The rounding helps, because the value can be seen in a tooltip.
  */  
  var pipeline_time_chart = function(series, rendering) {
    var table = {
      "deaths": {"nominal":[], "di": [render_change_for(1)], "pc": [render_per_capita, render_two_decimals]},
      "cases":  {"nominal":[], "di": [render_change_for(1)], "pc": [render_per_capita, render_round]},
      "tests":  {"nominal":[], "di": [render_change_for(1)], "pc": [render_per_capita, render_round]},
    };
    return table[series][rendering];
  };
  
  /* Most recent numeric values in this case. */
  var pipeline_space_chart = function(series, rendering) {
    var table = {
      "deaths": {"nominal":[render_force_numeric], "di":[render_force_numeric, render_change_for(1), render_sign, render_with_commas], "pc": [render_force_numeric, render_per_capita, render_two_decimals]},
      "cases":  {"nominal":[render_force_numeric], "di":[render_force_numeric, render_change_for(1), render_sign, render_with_commas], "pc": [render_force_numeric, render_per_capita, render_round]},
      "tests":  {"nominal":[render_force_numeric], "di":[render_force_numeric, render_change_for(1), render_sign, render_with_commas], "pc": [render_force_numeric, render_per_capita, render_round]},
    };
    return table[series][rendering];
  };
  
  /** Rendering-pipeline for the source-data table. */  
  var pipeline_table_time = function(series, rendering) {
    var table = {
      "deaths": {"nominal":[render_with_commas, render_link_to_screenshot], "di": [render_change_for(1), render_sign, render_with_commas], "pc": [render_per_capita, render_two_decimals]},
      "cases":  {"nominal":[render_with_commas, render_link_to_screenshot], "di": [render_change_for(1), render_sign, render_with_commas], "pc": [render_per_capita, render_round, render_with_commas]},
      "tests":  {"nominal":[render_with_commas, render_link_to_screenshot], "di": [render_change_for(1), render_sign, render_with_commas], "pc": [render_per_capita, render_round, render_with_commas]},
    };
    return table[series][rendering];
  };
  
  /** Rendering-pipeline for the source-data table. */  
  var pipeline_table_space = function(series, rendering) {
    var table = {
      "deaths": {"nominal":[render_force_numeric, render_with_commas, render_link_to_screenshot], "di": [render_change_for(1), render_sign, render_with_commas], "pc": [render_force_numeric, render_per_capita, render_two_decimals]},
      "cases":  {"nominal":[render_force_numeric, render_with_commas, render_link_to_screenshot], "di": [render_change_for(1), render_sign, render_with_commas], "pc": [render_force_numeric, render_per_capita, render_round, render_with_commas]},
      "tests":  {"nominal":[render_force_numeric, render_with_commas, render_link_to_screenshot], "di": [render_change_for(1), render_sign, render_with_commas], "pc": [render_force_numeric, render_per_capita, render_round, render_with_commas]},
    };
    return table[series][rendering];
  };
  
  /** 
   Apply a pipeline of transformations to the nominal data, in order.
  */
  var render = function (series, date, juris, renderings /*array of functions*/){
    var result = nominal_val_for(series, date, juris); //always start with the nominal value
    for(var i=0; i < renderings.length; ++i){
      result = renderings[i].call(null /*this object*/, result, juris, date, series);
    }
    return result;
  };

  var render_source_data_table_for = function(series, rendering, date, juris){
    var renderings = pipeline_table_time(series, rendering);
    var result = render(series, date, juris, renderings);
    return result;
  };
  
  var render_summary_data_table_for = function(series, rendering, date, juris){
    var renderings = pipeline_summary_table(series, rendering);
    var result = render(series, date, juris, renderings);
    return result;
  };
  
  var td_for = function(text){
    var td = document.createElement("td");
    //cheat a bit: peek to see if it's an anchor
    if (!is_num(text) && text.startsWith("<a href")){
      td.innerHTML = text;
    }
    else {
      td.appendChild(document.createTextNode(text));
    }
    td.align = "right";
    return td;
  };

  /** 
   See if there's any data worth reporting.
   Force-numeric, and see if there's a non-zero value. Only works for totals!
  */  
  var has_total = function(series, juris){
    var renderings = [render_force_numeric];
    var val = render(series, most_recent_date(), juris, renderings);
    return (val > 0);
  };
  
  var append_tr_row_to = function(tbody, date, juris, series){
    var row = document.createElement("tr");
    var td = td_for(CODE_TO_TEXT[series]);
    td.align = 'left';
    row.appendChild(td);
    row.appendChild(td_for(render_summary_data_table_for(series, 'nominal', date, juris) )); 
    row.appendChild(td_for(render_summary_data_table_for(series, 'di', date, juris))); 
    row.appendChild(td_for(render_summary_data_table_for(series, 'pc', date, juris))); 
    tbody.appendChild(row);
  };
  
  var append_all_tr_row_to = function(tbody, date, juris, series_array, render_for, first){
    var row = document.createElement("tr");
    row.appendChild(td_for(first));
    for (var i=0; i < series_array.length; ++i){
      row.appendChild(td_for(render_for.call(null, series_array[i], 'nominal', date, juris))); 
      row.appendChild(td_for(render_for.call(null, series_array[i], 'di', date, juris))); 
      row.appendChild(td_for(render_for.call(null, series_array[i], 'pc', date, juris))); 
    }
    tbody.appendChild(row);
  };

  var series_for = function(juris){
    return juris === FEDERAL ? ['deaths', 'cases'] : ALL_SERIES; //CA doesn't report tests!
  };
  
  var populate_summary_table = function(juris){
    var summary_note = document.getElementById('summary_note');
    summary_note.innerHTML = juris.toUpperCase() + " " + most_recent_date();
    var tbody = document.getElementById('summary_data_body');
    var series_array = series_for(juris);
    for(var i=0; i < series_array.length; ++i){
      append_tr_row_to(tbody, most_recent_date(), juris, series_array[i]);
    }
  };
  
  /* Relative url. juris.html?juris=bc  */
  var td_and_link_for = function(juris){
    var a = document.createElement("a");
    a.href= "juris.html?juris="+juris;
    a.innerHTML = juris.toUpperCase();
    var td = document.createElement("td");
    td.appendChild(a);
    return td;
  };
  
  var append_tr_row_to_summary_juris = function(tbody, date, juris, series_array){
    var row = document.createElement("tr");
    //row.appendChild(td_for(juris.toUpperCase())); 
    row.appendChild(td_and_link_for(juris)); 
    for (var i=0; i < series_array.length; ++i){
      var val = render_summary_data_table_for(series_array[i], 'nominal', date, juris);
      row.appendChild(td_for(val)); 
    }
    tbody.appendChild(row);
  };
  
  var populate_summary_juris_table = function(){
    var tbody = document.getElementById('summary_juris_body');
    var all_juris = all_jurisdictions();
    var the_date = most_recent_date();
    for(var i=0; i < all_juris.length; ++i){
      if (FEDERAL !== all_juris[i]){ //skip CA in this context
        append_tr_row_to_summary_juris(tbody, the_date, all_juris[i], ALL_SERIES);
      }
    }
  };
  
  var populate_all_table_rows_time = function(){
    populate_summary_table(PARAMS.juris);
    var tbody = document.getElementById('source_data_body');
    var series_name_col = document.getElementById('series_name_col');
    series_name_col.innerHTML = PARAMS.juris.toUpperCase() + ' ' + CODE_TO_TEXT[PARAMS.series];
    var series_array = [PARAMS.series]; 
    for(var j=0; j < ALL_DATES.length; ++j){
      append_all_tr_row_to(tbody, ALL_DATES[j], PARAMS.juris, series_array, render_source_data_table_for, ALL_DATES[j]);
    }
  };

  /////////// SPACE (... the final frontier...) /////////////
  
  /* May or may not include CA, the federal jurisdiction. */
  var juris_for = function(include_ca){
    var result = all_jurisdictions();
    if (! include_ca){
      //assumes CA is at the end!
      result = result.slice(0, result.length - 1);
    }
    return result;
  };
  
  //I should be grabbing polyfills for newer things, like .map
  var capitalized = function(arry){
    var result = [];
    for (var i=0; i < arry.length; ++i){
      result[i] = arry[i].toUpperCase();
    }
    return result;
  };
  
  /** Returns an array of trace objects (in this case 1 object). */ 
  var space_trace = function(include_ca, plot_type){
     //parallel arrays for x and y
     var xs = juris_for(include_ca);
     var ys = []; //the most recent data-point, across all juris
     var chart_renderings = pipeline_space_chart(PARAMS.series, PARAMS.rendering);
     var current_date = most_recent_date();
     for (var i=0; i < xs.length; ++i){
       var the_juris = xs[i];
       ys[i] = render(PARAMS.series, as_of_date(PARAMS.days_ago), the_juris, chart_renderings);
     }
     var result = {
       x: capitalized(xs),
       y: ys,
       type: plot_type
     };
     return [result];  
  };
  
  var render_source_data_table_for_space = function(series, rendering, date, juris){
    var renderings = pipeline_table_space(series, rendering);
    var result = render(series, date, juris, renderings);
    return result;
  };

  /** The object needed by the plotting tool, plotly.js. */
  var plot_details_space = function(rendering, series, days_ago){
     var result = {};
     result.data = space_trace(PARAMS.include_ca, 'bar');
     result.layout = {
      title: CODE_TO_TEXT[rendering] + " " + CODE_TO_TEXT[series] + " " + as_of_date(days_ago)
     };
     result.config = STANDARD_OPTIONS;
     return result;
  };
  
  var populate_all_table_rows_space = function(){
    var tbody = document.getElementById('source_data_body');
    var series_name_col = document.getElementById('series_name_col');
    series_name_col.innerHTML = CODE_TO_TEXT[PARAMS.series];
    var series_array = [PARAMS.series]; 
    //var series_array = ALL_SERIES;
    var all_juris = all_jurisdictions();
    var the_date = as_of_date(PARAMS.days_ago);
    for(var i=0; i < all_juris.length; ++i){
      append_all_tr_row_to(tbody, the_date, all_juris[i], series_array, render_source_data_table_for_space, all_juris[i].toUpperCase());
    }
  };

  
  //// Summary ////
  
  /** 
   Peek ahead: some juris excluded because their numbers are so low. 
   Leave out if there are no deaths for the juris on the given date.
  */
  var summary_deaths_vs_cases_juris = function (date){
    var result = [];
    var all_juris = all_jurisdictions();
    var x_renderings = pipeline_summary_table('deaths', 'pc');
    for (var i=0; i < all_juris.length; ++i){
      var x_val = render('deaths', date, all_juris[i], x_renderings);
      if (x_val > 0){ //too much crowding of the y-axis 
        result[result.length] = all_juris[i]; //the indexes are NOT in sync, because some are being skipped
      }
    }
    return result;
  };

  var summary_deaths_vs_cases_trace = function(date, jurisdictions){
    var xs = [];
    var ys = [];
    var marker_text = [];
    var x_renderings = pipeline_summary_table('deaths', 'pc');
    var y_renderings = pipeline_summary_table('cases', 'pc');
    for (var i=0; i < jurisdictions.length; ++i){
      xs[i] = render('deaths', date, jurisdictions[i], x_renderings);
      ys[i] = render('cases', date, jurisdictions[i], y_renderings);
      marker_text[i] = jurisdictions[i].toUpperCase();
    }
    return {
     x: xs,
     y: ys,
     mode: 'markers+text',
     type: 'scatter',
     text: marker_text,
     textposition: 'left center',
     marker: {size:4}
    };
  };
  
  /** Per capita. Force numeric. Show only the jurisdictions that are given. */
  var summary_deaths_vs_cases = function(date, jurisdictions){
     var result = {};
     var trace = summary_deaths_vs_cases_trace(date, jurisdictions);
     result.data = [trace];
     result.layout = {
      title: "Per Capita: Deaths vs Cases " + date,
      xaxis: {title: "Deaths per 100,000"},
      yaxis: {title: "Cases per 100,000"}
     };
     result.config = STANDARD_OPTIONS;
     return result;
  };
  
  /////// Animation 
  
  /* This data gets MERGED INTO the existing state of the plot.  */
  var animation_frame_for = function(date, juriss){
    var result = {
      data: [summary_deaths_vs_cases_trace(date, juriss)]
    };
    result.data[0].line = {simplify: false}; //recommended for all animations
    return result;
  };
  
  /* 
   To avoid repeatedly adding the same set of frames. I can't see a method of querying frames, so I'll use a silly global. 
   Can I use a closure instead?
  */
  var has_run_once = false;
  
  /*
   Redraw using the oldest date (not the most recent).
   Change the data; pass in the new data to the animate function.
   Pass from the oldest date to the most recent date.
   Use N frames, one frame for each day.
  */
  var animate_bottom_chart_impl = function(){
    //turn off the autorange; we want to keep it as is, to preserve the ranges
    var layout = document.getElementById(DEATHS_VS_CASES).layout;
    layout.xaxis.autorange = false;
    layout.yaxis.autorange = false;
    
    //remove the existing trace for the most-recent-date
    Plotly.deleteTraces(DEATHS_VS_CASES, 0);
    
    //add the trace for the oldest-date, but use the juris that have deaths in the most-recent-date
    var juriss = summary_deaths_vs_cases_juris(most_recent_date());
    var trace =  summary_deaths_vs_cases_trace(oldest_date(), juriss);
    Plotly.addTraces(DEATHS_VS_CASES, trace);
    
    //now that the chart has been drawn in its initial state, you can start the animation
    //animate by adding frames to the plot, then calling the animate function
    //note the reversed-order of this iteration over the dates
    if(!has_run_once){
      var frames = [];
      for(var i=ALL_DATES.length-1; i >= 0; --i){
        frames.push(animation_frame_for(ALL_DATES[i], juriss));
      }
      //add frames to the div
      Plotly.addFrames(DEATHS_VS_CASES, frames);
      has_run_once = true;
    }
    
    var options = {frame: {duration: 500}, /*transition: {duration: 500, easing:'cubic-in-out'}*/ };
    Plotly.animate(DEATHS_VS_CASES, null, options); //null means all frames that were added will be used, in sequence
  };
  
  var animate_bottom_chart = function(){
    var animate_button = document.getElementById('animate');
    animate_button.onclick = animate_bottom_chart_impl;
  };
  
  
  
  /////////////////
  
  var plot_chart_and_populate_table = function(id_chart, id_table){
    update_link_to_opposing_view(PARAMS.view_across, PARAMS.series, PARAMS.rendering);
    if ('time' === PARAMS.view_across){
      //time series for a given jurisdiction
      var plot = plot_details_time(PARAMS.juris, PARAMS.series, PARAMS.rendering, PARAMS.juris_compare);
      Plotly.newPlot(id_chart, plot); //overwrites; slower than 'react'
      populate_all_table_rows_time();
    }
    else {
      //compare jurisdictions (across space) for a given date
      var plot = plot_details_space(PARAMS.rendering, PARAMS.series, PARAMS.days_ago);
      Plotly.newPlot(id_chart, plot); //overwrites
      populate_all_table_rows_space();
    }
  };

  var plot_summary_charts = function(deaths_vs_cases_id, date, juriss){
    var plot = summary_deaths_vs_cases(date, juriss);
    Plotly.newPlot(deaths_vs_cases_id, plot);
  };
  
  var plot_juris_daily = function(juris){
    for(var i=0; i < ALL_SERIES.length; ++i){
      var no_juris_compare = '';
      if (has_total(ALL_SERIES[i], juris)){ //skip if the total is 0; there's no data, so don't show any chart
        var plot = plot_details_time(juris, ALL_SERIES[i], 'di', no_juris_compare);
        Plotly.newPlot('daily-' + ALL_SERIES[i], plot); 
      }
    }
  };
  
  /* Summary table. 3 charts with daily change. Chart not shown if there's no data. */
  var plot_juris = function(){
    var juris = PARAMS.juris;
    populate_summary_table(juris);
    plot_juris_daily(juris);
  };
  
  var summary = function(){
    populate_summary_table(FEDERAL);
    plot_juris_daily(FEDERAL);
    
    populate_summary_juris_table();
    
    var juriss = summary_deaths_vs_cases_juris(most_recent_date());
    plot_summary_charts(DEATHS_VS_CASES, most_recent_date(), juriss);
    animate_bottom_chart();
  };

  //END OF PRIVATE ITEMS
  
  /* Return the object that contains the items needed by the caller. */
  return {
    plot_chart_and_populate_table : plot_chart_and_populate_table,
    plot_juris: plot_juris,
    summary: summary
  };
  
}()); // the top level function is invoked here; its return value is stored in GENERATE_CHART_AND_TABLE, a global variable
