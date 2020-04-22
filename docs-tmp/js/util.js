var UTIL = (function(){ 

  /** 
   A way of accessing request parameter values. 
   Ref:http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript 
   Returns an object (map), with name-value pairs.
  */
  function requestParams(window){
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); }, // a core js function
        query  = window.location.search.substring(1);
        
    urlParams = {};
    while (match = search.exec(query)){
       urlParams[decode(match[1])] = decode(match[2]);
    }
    return urlParams;
  };
  
  /* 
   Return an object that has all HTTP GET request params as named properties on the object.
   If the item is multi-valued, then it becomes an array of values, not a single value.
   The names in multivalued_items are treated as always being multivalued: at minimum, they are returned as an empty array;
   this helps the caller, since they can simply iterate normally over the array. 
  */
  function requestParamsMultivalued(window, multivalued_items /*array of strings, naming the n-valued things*/){
    var match;
    var replace_plus_with_space = /\+/g;
    var name_value_pair = /([^&=]+)=?([^&]*)/g;
    var decode = function (str) { 
      return decodeURIComponent(str.replace(replace_plus_with_space, " ")); 
    };
    var queryString = window.location.search.substring(1);
    var result = {};
    for(var i = 0; i < multivalued_items.length; ++i){
      result[multivalued_items[i]] = []; // at min, these items are at least an empty array
    }
    var array_includes = function(item, items){
      var result = false;
      for(var i = 0; i < items.length; ++i){
        if (items[i] === item){
          result = true;
          break;
        }
      }
      return result;
    };
    while (match = name_value_pair.exec(queryString)){
      var name = decode(match[1]);
      var value = decode(match[2]);
      if (array_includes(name, multivalued_items)){
        result[name].push(value);
      }
      else {
        result[name] = value; //the first (and only) value of that name 
      }
    }
    return result;
  };
  
  var prepopulate_form_controls = function(names_n_valued_items /*string array*/){
    var array_includes = function(item, items){
      var result = false;
      for(var i = 0; i < items.length; ++i){
        if (items[i] === item){
          result = true;
          break;
        }
      }
      return result;
    };
    var is_array = function(value){ //Crockford p61
      return value && typeof value === 'object' && value.constructor === Array;
    };  
    var prepopulate_form_control = function(value, control){
      var i;
      if (control.type === 'text'){
        control.value = decodeURIComponent(value); 
      }
      else if (control.type === 'select-one'){
        for(i = 0; i < control.children.length; ++i){
          control.children[i].selected = (control.children[i].value === value);
        }
      }
      else if (control.type === 'select-multiple'){
        //assume that 'value' is an array;  scan all options; if it's in the array, select it; else de-select
        for(i = 0; i < control.children.length; ++i){
          control.children[i].selected = array_includes(control.children[i].value, value);
        }
      }
      else if (control.type === 'checkbox'){
        //set its checked property; unchecked items aren't submitted to server in the first place
        control.checked = true;
      }
      //controls not implemented: textarea, radio group (hardest!)  
    };
    var input = requestParamsMultivalued(window, names_n_valued_items); 
    for (var name in input){
      if (input.hasOwnProperty(name)){
        var control = document.getElementById(name); //I could scope this to a specific form, if needed
        if (control === null) {
          //eg weather_station (name) vs weather_station_cda (id)
          control = document.getElementById(name + '_' + input.country); 
        }
        if (control !== null){
          prepopulate_form_control(input[name], control);
        } 
      }
    }
  };
  
  /* Return true only if the array contains an item that matches the target. */
  function arrayContains(target, array){
    var i;
    var result = false;
    for(i=0; i<array.length; ++i){
      if (array[i] === target){
        result = true;
        break;
      }
    }
    return result;
  };
  
  /* The 'www' may or may not be present; need to preserve the same style. */
  var url_preamble = function(){
    var result = document.location.href.startsWith('http://www.') ? 'http://www.' : 'http://';
    return result;
  };  
  
  /*
    This function exists only because of CORS issues in accessing data on another domain.
    Returns an altered URL, that is funnelled through a proxy, to get around CORS restrictions.
    It can also be used to get around calling https from http.
  */ 
  function crossDomainUrl(url){
    //var corsProxy = 'http://localhost:8081/astro/fetch/?url=';
    var corsProxy = url_preamble() +  'astronomytonight.net/fetch/?url=';
    return corsProxy + url;
  };
  
  function renderTextEscaped(rawlines /*separated by ';'*/, node){
    var all_text = '';
    var lines = rawlines.split(';');
    var line;
    for(i=0; i<lines.length; ++i){
      line = lines[i];
      all_text = all_text + escapeHtml(line) + '<br>';
    }
    node.innerHTML = all_text;
  };
  
  /* 
   Need to escape any special chars in text that is entered by the user, 
   and then reflected back in markup.
   Ref: http://stackoverflow.com/questions/6234773/can-i-escape-html-special-chars-in-javascript
   Better technique: build a DOM node   http://shebang.brandonmintern.com/foolproof-html-escaping-in-javascript/
  */
  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
     ;
  };
  
  /* Extract 'time.html' out of 'time.html?a=1&b=2'. */
  var base_url = function(url){
    var result = url;
    var idx = url.indexOf("?"); //time.html?a=1&b=2
    if (idx > -1){
      result = url.substring(0,idx);  //time.html
    }
    return result;
  };
  
  var highlight_current_page = function(){
    var idx = document.location.href.lastIndexOf("/");
    var url = document.location.href.substring(idx+1); // example: 'juris.html?juris=bc'

    //try to find an exact match first
    var found = false;    
    var anchors = document.getElementById("menu").getElementsByTagName("a");
    for (var i=0; i < anchors.length; ++i){
      if (anchors[i].getAttribute("href") === url){
        anchors[i].parentElement.classList.add("highlight");
        found = true;
        break;
      }
    }
    if (!found){
      //no exact match; try a partial match with the 'base url'
      var base = base_url(url);
      for (var j=0; j < anchors.length; ++j){
        if (base_url(anchors[j].getAttribute("href")) === base){      
          anchors[j].parentElement.classList.add("highlight");
          break;
        }
      }
    }
  };
    
  //END OF PRIVATE ITEMS
  
  /* Return the object that contains the items needed by the caller  */
  return {
    requestParams:requestParams,
    requestParamsMultivalued:requestParamsMultivalued,
    url_preamble : url_preamble, 
    crossDomainUrl:crossDomainUrl,
    prepopulate_form_controls:prepopulate_form_controls,
    arrayContains:arrayContains,
    renderTextEscaped: renderTextEscaped,
    escapeHtml: escapeHtml,
    highlight_current_page : highlight_current_page
  };
}()); // the top level function is invoked here; its return value is stored in UTIL, a global variable