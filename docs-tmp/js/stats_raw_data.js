/** The core data as a global js object. Simple global variable. */
var STATS = {};

STATS.deaths = ${json_deaths};

STATS.cases = ${json_known_cases};

STATS.tests = ${json_tests};

STATS.hosp = ${json_hosp};

/* Array of screenshot directories on github, whose names are conventional yyyy-mm-dd. */
var SCREENSHOT_DIRECTORIES = ${json_screenshot_dirs};
