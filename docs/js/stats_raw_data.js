/** The core data as a global js object. Simple global variable. */
var STATS = {};

STATS.deaths = {
 "series":"deaths",
 "description":"Total deaths reported. Cumulative",
 "data":{
   "bc":[{"2020-04-22":90},{"2020-04-21":87},{"2020-04-20":86},{"2020-04-19":"N"},{"2020-04-18":81},{"2020-04-17":78},{"2020-04-16":77},{"2020-04-15":75},{"2020-04-14":72},{"2020-04-13":69},{"2020-04-12":"N"},{"2020-04-11":58},{"2020-04-10":55},{"2020-04-09":50},{"2020-04-08":48},{"2020-04-07":43},{"2020-04-06":39},{"2020-04-05":"N"},{"2020-04-04":38},{"2020-04-03":35},{"2020-04-02":31},{"2020-04-01":25},{"2020-03-31":24}],
   "ab":[{"2020-04-22":66},{"2020-04-21":61},{"2020-04-20":59},{"2020-04-19":55},{"2020-04-18":51},{"2020-04-17":50},{"2020-04-16":50},{"2020-04-15":48},{"2020-04-14":48},{"2020-04-13":46},{"2020-04-12":44},{"2020-04-11":40},{"2020-04-10":"N"},{"2020-04-09":32},{"2020-04-08":29},{"2020-04-07":26},{"2020-04-06":24},{"2020-04-05":23},{"2020-04-04":20},{"2020-04-03":18},{"2020-04-02":13},{"2020-04-01":11},{"2020-03-31":9}],
   "sk":[{"2020-04-22":4},{"2020-04-21":4},{"2020-04-20":4},{"2020-04-19":4},{"2020-04-18":4},{"2020-04-17":4},{"2020-04-16":4},{"2020-04-15":4},{"2020-04-14":4},{"2020-04-13":4},{"2020-04-12":4},{"2020-04-11":4},{"2020-04-10":3},{"2020-04-09":3},{"2020-04-08":3},{"2020-04-07":3},{"2020-04-06":3},{"2020-04-05":3},{"2020-04-04":3},{"2020-04-03":3},{"2020-04-02":3},{"2020-04-01":3},{"2020-03-31":2}],
   "mb":[{"2020-04-22":6},{"2020-04-21":6},{"2020-04-20":6},{"2020-04-19":5},{"2020-04-18":5},{"2020-04-17":5},{"2020-04-16":5},{"2020-04-15":5},{"2020-04-14":4},{"2020-04-13":4},{"2020-04-12":4},{"2020-04-11":4},{"2020-04-10":3},{"2020-04-09":3},{"2020-04-08":3},{"2020-04-07":3},{"2020-04-06":2},{"2020-04-05":2},{"2020-04-04":2},{"2020-04-03":2},{"2020-04-02":1},{"2020-04-01":1},{"2020-03-31":1}],
   "on":[{"2020-04-22":659},{"2020-04-21":622},{"2020-04-20":584},{"2020-04-19":553},{"2020-04-18":514},{"2020-04-17":478},{"2020-04-16":423},{"2020-04-15":385},{"2020-04-14":334},{"2020-04-13":291},{"2020-04-12":274},{"2020-04-11":253},{"2020-04-10":222},{"2020-04-09":200},{"2020-04-08":174},{"2020-04-07":153},{"2020-04-06":132},{"2020-04-05":119},{"2020-04-04":94},{"2020-04-03":67},{"2020-04-02":53},{"2020-04-01":37},{"2020-03-31":33}],
   "qc":[{"2020-04-22":1134},{"2020-04-21":1041},{"2020-04-20":939},{"2020-04-19":877},{"2020-04-18":805},{"2020-04-17":688},{"2020-04-16":630},{"2020-04-15":487},{"2020-04-14":435},{"2020-04-13":360},{"2020-04-12":328},{"2020-04-11":289},{"2020-04-10":241},{"2020-04-09":216},{"2020-04-08":175},{"2020-04-07":150},{"2020-04-06":121},{"2020-04-05":94},{"2020-04-04":75},{"2020-04-03":61},{"2020-04-02":36},{"2020-04-01":33},{"2020-03-31":31}],
   "nb":[{"2020-04-22":0},{"2020-04-21":0},{"2020-04-20":0},{"2020-04-19":0},{"2020-04-18":0},{"2020-04-17":0},{"2020-04-16":0},{"2020-04-15":0},{"2020-04-14":0},{"2020-04-13":0},{"2020-04-12":0},{"2020-04-11":0},{"2020-04-10":0},{"2020-04-09":0},{"2020-04-08":0},{"2020-04-07":0},{"2020-04-06":0},{"2020-04-05":0},{"2020-04-04":0},{"2020-04-03":0},{"2020-04-02":0},{"2020-04-01":0},{"2020-03-31":0}],
   "ns":[{"2020-04-22":12},{"2020-04-21":10},{"2020-04-20":9},{"2020-04-19":9},{"2020-04-18":7},{"2020-04-17":4},{"2020-04-16":3},{"2020-04-15":3},{"2020-04-14":3},{"2020-04-13":3},{"2020-04-12":2},{"2020-04-11":2},{"2020-04-10":2},{"2020-04-09":2},{"2020-04-08":1},{"2020-04-07":1},{"2020-04-06":0},{"2020-04-05":0},{"2020-04-04":0},{"2020-04-03":0},{"2020-04-02":0},{"2020-04-01":0},{"2020-03-31":0}],
   "pe":[{"2020-04-22":0},{"2020-04-21":0},{"2020-04-20":0},{"2020-04-19":0},{"2020-04-18":0},{"2020-04-17":0},{"2020-04-16":0},{"2020-04-15":0},{"2020-04-14":0},{"2020-04-13":0},{"2020-04-12":"N"},{"2020-04-11":0},{"2020-04-10":"N"},{"2020-04-09":0},{"2020-04-08":0},{"2020-04-07":0},{"2020-04-06":0},{"2020-04-05":"N"},{"2020-04-04":0},{"2020-04-03":0},{"2020-04-02":0},{"2020-04-01":0},{"2020-03-31":0}],
   "nl":[{"2020-04-22":3},{"2020-04-21":3},{"2020-04-20":3},{"2020-04-19":3},{"2020-04-18":3},{"2020-04-17":3},{"2020-04-16":3},{"2020-04-15":3},{"2020-04-14":3},{"2020-04-13":3},{"2020-04-12":3},{"2020-04-11":3},{"2020-04-10":3},{"2020-04-09":3},{"2020-04-08":2},{"2020-04-07":2},{"2020-04-06":2},{"2020-04-05":1},{"2020-04-04":1},{"2020-04-03":"N"},{"2020-04-02":0},{"2020-04-01":0},{"2020-03-31":0}],
   "nu":[{"2020-04-22":0},{"2020-04-21":"N"},{"2020-04-20":0},{"2020-04-19":"N"},{"2020-04-18":"N"},{"2020-04-17":0},{"2020-04-16":"N"},{"2020-04-15":0},{"2020-04-14":0},{"2020-04-13":"N"},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":0},{"2020-04-08":0},{"2020-04-07":"N"},{"2020-04-06":0},{"2020-04-05":"N"},{"2020-04-04":"N"},{"2020-04-03":"N"},{"2020-04-02":"N"},{"2020-04-01":0},{"2020-03-31":0}],
   "nt":[{"2020-04-22":0},{"2020-04-21":0},{"2020-04-20":0},{"2020-04-19":0},{"2020-04-18":0},{"2020-04-17":0},{"2020-04-16":0},{"2020-04-15":0},{"2020-04-14":0},{"2020-04-13":0},{"2020-04-12":0},{"2020-04-11":0},{"2020-04-10":0},{"2020-04-09":0},{"2020-04-08":0},{"2020-04-07":0},{"2020-04-06":0},{"2020-04-05":0},{"2020-04-04":0},{"2020-04-03":0},{"2020-04-02":0},{"2020-04-01":0},{"2020-03-31":0}],
   "yt":[{"2020-04-22":0},{"2020-04-21":0},{"2020-04-20":0},{"2020-04-19":"N"},{"2020-04-18":0},{"2020-04-17":0},{"2020-04-16":"N"},{"2020-04-15":0},{"2020-04-14":"N"},{"2020-04-13":0},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":"N"},{"2020-04-08":0},{"2020-04-07":"N"},{"2020-04-06":0},{"2020-04-05":"N"},{"2020-04-04":"N"},{"2020-04-03":0},{"2020-04-02":"N"},{"2020-04-01":0},{"2020-03-31":0}],
   "ca":[{"2020-04-22":1871},{"2020-04-21":1728},{"2020-04-20":1690},{"2020-04-19":1506},{"2020-04-18":1346},{"2020-04-17":1309},{"2020-04-16":1048},{"2020-04-15":1010},{"2020-04-14":903},{"2020-04-13":780},{"2020-04-12":674},{"2020-04-11":653},{"2020-04-10":531},{"2020-04-09":509},{"2020-04-08":435},{"2020-04-07":380},{"2020-04-06":293},{"2020-04-05":258},{"2020-04-04":231},{"2020-04-03":187},{"2020-04-02":138},{"2020-04-01":109},{"2020-03-31":96}]

 }
}
;

STATS.cases = {
 "series":"known_cases",
 "description":"Known cases reported. Cumulative total. Includes both confirmed and probable/presumptive cases",
 "data":{
   "bc":[{"2020-04-22":1795},{"2020-04-21":1724},{"2020-04-20":1699},{"2020-04-19":"N"},{"2020-04-18":1647},{"2020-04-17":1618},{"2020-04-16":1575},{"2020-04-15":1561},{"2020-04-14":1517},{"2020-04-13":1490},{"2020-04-12":"N"},{"2020-04-11":1445},{"2020-04-10":1410},{"2020-04-09":1370},{"2020-04-08":1336},{"2020-04-07":1291},{"2020-04-06":1266},{"2020-04-05":"N"},{"2020-04-04":1203},{"2020-04-03":1174},{"2020-04-02":1121},{"2020-04-01":1066},{"2020-03-31":1013}],
   "ab":[{"2020-04-22":3401},{"2020-04-21":3095},{"2020-04-20":2908},{"2020-04-19":2803},{"2020-04-18":2562},{"2020-04-17":2397},{"2020-04-16":2158},{"2020-04-15":1996},{"2020-04-14":1870},{"2020-04-13":1732},{"2020-04-12":1651},{"2020-04-11":1569},{"2020-04-10":"N"},{"2020-04-09":1451},{"2020-04-08":1423},{"2020-04-07":1373},{"2020-04-06":1348},{"2020-04-05":1250},{"2020-04-04":1181},{"2020-04-03":1075},{"2020-04-02":968},{"2020-04-01":871},{"2020-03-31":754}],
   "sk":[{"2020-04-22":326},{"2020-04-21":320},{"2020-04-20":316},{"2020-04-19":315},{"2020-04-18":313},{"2020-04-17":307},{"2020-04-16":305},{"2020-04-15":304},{"2020-04-14":301},{"2020-04-13":300},{"2020-04-12":298},{"2020-04-11":289},{"2020-04-10":285},{"2020-04-09":278},{"2020-04-08":271},{"2020-04-07":260},{"2020-04-06":253},{"2020-04-05":249},{"2020-04-04":231},{"2020-04-03":220},{"2020-04-02":206},{"2020-04-01":193},{"2020-03-31":184}],
   "mb":[{"2020-04-22":257},{"2020-04-21":255},{"2020-04-20":254},{"2020-04-19":253},{"2020-04-18":253},{"2020-04-17":250},{"2020-04-16":250},{"2020-04-15":246},{"2020-04-14":246},{"2020-04-13":246},{"2020-04-12":243},{"2020-04-11":243},{"2020-04-10":230},{"2020-04-09":224},{"2020-04-08":221},{"2020-04-07":217},{"2020-04-06":204},{"2020-04-05":203},{"2020-04-04":194},{"2020-04-03":182},{"2020-04-02":167},{"2020-04-01":127},{"2020-03-31":103}],
   "on":[{"2020-04-22":12245},{"2020-04-21":11735},{"2020-04-20":11184},{"2020-04-19":10578},{"2020-04-18":10010},{"2020-04-17":9525},{"2020-04-16":8961},{"2020-04-15":8447},{"2020-04-14":7953},{"2020-04-13":7470},{"2020-04-12":7049},{"2020-04-11":6648},{"2020-04-10":6237},{"2020-04-09":5759},{"2020-04-08":5276},{"2020-04-07":4726},{"2020-04-06":4347},{"2020-04-05":4038},{"2020-04-04":3630},{"2020-04-03":3255},{"2020-04-02":2793},{"2020-04-01":2392},{"2020-03-31":1966}],
   "qc":[{"2020-04-22":20965},{"2020-04-21":20126},{"2020-04-20":19319},{"2020-04-19":18357},{"2020-04-18":17521},{"2020-04-17":16798},{"2020-04-16":15857},{"2020-04-15":14860},{"2020-04-14":14248},{"2020-04-13":13557},{"2020-04-12":12846},{"2020-04-11":12292},{"2020-04-10":11677},{"2020-04-09":10912},{"2020-04-08":10031},{"2020-04-07":9340},{"2020-04-06":8580},{"2020-04-05":7944},{"2020-04-04":6997},{"2020-04-03":6101},{"2020-04-02":5518},{"2020-04-01":4611},{"2020-03-31":4162}],
   "nb":[{"2020-04-22":118},{"2020-04-21":118},{"2020-04-20":118},{"2020-04-19":118},{"2020-04-18":118},{"2020-04-17":117},{"2020-04-16":117},{"2020-04-15":117},{"2020-04-14":116},{"2020-04-13":116},{"2020-04-12":114},{"2020-04-11":112},{"2020-04-10":112},{"2020-04-09":111},{"2020-04-08":108},{"2020-04-07":105},{"2020-04-06":103},{"2020-04-05":101},{"2020-04-04":98},{"2020-04-03":95},{"2020-04-02":91},{"2020-04-01":81},{"2020-03-31":70}],
   "ns":[{"2020-04-22":772},{"2020-04-21":737},{"2020-04-20":721},{"2020-04-19":675},{"2020-04-18":649},{"2020-04-17":606},{"2020-04-16":579},{"2020-04-15":549},{"2020-04-14":517},{"2020-04-13":474},{"2020-04-12":445},{"2020-04-11":428},{"2020-04-10":407},{"2020-04-09":373},{"2020-04-08":342},{"2020-04-07":310},{"2020-04-06":293},{"2020-04-05":262},{"2020-04-04":236},{"2020-04-03":207},{"2020-04-02":193},{"2020-04-01":173},{"2020-03-31":147}],
   "pe":[{"2020-04-22":26},{"2020-04-21":26},{"2020-04-20":26},{"2020-04-19":"N"},{"2020-04-18":26},{"2020-04-17":26},{"2020-04-16":26},{"2020-04-15":26},{"2020-04-14":25},{"2020-04-13":25},{"2020-04-12":"N"},{"2020-04-11":25},{"2020-04-10":"N"},{"2020-04-09":25},{"2020-04-08":25},{"2020-04-07":22},{"2020-04-06":22},{"2020-04-05":"N"},{"2020-04-04":22},{"2020-04-03":22},{"2020-04-02":22},{"2020-04-01":21},{"2020-03-31":21}],
   "nl":[{"2020-04-22":256},{"2020-04-21":257},{"2020-04-20":257},{"2020-04-19":257},{"2020-04-18":257},{"2020-04-17":256},{"2020-04-16":252},{"2020-04-15":247},{"2020-04-14":244},{"2020-04-13":244},{"2020-04-12":242},{"2020-04-11":241},{"2020-04-10":239},{"2020-04-09":236},{"2020-04-08":232},{"2020-04-07":228},{"2020-04-06":226},{"2020-04-05":217},{"2020-04-04":203},{"2020-04-03":"N"},{"2020-04-02":183},{"2020-04-01":175},{"2020-03-31":152}],
   "nu":[{"2020-04-22":0},{"2020-04-21":"N"},{"2020-04-20":0},{"2020-04-19":"N"},{"2020-04-18":"N"},{"2020-04-17":0},{"2020-04-16":"N"},{"2020-04-15":0},{"2020-04-14":0},{"2020-04-13":"N"},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":0},{"2020-04-08":0},{"2020-04-07":"N"},{"2020-04-06":0},{"2020-04-05":"N"},{"2020-04-04":"N"},{"2020-04-03":"N"},{"2020-04-02":"N"},{"2020-04-01":0},{"2020-03-31":0}],
   "nt":[{"2020-04-22":5},{"2020-04-21":5},{"2020-04-20":5},{"2020-04-19":5},{"2020-04-18":5},{"2020-04-17":5},{"2020-04-16":5},{"2020-04-15":5},{"2020-04-14":5},{"2020-04-13":5},{"2020-04-12":5},{"2020-04-11":5},{"2020-04-10":5},{"2020-04-09":5},{"2020-04-08":5},{"2020-04-07":5},{"2020-04-06":5},{"2020-04-05":4},{"2020-04-04":4},{"2020-04-03":4},{"2020-04-02":2},{"2020-04-01":2},{"2020-03-31":1}],
   "yt":[{"2020-04-22":11},{"2020-04-21":11},{"2020-04-20":11},{"2020-04-19":"N"},{"2020-04-18":9},{"2020-04-17":9},{"2020-04-16":"N"},{"2020-04-15":8},{"2020-04-14":"N"},{"2020-04-13":8},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":"N"},{"2020-04-08":8},{"2020-04-07":"N"},{"2020-04-06":7},{"2020-04-05":"N"},{"2020-04-04":"N"},{"2020-04-03":6},{"2020-04-02":"N"},{"2020-04-01":6},{"2020-03-31":5}],
   "ca":[{"2020-04-22":38932},{"2020-04-21":37382},{"2020-04-20":36831},{"2020-04-19":33922},{"2020-04-18":32412},{"2020-04-17":31884},{"2020-04-16":28899},{"2020-04-15":28379},{"2020-04-14":27063},{"2020-04-13":25680},{"2020-04-12":23719},{"2020-04-11":23318},{"2020-04-10":21243},{"2020-04-09":20765},{"2020-04-08":19289},{"2020-04-07":17897},{"2020-04-06":15822},{"2020-04-05":14426},{"2020-04-04":13904},{"2020-04-03":12537},{"2020-04-02":11283},{"2020-04-01":9613},{"2020-03-31":8548}]

 }
}
;

STATS.tests = {
 "series":"tests",
 "description":"Total completed tests. Cumulative. Excludes pending tests",
 "data":{
   "bc":[{"2020-04-22":66977},{"2020-04-21":65545},{"2020-04-20":64375},{"2020-04-19":"N"},{"2020-04-18":"N"},{"2020-04-17":60668},{"2020-04-16":59185},{"2020-04-15":57997},{"2020-04-14":58626},{"2020-04-13":56142},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":53505},{"2020-04-08":52412},{"2020-04-07":51423},{"2020-04-06":50350},{"2020-04-05":"N"},{"2020-04-04":48508},{"2020-04-03":47352},{"2020-04-02":45966},{"2020-04-01":44639},{"2020-03-31":43229}],
   "ab":[{"2020-04-22":113499},{"2020-04-21":109015},{"2020-04-20":105317},{"2020-04-19":101323},{"2020-04-18":96897},{"2020-04-17":92805},{"2020-04-16":85502},{"2020-04-15":85502},{"2020-04-14":82649},{"2020-04-13":79781},{"2020-04-12":77316},{"2020-04-11":75278},{"2020-04-10":"N"},{"2020-04-09":70247},{"2020-04-08":68762},{"2020-04-07":67117},{"2020-04-06":65914},{"2020-04-05":64806},{"2020-04-04":64108},{"2020-04-03":61960},{"2020-04-02":57096},{"2020-04-01":53141},{"2020-03-31":48692}],
   "sk":[{"2020-04-22":25321},{"2020-04-21":24811},{"2020-04-20":24212},{"2020-04-19":23909},{"2020-04-18":23092},{"2020-04-17":22207},{"2020-04-16":21569},{"2020-04-15":20907},{"2020-04-14":20282},{"2020-04-13":19804},{"2020-04-12":19276},{"2020-04-11":18448},{"2020-04-10":17634},{"2020-04-09":16672},{"2020-04-08":15621},{"2020-04-07":14722},{"2020-04-06":14178},{"2020-04-05":13528},{"2020-04-04":12670},{"2020-04-03":12112},{"2020-04-02":11395},{"2020-04-01":10528},{"2020-03-31":10126}],
   "mb":[{"2020-04-22":21601},{"2020-04-21":20319},{"2020-04-20":20012},{"2020-04-19":19744},{"2020-04-18":19193},{"2020-04-17":18856},{"2020-04-16":18349},{"2020-04-15":17902},{"2020-04-14":17605},{"2020-04-13":17245},{"2020-04-12":17221},{"2020-04-11":16383},{"2020-04-10":16220},{"2020-04-09":15259},{"2020-04-08":14708},{"2020-04-07":14280},{"2020-04-06":13476},{"2020-04-05":12998},{"2020-04-04":12514},{"2020-04-03":11952},{"2020-04-02":11327},{"2020-04-01":10044},{"2020-03-31":8914}],
   "on":[{"2020-04-22":184531},{"2020-04-21":174170},{"2020-04-20":164840},{"2020-04-19":156097},{"2020-04-18":146454},{"2020-04-17":136992},{"2020-04-16":128093},{"2020-04-15":119092},{"2020-04-14":113082},{"2020-04-13":108230},{"2020-04-12":103165},{"2020-04-11":96321},{"2020-04-10":92673},{"2020-04-09":88698},{"2020-04-08":84601},{"2020-04-07":81364},{"2020-04-06":78796},{"2020-04-05":75046},{"2020-04-04":71338},{"2020-04-03":66753},{"2020-04-02":62733},{"2020-04-01":57874},{"2020-03-31":51629}],
   "qc":[{"2020-04-22":176048},{"2020-04-21":171520},{"2020-04-20":167801},{"2020-04-19":163548},{"2020-04-18":158770},{"2020-04-17":153722},{"2020-04-16":148571},{"2020-04-15":143174},{"2020-04-14":137451},{"2020-04-13":131570},{"2020-04-12":126771},{"2020-04-11":123115},{"2020-04-10":118217},{"2020-04-09":113375},{"2020-04-08":109270},{"2020-04-07":104526},{"2020-04-06":100113},{"2020-04-05":95936},{"2020-04-04":90227},{"2020-04-03":83570},{"2020-04-02":74542},{"2020-04-01":69693},{"2020-03-31":67540}],
   "nb":[{"2020-04-22":11541},{"2020-04-21":11281},{"2020-04-20":10970},{"2020-04-19":10742},{"2020-04-18":10347},{"2020-04-17":9900},{"2020-04-16":9314},{"2020-04-15":8824},{"2020-04-14":8449},{"2020-04-13":8199},{"2020-04-12":7963},{"2020-04-11":7683},{"2020-04-10":7353},{"2020-04-09":6930},{"2020-04-08":6549},{"2020-04-07":6112},{"2020-04-06":5808},{"2020-04-05":5543},{"2020-04-04":5348},{"2020-04-03":4906},{"2020-04-02":4520},{"2020-04-01":4030},{"2020-03-31":3536}],
   "ns":[{"2020-04-22":23765},{"2020-04-21":22927},{"2020-04-20":22490},{"2020-04-19":21795},{"2020-04-18":20961},{"2020-04-17":20112},{"2020-04-16":19032},{"2020-04-15":17968},{"2020-04-14":17272},{"2020-04-13":16054},{"2020-04-12":14740},{"2020-04-11":14060},{"2020-04-10":13421},{"2020-04-09":12550},{"2020-04-08":11688},{"2020-04-07":10931},{"2020-04-06":10511},{"2020-04-05":9772},{"2020-04-04":9200},{"2020-04-03":8441},{"2020-04-02":7639},{"2020-04-01":6764},{"2020-03-31":5910}],
   "pe":[{"2020-04-22":2397},{"2020-04-21":2379},{"2020-04-20":2351},{"2020-04-19":"N"},{"2020-04-18":2198},{"2020-04-17":2155},{"2020-04-16":2037},{"2020-04-15":1945},{"2020-04-14":1852},{"2020-04-13":1841},{"2020-04-12":"N"},{"2020-04-11":1666},{"2020-04-10":"N"},{"2020-04-09":1531},{"2020-04-08":1470},{"2020-04-07":1018},{"2020-04-06":1006},{"2020-04-05":"N"},{"2020-04-04":1004},{"2020-04-03":835},{"2020-04-02":831},{"2020-04-01":686},{"2020-03-31":683}],
   "nl":[{"2020-04-22":6662},{"2020-04-21":6431},{"2020-04-20":6249},{"2020-04-19":6144},{"2020-04-18":5871},{"2020-04-17":5585},{"2020-04-16":5370},{"2020-04-15":5166},{"2020-04-14":5021},{"2020-04-13":4907},{"2020-04-12":4812},{"2020-04-11":4726},{"2020-04-10":4520},{"2020-04-09":4390},{"2020-04-08":4149},{"2020-04-07":3958},{"2020-04-06":3776},{"2020-04-05":3565},{"2020-04-04":3386},{"2020-04-03":"N"},{"2020-04-02":2929},{"2020-04-01":2816},{"2020-03-31":2575}],
   "nu":[{"2020-04-22":250},{"2020-04-21":"N"},{"2020-04-20":201},{"2020-04-19":"N"},{"2020-04-18":"N"},{"2020-04-17":199},{"2020-04-16":"N"},{"2020-04-15":190},{"2020-04-14":181},{"2020-04-13":"N"},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":147},{"2020-04-08":114},{"2020-04-07":"N"},{"2020-04-06":109},{"2020-04-05":"N"},{"2020-04-04":"N"},{"2020-04-03":"N"},{"2020-04-02":"N"},{"2020-04-01":85},{"2020-03-31":79}],
   "nt":[{"2020-04-22":1597},{"2020-04-21":1593},{"2020-04-20":1574},{"2020-04-19":1551},{"2020-04-18":1530},{"2020-04-17":1514},{"2020-04-16":1505},{"2020-04-15":1464},{"2020-04-14":1456},{"2020-04-13":1453},{"2020-04-12":1448},{"2020-04-11":1429},{"2020-04-10":1397},{"2020-04-09":1314},{"2020-04-08":1299},{"2020-04-07":1275},{"2020-04-06":1262},{"2020-04-05":1255},{"2020-04-04":1204},{"2020-04-03":1141},{"2020-04-02":996},{"2020-04-01":979},{"2020-03-31":910}],
   "yt":[{"2020-04-22":862},{"2020-04-21":863},{"2020-04-20":876},{"2020-04-19":"N"},{"2020-04-18":852},{"2020-04-17":848},{"2020-04-16":"N"},{"2020-04-15":831},{"2020-04-14":"N"},{"2020-04-13":814},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":"N"},{"2020-04-08":775},{"2020-04-07":"N"},{"2020-04-06":747},{"2020-04-05":"N"},{"2020-04-04":"N"},{"2020-04-03":700},{"2020-04-02":"N"},{"2020-04-01":696},{"2020-03-31":598}],
   "ca":[{"2020-04-22":"N"},{"2020-04-21":"N"},{"2020-04-20":"N"},{"2020-04-19":"N"},{"2020-04-18":"N"},{"2020-04-17":"N"},{"2020-04-16":"N"},{"2020-04-15":"N"},{"2020-04-14":"N"},{"2020-04-13":"N"},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":"N"},{"2020-04-08":"N"},{"2020-04-07":"N"},{"2020-04-06":"N"},{"2020-04-05":"N"},{"2020-04-04":"N"},{"2020-04-03":"N"},{"2020-04-02":"N"},{"2020-04-01":"N"},{"2020-03-31":"N"}]

 }
}
;

/* Array of screenshot directories on github, whose names are conventional yyyy-mm-dd. */
var SCREENSHOT_DIRECTORIES = ["2020-03-31_22h00mADT", "2020-04-01_22h00mADT", "2020-04-02_22h00mADT", "2020-04-03_21h30mADT", "2020-04-04_21h00mADT", "2020-04-05_21h30mADT", "2020-04-06_21h45mADT", "2020-04-07_21h45mADT", "2020-04-08_21h30mADT", "2020-04-09_22h00mADT", "2020-04-10_21h30mADT", "2020-04-11_21h00mADT", "2020-04-12_21h30mADT", "2020-04-13_21h00mADT", "2020-04-14_21h00mADT", "2020-04-15_21h00mADT", "2020-04-16_21h00mADT", "2020-04-17_21h00mADT", "2020-04-18_21h30mADT", "2020-04-19_19h30mADT", "2020-04-20_21h15mADT", "2020-04-21_21h30mADT", "2020-04-22_21h30mADT"];