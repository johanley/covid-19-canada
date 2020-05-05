/** The core data as a global js object. Simple global variable. */
var STATS = {};

STATS.deaths = {
 "series":"deaths",
 "description":"Total deaths reported. Cumulative",
 "data":{
   "bc":[{"2020-05-04":117},{"2020-05-03":"N"},{"2020-05-02":"N"},{"2020-05-01":112},{"2020-04-30":111},{"2020-04-29":109},{"2020-04-28":105},{"2020-04-27":103},{"2020-04-26":"N"},{"2020-04-25":100},{"2020-04-24":98},{"2020-04-23":94},{"2020-04-22":90},{"2020-04-21":87},{"2020-04-20":86},{"2020-04-19":"N"},{"2020-04-18":81},{"2020-04-17":78},{"2020-04-16":77},{"2020-04-15":75},{"2020-04-14":72},{"2020-04-13":69},{"2020-04-12":"N"},{"2020-04-11":58},{"2020-04-10":55},{"2020-04-09":50},{"2020-04-08":48},{"2020-04-07":43},{"2020-04-06":39},{"2020-04-05":"N"},{"2020-04-04":38},{"2020-04-03":35},{"2020-04-02":31},{"2020-04-01":25},{"2020-03-31":24}],
   "ab":[{"2020-05-04":104},{"2020-05-03":95},{"2020-05-02":94},{"2020-05-01":92},{"2020-04-30":89},{"2020-04-29":87},{"2020-04-28":80},{"2020-04-27":75},{"2020-04-26":73},{"2020-04-25":73},{"2020-04-24":72},{"2020-04-23":67},{"2020-04-22":66},{"2020-04-21":61},{"2020-04-20":59},{"2020-04-19":55},{"2020-04-18":51},{"2020-04-17":50},{"2020-04-16":50},{"2020-04-15":48},{"2020-04-14":48},{"2020-04-13":46},{"2020-04-12":44},{"2020-04-11":40},{"2020-04-10":"N"},{"2020-04-09":32},{"2020-04-08":29},{"2020-04-07":26},{"2020-04-06":24},{"2020-04-05":23},{"2020-04-04":20},{"2020-04-03":18},{"2020-04-02":13},{"2020-04-01":11},{"2020-03-31":9}],
   "sk":[{"2020-05-04":6},{"2020-05-03":6},{"2020-05-02":6},{"2020-05-01":6},{"2020-04-30":6},{"2020-04-29":6},{"2020-04-28":5},{"2020-04-27":5},{"2020-04-26":4},{"2020-04-25":4},{"2020-04-24":4},{"2020-04-23":4},{"2020-04-22":4},{"2020-04-21":4},{"2020-04-20":4},{"2020-04-19":4},{"2020-04-18":4},{"2020-04-17":4},{"2020-04-16":4},{"2020-04-15":4},{"2020-04-14":4},{"2020-04-13":4},{"2020-04-12":4},{"2020-04-11":4},{"2020-04-10":3},{"2020-04-09":3},{"2020-04-08":3},{"2020-04-07":3},{"2020-04-06":3},{"2020-04-05":3},{"2020-04-04":3},{"2020-04-03":3},{"2020-04-02":3},{"2020-04-01":3},{"2020-03-31":2}],
   "mb":[{"2020-05-04":6},{"2020-05-03":6},{"2020-05-02":6},{"2020-05-01":6},{"2020-04-30":6},{"2020-04-29":6},{"2020-04-28":6},{"2020-04-27":6},{"2020-04-26":6},{"2020-04-25":6},{"2020-04-24":6},{"2020-04-23":6},{"2020-04-22":6},{"2020-04-21":6},{"2020-04-20":6},{"2020-04-19":5},{"2020-04-18":5},{"2020-04-17":5},{"2020-04-16":5},{"2020-04-15":5},{"2020-04-14":4},{"2020-04-13":4},{"2020-04-12":4},{"2020-04-11":4},{"2020-04-10":3},{"2020-04-09":3},{"2020-04-08":3},{"2020-04-07":3},{"2020-04-06":2},{"2020-04-05":2},{"2020-04-04":2},{"2020-04-03":2},{"2020-04-02":1},{"2020-04-01":1},{"2020-03-31":1}],
   "on":[{"2020-05-04":1300},{"2020-05-03":1216},{"2020-05-02":1176},{"2020-05-01":1121},{"2020-04-30":1082},{"2020-04-29":996},{"2020-04-28":951},{"2020-04-27":892},{"2020-04-26":835},{"2020-04-25":811},{"2020-04-24":763},{"2020-04-23":713},{"2020-04-22":659},{"2020-04-21":622},{"2020-04-20":584},{"2020-04-19":553},{"2020-04-18":514},{"2020-04-17":478},{"2020-04-16":423},{"2020-04-15":385},{"2020-04-14":334},{"2020-04-13":291},{"2020-04-12":274},{"2020-04-11":253},{"2020-04-10":222},{"2020-04-09":200},{"2020-04-08":174},{"2020-04-07":153},{"2020-04-06":132},{"2020-04-05":119},{"2020-04-04":94},{"2020-04-03":67},{"2020-04-02":53},{"2020-04-01":37},{"2020-03-31":33}],
   "qc":[{"2020-05-04":2280},{"2020-05-03":2205},{"2020-05-02":2136},{"2020-05-01":2022},{"2020-04-30":1859},{"2020-04-29":1761},{"2020-04-28":1682},{"2020-04-27":1599},{"2020-04-26":1515},{"2020-04-25":1446},{"2020-04-24":1340},{"2020-04-23":1243},{"2020-04-22":1134},{"2020-04-21":1041},{"2020-04-20":939},{"2020-04-19":877},{"2020-04-18":805},{"2020-04-17":688},{"2020-04-16":630},{"2020-04-15":487},{"2020-04-14":435},{"2020-04-13":360},{"2020-04-12":328},{"2020-04-11":289},{"2020-04-10":241},{"2020-04-09":216},{"2020-04-08":175},{"2020-04-07":150},{"2020-04-06":121},{"2020-04-05":94},{"2020-04-04":75},{"2020-04-03":61},{"2020-04-02":36},{"2020-04-01":33},{"2020-03-31":31}],
   "nb":[{"2020-05-04":0},{"2020-05-03":0},{"2020-05-02":0},{"2020-05-01":0},{"2020-04-30":0},{"2020-04-29":0},{"2020-04-28":0},{"2020-04-27":0},{"2020-04-26":0},{"2020-04-25":0},{"2020-04-24":0},{"2020-04-23":0},{"2020-04-22":0},{"2020-04-21":0},{"2020-04-20":0},{"2020-04-19":0},{"2020-04-18":0},{"2020-04-17":0},{"2020-04-16":0},{"2020-04-15":0},{"2020-04-14":0},{"2020-04-13":0},{"2020-04-12":0},{"2020-04-11":0},{"2020-04-10":0},{"2020-04-09":0},{"2020-04-08":0},{"2020-04-07":0},{"2020-04-06":0},{"2020-04-05":0},{"2020-04-04":0},{"2020-04-03":0},{"2020-04-02":0},{"2020-04-01":0},{"2020-03-31":0}],
   "ns":[{"2020-05-04":38},{"2020-05-03":37},{"2020-05-02":31},{"2020-05-01":29},{"2020-04-30":28},{"2020-04-29":28},{"2020-04-28":27},{"2020-04-27":24},{"2020-04-26":24},{"2020-04-25":22},{"2020-04-24":16},{"2020-04-23":16},{"2020-04-22":12},{"2020-04-21":10},{"2020-04-20":9},{"2020-04-19":9},{"2020-04-18":7},{"2020-04-17":4},{"2020-04-16":3},{"2020-04-15":3},{"2020-04-14":3},{"2020-04-13":3},{"2020-04-12":2},{"2020-04-11":2},{"2020-04-10":2},{"2020-04-09":2},{"2020-04-08":1},{"2020-04-07":1},{"2020-04-06":0},{"2020-04-05":0},{"2020-04-04":0},{"2020-04-03":0},{"2020-04-02":0},{"2020-04-01":0},{"2020-03-31":0}],
   "pe":[{"2020-05-04":0},{"2020-05-03":"N"},{"2020-05-02":"N"},{"2020-05-01":0},{"2020-04-30":0},{"2020-04-29":0},{"2020-04-28":0},{"2020-04-27":0},{"2020-04-26":"N"},{"2020-04-25":"N"},{"2020-04-24":0},{"2020-04-23":0},{"2020-04-22":0},{"2020-04-21":0},{"2020-04-20":0},{"2020-04-19":0},{"2020-04-18":0},{"2020-04-17":0},{"2020-04-16":0},{"2020-04-15":0},{"2020-04-14":0},{"2020-04-13":0},{"2020-04-12":"N"},{"2020-04-11":0},{"2020-04-10":"N"},{"2020-04-09":0},{"2020-04-08":0},{"2020-04-07":0},{"2020-04-06":0},{"2020-04-05":"N"},{"2020-04-04":0},{"2020-04-03":0},{"2020-04-02":0},{"2020-04-01":0},{"2020-03-31":0}],
   "nl":[{"2020-05-04":3},{"2020-05-03":3},{"2020-05-02":3},{"2020-05-01":3},{"2020-04-30":3},{"2020-04-29":3},{"2020-04-28":3},{"2020-04-27":3},{"2020-04-26":3},{"2020-04-25":3},{"2020-04-24":3},{"2020-04-23":3},{"2020-04-22":3},{"2020-04-21":3},{"2020-04-20":3},{"2020-04-19":3},{"2020-04-18":3},{"2020-04-17":3},{"2020-04-16":3},{"2020-04-15":3},{"2020-04-14":3},{"2020-04-13":3},{"2020-04-12":3},{"2020-04-11":3},{"2020-04-10":3},{"2020-04-09":3},{"2020-04-08":2},{"2020-04-07":2},{"2020-04-06":2},{"2020-04-05":1},{"2020-04-04":1},{"2020-04-03":"N"},{"2020-04-02":0},{"2020-04-01":0},{"2020-03-31":0}],
   "nu":[{"2020-05-04":0},{"2020-05-03":"N"},{"2020-05-02":"N"},{"2020-05-01":"N"},{"2020-04-30":0},{"2020-04-29":0},{"2020-04-28":"N"},{"2020-04-27":0},{"2020-04-26":"N"},{"2020-04-25":"N"},{"2020-04-24":0},{"2020-04-23":"N"},{"2020-04-22":0},{"2020-04-21":"N"},{"2020-04-20":0},{"2020-04-19":"N"},{"2020-04-18":"N"},{"2020-04-17":0},{"2020-04-16":"N"},{"2020-04-15":0},{"2020-04-14":0},{"2020-04-13":"N"},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":0},{"2020-04-08":0},{"2020-04-07":"N"},{"2020-04-06":0},{"2020-04-05":"N"},{"2020-04-04":"N"},{"2020-04-03":"N"},{"2020-04-02":"N"},{"2020-04-01":0},{"2020-03-31":0}],
   "nt":[{"2020-05-04":0},{"2020-05-03":0},{"2020-05-02":0},{"2020-05-01":0},{"2020-04-30":0},{"2020-04-29":0},{"2020-04-28":0},{"2020-04-27":0},{"2020-04-26":0},{"2020-04-25":0},{"2020-04-24":0},{"2020-04-23":0},{"2020-04-22":0},{"2020-04-21":0},{"2020-04-20":0},{"2020-04-19":0},{"2020-04-18":0},{"2020-04-17":0},{"2020-04-16":0},{"2020-04-15":0},{"2020-04-14":0},{"2020-04-13":0},{"2020-04-12":0},{"2020-04-11":0},{"2020-04-10":0},{"2020-04-09":0},{"2020-04-08":0},{"2020-04-07":0},{"2020-04-06":0},{"2020-04-05":0},{"2020-04-04":0},{"2020-04-03":0},{"2020-04-02":0},{"2020-04-01":0},{"2020-03-31":0}],
   "yt":[{"2020-05-04":0},{"2020-05-03":0},{"2020-05-02":0},{"2020-05-01":0},{"2020-04-30":0},{"2020-04-29":0},{"2020-04-28":0},{"2020-04-27":0},{"2020-04-26":"N"},{"2020-04-25":0},{"2020-04-24":0},{"2020-04-23":0},{"2020-04-22":0},{"2020-04-21":0},{"2020-04-20":0},{"2020-04-19":"N"},{"2020-04-18":0},{"2020-04-17":0},{"2020-04-16":"N"},{"2020-04-15":0},{"2020-04-14":"N"},{"2020-04-13":0},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":"N"},{"2020-04-08":0},{"2020-04-07":"N"},{"2020-04-06":0},{"2020-04-05":"N"},{"2020-04-04":"N"},{"2020-04-03":0},{"2020-04-02":"N"},{"2020-04-01":0},{"2020-03-31":0}],
   "ca":[{"2020-05-04":3854},{"2020-05-03":3606},{"2020-05-02":3566},{"2020-05-01":3391},{"2020-04-30":3082},{"2020-04-29":2996},{"2020-04-28":2766},{"2020-04-27":2617},{"2020-04-26":2489},{"2020-04-25":2350},{"2020-04-24":2197},{"2020-04-23":2146},{"2020-04-22":1871},{"2020-04-21":1728},{"2020-04-20":1690},{"2020-04-19":1506},{"2020-04-18":1346},{"2020-04-17":1309},{"2020-04-16":1048},{"2020-04-15":1010},{"2020-04-14":903},{"2020-04-13":780},{"2020-04-12":674},{"2020-04-11":653},{"2020-04-10":531},{"2020-04-09":509},{"2020-04-08":435},{"2020-04-07":380},{"2020-04-06":293},{"2020-04-05":258},{"2020-04-04":231},{"2020-04-03":187},{"2020-04-02":138},{"2020-04-01":109},{"2020-03-31":96}]

 }
}
;

STATS.cases = {
 "series":"known_cases",
 "description":"Known cases reported. Cumulative total. Includes both confirmed and probable/presumptive cases",
 "data":{
   "bc":[{"2020-05-04":2224},{"2020-05-03":"N"},{"2020-05-02":"N"},{"2020-05-01":2145},{"2020-04-30":2112},{"2020-04-29":2087},{"2020-04-28":2053},{"2020-04-27":1998},{"2020-04-26":"N"},{"2020-04-25":1948},{"2020-04-24":1853},{"2020-04-23":1824},{"2020-04-22":1795},{"2020-04-21":1724},{"2020-04-20":1699},{"2020-04-19":"N"},{"2020-04-18":1647},{"2020-04-17":1618},{"2020-04-16":1575},{"2020-04-15":1561},{"2020-04-14":1517},{"2020-04-13":1490},{"2020-04-12":"N"},{"2020-04-11":1445},{"2020-04-10":1410},{"2020-04-09":1370},{"2020-04-08":1336},{"2020-04-07":1291},{"2020-04-06":1266},{"2020-04-05":"N"},{"2020-04-04":1203},{"2020-04-03":1174},{"2020-04-02":1121},{"2020-04-01":1066},{"2020-03-31":1013}],
   "ab":[{"2020-05-04":5836},{"2020-05-03":5766},{"2020-05-02":5670},{"2020-05-01":5573},{"2020-04-30":5355},{"2020-04-29":5165},{"2020-04-28":4850},{"2020-04-27":4696},{"2020-04-26":4480},{"2020-04-25":4233},{"2020-04-24":4017},{"2020-04-23":3720},{"2020-04-22":3401},{"2020-04-21":3095},{"2020-04-20":2908},{"2020-04-19":2803},{"2020-04-18":2562},{"2020-04-17":2397},{"2020-04-16":2158},{"2020-04-15":1996},{"2020-04-14":1870},{"2020-04-13":1732},{"2020-04-12":1651},{"2020-04-11":1569},{"2020-04-10":"N"},{"2020-04-09":1451},{"2020-04-08":1423},{"2020-04-07":1373},{"2020-04-06":1348},{"2020-04-05":1250},{"2020-04-04":1181},{"2020-04-03":1075},{"2020-04-02":968},{"2020-04-01":871},{"2020-03-31":754}],
   "sk":[{"2020-05-04":467},{"2020-05-03":433},{"2020-05-02":421},{"2020-05-01":415},{"2020-04-30":389},{"2020-04-29":383},{"2020-04-28":366},{"2020-04-27":365},{"2020-04-26":353},{"2020-04-25":349},{"2020-04-24":341},{"2020-04-23":331},{"2020-04-22":326},{"2020-04-21":320},{"2020-04-20":316},{"2020-04-19":315},{"2020-04-18":313},{"2020-04-17":307},{"2020-04-16":305},{"2020-04-15":304},{"2020-04-14":301},{"2020-04-13":300},{"2020-04-12":298},{"2020-04-11":289},{"2020-04-10":285},{"2020-04-09":278},{"2020-04-08":271},{"2020-04-07":260},{"2020-04-06":253},{"2020-04-05":249},{"2020-04-04":231},{"2020-04-03":220},{"2020-04-02":206},{"2020-04-01":193},{"2020-03-31":184}],
   "mb":[{"2020-05-04":281},{"2020-05-03":281},{"2020-05-02":280},{"2020-05-01":279},{"2020-04-30":275},{"2020-04-29":273},{"2020-04-28":272},{"2020-04-27":272},{"2020-04-26":271},{"2020-04-25":267},{"2020-04-24":263},{"2020-04-23":262},{"2020-04-22":257},{"2020-04-21":255},{"2020-04-20":254},{"2020-04-19":253},{"2020-04-18":253},{"2020-04-17":250},{"2020-04-16":250},{"2020-04-15":246},{"2020-04-14":246},{"2020-04-13":246},{"2020-04-12":243},{"2020-04-11":243},{"2020-04-10":230},{"2020-04-09":224},{"2020-04-08":221},{"2020-04-07":217},{"2020-04-06":204},{"2020-04-05":203},{"2020-04-04":194},{"2020-04-03":182},{"2020-04-02":167},{"2020-04-01":127},{"2020-03-31":103}],
   "on":[{"2020-05-04":17923},{"2020-05-03":17553},{"2020-05-02":17119},{"2020-05-01":16608},{"2020-04-30":16187},{"2020-04-29":15728},{"2020-04-28":15381},{"2020-04-27":14856},{"2020-04-26":14432},{"2020-04-25":13995},{"2020-04-24":13519},{"2020-04-23":12879},{"2020-04-22":12245},{"2020-04-21":11735},{"2020-04-20":11184},{"2020-04-19":10578},{"2020-04-18":10010},{"2020-04-17":9525},{"2020-04-16":8961},{"2020-04-15":8447},{"2020-04-14":7953},{"2020-04-13":7470},{"2020-04-12":7049},{"2020-04-11":6648},{"2020-04-10":6237},{"2020-04-09":5759},{"2020-04-08":5276},{"2020-04-07":4726},{"2020-04-06":4347},{"2020-04-05":4038},{"2020-04-04":3630},{"2020-04-03":3255},{"2020-04-02":2793},{"2020-04-01":2392},{"2020-03-31":1966}],
   "qc":[{"2020-05-04":32623},{"2020-05-03":31865},{"2020-05-02":29656},{"2020-05-01":28648},{"2020-04-30":27538},{"2020-04-29":26594},{"2020-04-28":25757},{"2020-04-27":24982},{"2020-04-26":24107},{"2020-04-25":23267},{"2020-04-24":22616},{"2020-04-23":21838},{"2020-04-22":20965},{"2020-04-21":20126},{"2020-04-20":19319},{"2020-04-19":18357},{"2020-04-18":17521},{"2020-04-17":16798},{"2020-04-16":15857},{"2020-04-15":14860},{"2020-04-14":14248},{"2020-04-13":13557},{"2020-04-12":12846},{"2020-04-11":12292},{"2020-04-10":11677},{"2020-04-09":10912},{"2020-04-08":10031},{"2020-04-07":9340},{"2020-04-06":8580},{"2020-04-05":7944},{"2020-04-04":6997},{"2020-04-03":6101},{"2020-04-02":5518},{"2020-04-01":4611},{"2020-03-31":4162}],
   "nb":[{"2020-05-04":118},{"2020-05-03":118},{"2020-05-02":118},{"2020-05-01":118},{"2020-04-30":118},{"2020-04-29":118},{"2020-04-28":118},{"2020-04-27":118},{"2020-04-26":118},{"2020-04-25":118},{"2020-04-24":118},{"2020-04-23":118},{"2020-04-22":118},{"2020-04-21":118},{"2020-04-20":118},{"2020-04-19":118},{"2020-04-18":118},{"2020-04-17":117},{"2020-04-16":117},{"2020-04-15":117},{"2020-04-14":116},{"2020-04-13":116},{"2020-04-12":114},{"2020-04-11":112},{"2020-04-10":112},{"2020-04-09":111},{"2020-04-08":108},{"2020-04-07":105},{"2020-04-06":103},{"2020-04-05":101},{"2020-04-04":98},{"2020-04-03":95},{"2020-04-02":91},{"2020-04-01":81},{"2020-03-31":70}],
   "ns":[{"2020-05-04":985},{"2020-05-03":971},{"2020-05-02":963},{"2020-05-01":959},{"2020-04-30":947},{"2020-04-29":935},{"2020-04-28":915},{"2020-04-27":900},{"2020-04-26":873},{"2020-04-25":865},{"2020-04-24":850},{"2020-04-23":827},{"2020-04-22":772},{"2020-04-21":737},{"2020-04-20":721},{"2020-04-19":675},{"2020-04-18":649},{"2020-04-17":606},{"2020-04-16":579},{"2020-04-15":549},{"2020-04-14":517},{"2020-04-13":474},{"2020-04-12":445},{"2020-04-11":428},{"2020-04-10":407},{"2020-04-09":373},{"2020-04-08":342},{"2020-04-07":310},{"2020-04-06":293},{"2020-04-05":262},{"2020-04-04":236},{"2020-04-03":207},{"2020-04-02":193},{"2020-04-01":173},{"2020-03-31":147}],
   "pe":[{"2020-05-04":27},{"2020-05-03":"N"},{"2020-05-02":"N"},{"2020-05-01":27},{"2020-04-30":27},{"2020-04-29":27},{"2020-04-28":27},{"2020-04-27":26},{"2020-04-26":"N"},{"2020-04-25":"N"},{"2020-04-24":26},{"2020-04-23":26},{"2020-04-22":26},{"2020-04-21":26},{"2020-04-20":26},{"2020-04-19":"N"},{"2020-04-18":26},{"2020-04-17":26},{"2020-04-16":26},{"2020-04-15":26},{"2020-04-14":25},{"2020-04-13":25},{"2020-04-12":"N"},{"2020-04-11":25},{"2020-04-10":"N"},{"2020-04-09":25},{"2020-04-08":25},{"2020-04-07":22},{"2020-04-06":22},{"2020-04-05":"N"},{"2020-04-04":22},{"2020-04-03":22},{"2020-04-02":22},{"2020-04-01":21},{"2020-03-31":21}],
   "nl":[{"2020-05-04":259},{"2020-05-03":259},{"2020-05-02":259},{"2020-05-01":259},{"2020-04-30":258},{"2020-04-29":258},{"2020-04-28":258},{"2020-04-27":258},{"2020-04-26":258},{"2020-04-25":257},{"2020-04-24":256},{"2020-04-23":256},{"2020-04-22":256},{"2020-04-21":257},{"2020-04-20":257},{"2020-04-19":257},{"2020-04-18":257},{"2020-04-17":256},{"2020-04-16":252},{"2020-04-15":247},{"2020-04-14":244},{"2020-04-13":244},{"2020-04-12":242},{"2020-04-11":241},{"2020-04-10":239},{"2020-04-09":236},{"2020-04-08":232},{"2020-04-07":228},{"2020-04-06":226},{"2020-04-05":217},{"2020-04-04":203},{"2020-04-03":"N"},{"2020-04-02":183},{"2020-04-01":175},{"2020-03-31":152}],
   "nu":[{"2020-05-04":0},{"2020-05-03":"N"},{"2020-05-02":"N"},{"2020-05-01":"N"},{"2020-04-30":1},{"2020-04-29":0},{"2020-04-28":"N"},{"2020-04-27":0},{"2020-04-26":"N"},{"2020-04-25":"N"},{"2020-04-24":0},{"2020-04-23":"N"},{"2020-04-22":0},{"2020-04-21":"N"},{"2020-04-20":0},{"2020-04-19":"N"},{"2020-04-18":"N"},{"2020-04-17":0},{"2020-04-16":"N"},{"2020-04-15":0},{"2020-04-14":0},{"2020-04-13":"N"},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":0},{"2020-04-08":0},{"2020-04-07":"N"},{"2020-04-06":0},{"2020-04-05":"N"},{"2020-04-04":"N"},{"2020-04-03":"N"},{"2020-04-02":"N"},{"2020-04-01":0},{"2020-03-31":0}],
   "nt":[{"2020-05-04":5},{"2020-05-03":5},{"2020-05-02":5},{"2020-05-01":5},{"2020-04-30":5},{"2020-04-29":5},{"2020-04-28":5},{"2020-04-27":5},{"2020-04-26":5},{"2020-04-25":5},{"2020-04-24":5},{"2020-04-23":5},{"2020-04-22":5},{"2020-04-21":5},{"2020-04-20":5},{"2020-04-19":5},{"2020-04-18":5},{"2020-04-17":5},{"2020-04-16":5},{"2020-04-15":5},{"2020-04-14":5},{"2020-04-13":5},{"2020-04-12":5},{"2020-04-11":5},{"2020-04-10":5},{"2020-04-09":5},{"2020-04-08":5},{"2020-04-07":5},{"2020-04-06":5},{"2020-04-05":4},{"2020-04-04":4},{"2020-04-03":4},{"2020-04-02":2},{"2020-04-01":2},{"2020-03-31":1}],
   "yt":[{"2020-05-04":11},{"2020-05-03":11},{"2020-05-02":11},{"2020-05-01":11},{"2020-04-30":11},{"2020-04-29":11},{"2020-04-28":11},{"2020-04-27":11},{"2020-04-26":"N"},{"2020-04-25":11},{"2020-04-24":11},{"2020-04-23":11},{"2020-04-22":11},{"2020-04-21":11},{"2020-04-20":11},{"2020-04-19":"N"},{"2020-04-18":9},{"2020-04-17":9},{"2020-04-16":"N"},{"2020-04-15":8},{"2020-04-14":"N"},{"2020-04-13":8},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":"N"},{"2020-04-08":8},{"2020-04-07":"N"},{"2020-04-06":7},{"2020-04-05":"N"},{"2020-04-04":"N"},{"2020-04-03":6},{"2020-04-02":"N"},{"2020-04-01":6},{"2020-03-31":5}],
   "ca":[{"2020-05-04":60772},{"2020-05-03":57148},{"2020-05-02":56714},{"2020-05-01":55061},{"2020-04-30":52056},{"2020-04-29":51597},{"2020-04-28":49025},{"2020-04-27":47327},{"2020-04-26":45791},{"2020-04-25":44364},{"2020-04-24":42750},{"2020-04-23":42110},{"2020-04-22":38932},{"2020-04-21":37382},{"2020-04-20":36831},{"2020-04-19":33922},{"2020-04-18":32412},{"2020-04-17":31884},{"2020-04-16":28899},{"2020-04-15":28379},{"2020-04-14":27063},{"2020-04-13":25680},{"2020-04-12":23719},{"2020-04-11":23318},{"2020-04-10":21243},{"2020-04-09":20765},{"2020-04-08":19289},{"2020-04-07":17897},{"2020-04-06":15822},{"2020-04-05":14426},{"2020-04-04":13904},{"2020-04-03":12537},{"2020-04-02":11283},{"2020-04-01":9613},{"2020-03-31":8548}]

 }
}
;

STATS.tests = {
 "series":"tests",
 "description":"Total completed tests. Cumulative. Excludes pending tests. QC, NL, NU report on people-tested.",
 "data":{
   "bc":[{"2020-05-04":96517},{"2020-05-03":"N"},{"2020-05-02":"N"},{"2020-05-01":88670},{"2020-04-30":86030},{"2020-04-29":83425},{"2020-04-28":80888},{"2020-04-27":78665},{"2020-04-26":"N"},{"2020-04-25":"N"},{"2020-04-24":71415},{"2020-04-23":68553},{"2020-04-22":66977},{"2020-04-21":65545},{"2020-04-20":64375},{"2020-04-19":"N"},{"2020-04-18":"N"},{"2020-04-17":60668},{"2020-04-16":59185},{"2020-04-15":57997},{"2020-04-14":58626},{"2020-04-13":56142},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":53505},{"2020-04-08":52412},{"2020-04-07":51423},{"2020-04-06":50350},{"2020-04-05":"N"},{"2020-04-04":48508},{"2020-04-03":47352},{"2020-04-02":45966},{"2020-04-01":44639},{"2020-03-31":43229}],
   "ab":[{"2020-05-04":164722},{"2020-05-03":161245},{"2020-05-02":157517},{"2020-05-01":153766},{"2020-04-30":148937},{"2020-04-29":143886},{"2020-04-28":138681},{"2020-04-27":135442},{"2020-04-26":131572},{"2020-04-25":127165},{"2020-04-24":122447},{"2020-04-23":117835},{"2020-04-22":113499},{"2020-04-21":109015},{"2020-04-20":105317},{"2020-04-19":101323},{"2020-04-18":96897},{"2020-04-17":92805},{"2020-04-16":85502},{"2020-04-15":85502},{"2020-04-14":82649},{"2020-04-13":79781},{"2020-04-12":77316},{"2020-04-11":75278},{"2020-04-10":"N"},{"2020-04-09":70247},{"2020-04-08":68762},{"2020-04-07":67117},{"2020-04-06":65914},{"2020-04-05":64806},{"2020-04-04":64108},{"2020-04-03":61960},{"2020-04-02":57096},{"2020-04-01":53141},{"2020-03-31":48692}],
   "sk":[{"2020-05-04":32334},{"2020-05-03":31572},{"2020-05-02":30845},{"2020-05-01":30357},{"2020-04-30":29642},{"2020-04-29":29106},{"2020-04-28":28632},{"2020-04-27":28296},{"2020-04-26":27884},{"2020-04-25":27232},{"2020-04-24":25586},{"2020-04-23":25872},{"2020-04-22":25321},{"2020-04-21":24811},{"2020-04-20":24212},{"2020-04-19":23909},{"2020-04-18":23092},{"2020-04-17":22207},{"2020-04-16":21569},{"2020-04-15":20907},{"2020-04-14":20282},{"2020-04-13":19804},{"2020-04-12":19276},{"2020-04-11":18448},{"2020-04-10":17634},{"2020-04-09":16672},{"2020-04-08":15621},{"2020-04-07":14722},{"2020-04-06":14178},{"2020-04-05":13528},{"2020-04-04":12670},{"2020-04-03":12112},{"2020-04-02":11395},{"2020-04-01":10528},{"2020-03-31":10126}],
   "mb":[{"2020-05-04":27446},{"2020-05-03":26806},{"2020-05-02":26169},{"2020-05-01":25502},{"2020-04-30":24824},{"2020-04-29":24389},{"2020-04-28":23941},{"2020-04-27":23543},{"2020-04-26":23167},{"2020-04-25":22598},{"2020-04-24":22172},{"2020-04-23":21387},{"2020-04-22":21601},{"2020-04-21":20319},{"2020-04-20":20012},{"2020-04-19":19744},{"2020-04-18":19193},{"2020-04-17":18856},{"2020-04-16":18349},{"2020-04-15":17902},{"2020-04-14":17605},{"2020-04-13":17245},{"2020-04-12":17221},{"2020-04-11":16383},{"2020-04-10":16220},{"2020-04-09":15259},{"2020-04-08":14708},{"2020-04-07":14280},{"2020-04-06":13476},{"2020-04-05":12998},{"2020-04-04":12514},{"2020-04-03":11952},{"2020-04-02":11327},{"2020-04-01":10044},{"2020-03-31":8914}],
   "on":[{"2020-05-04":342060},{"2020-05-03":327505},{"2020-05-02":310359},{"2020-05-01":294054},{"2020-04-30":277522},{"2020-04-29":264594},{"2020-04-28":253040},{"2020-04-27":242188},{"2020-04-26":229638},{"2020-04-25":217618},{"2020-04-24":207040},{"2020-04-23":194745},{"2020-04-22":184531},{"2020-04-21":174170},{"2020-04-20":164840},{"2020-04-19":156097},{"2020-04-18":146454},{"2020-04-17":136992},{"2020-04-16":128093},{"2020-04-15":119092},{"2020-04-14":113082},{"2020-04-13":108230},{"2020-04-12":103165},{"2020-04-11":96321},{"2020-04-10":92673},{"2020-04-09":88698},{"2020-04-08":84601},{"2020-04-07":81364},{"2020-04-06":78796},{"2020-04-05":75046},{"2020-04-04":71338},{"2020-04-03":66753},{"2020-04-02":62733},{"2020-04-01":57874},{"2020-03-31":51629}],
   "qc":[{"2020-05-04":239174},{"2020-05-03":234805},{"2020-05-02":228693},{"2020-05-01":219367},{"2020-04-30":214047},{"2020-04-29":209816},{"2020-04-28":204472},{"2020-04-27":200172},{"2020-04-26":195577},{"2020-04-25":190765},{"2020-04-24":185632},{"2020-04-23":180833},{"2020-04-22":176048},{"2020-04-21":171520},{"2020-04-20":167801},{"2020-04-19":163548},{"2020-04-18":158770},{"2020-04-17":153722},{"2020-04-16":148571},{"2020-04-15":143174},{"2020-04-14":137451},{"2020-04-13":131570},{"2020-04-12":126771},{"2020-04-11":123115},{"2020-04-10":118217},{"2020-04-09":113375},{"2020-04-08":109270},{"2020-04-07":104526},{"2020-04-06":100113},{"2020-04-05":95936},{"2020-04-04":90227},{"2020-04-03":83570},{"2020-04-02":74542},{"2020-04-01":69693},{"2020-03-31":67540}],
   "nb":[{"2020-05-04":15585},{"2020-05-03":15366},{"2020-05-02":15058},{"2020-05-01":14642},{"2020-04-30":14117},{"2020-04-29":13699},{"2020-04-28":13430},{"2020-04-27":13196},{"2020-04-26":13026},{"2020-04-25":12786},{"2020-04-24":12418},{"2020-04-23":12014},{"2020-04-22":11541},{"2020-04-21":11281},{"2020-04-20":10970},{"2020-04-19":10742},{"2020-04-18":10347},{"2020-04-17":9900},{"2020-04-16":9314},{"2020-04-15":8824},{"2020-04-14":8449},{"2020-04-13":8199},{"2020-04-12":7963},{"2020-04-11":7683},{"2020-04-10":7353},{"2020-04-09":6930},{"2020-04-08":6549},{"2020-04-07":6112},{"2020-04-06":5808},{"2020-04-05":5543},{"2020-04-04":5348},{"2020-04-03":4906},{"2020-04-02":4520},{"2020-04-01":4030},{"2020-03-31":3536}],
   "ns":[{"2020-05-04":31426},{"2020-05-03":30916},{"2020-05-02":30369},{"2020-05-01":29842},{"2020-04-30":29156},{"2020-04-29":28421},{"2020-04-28":27817},{"2020-04-27":27131},{"2020-04-26":26488},{"2020-04-25":25984},{"2020-04-24":25371},{"2020-04-23":24558},{"2020-04-22":23765},{"2020-04-21":22927},{"2020-04-20":22490},{"2020-04-19":21795},{"2020-04-18":20961},{"2020-04-17":20112},{"2020-04-16":19032},{"2020-04-15":17968},{"2020-04-14":17272},{"2020-04-13":16054},{"2020-04-12":14740},{"2020-04-11":14060},{"2020-04-10":13421},{"2020-04-09":12550},{"2020-04-08":11688},{"2020-04-07":10931},{"2020-04-06":10511},{"2020-04-05":9772},{"2020-04-04":9200},{"2020-04-03":8441},{"2020-04-02":7639},{"2020-04-01":6764},{"2020-03-31":5910}],
   "pe":[{"2020-05-04":3356},{"2020-05-03":"N"},{"2020-05-02":"N"},{"2020-05-01":3111},{"2020-04-30":3036},{"2020-04-29":2925},{"2020-04-28":2805},{"2020-04-27":2773},{"2020-04-26":"N"},{"2020-04-25":"N"},{"2020-04-24":2614},{"2020-04-23":2516},{"2020-04-22":2397},{"2020-04-21":2379},{"2020-04-20":2351},{"2020-04-19":"N"},{"2020-04-18":2198},{"2020-04-17":2155},{"2020-04-16":2037},{"2020-04-15":1945},{"2020-04-14":1852},{"2020-04-13":1841},{"2020-04-12":"N"},{"2020-04-11":1666},{"2020-04-10":"N"},{"2020-04-09":1531},{"2020-04-08":1470},{"2020-04-07":1018},{"2020-04-06":1006},{"2020-04-05":"N"},{"2020-04-04":1004},{"2020-04-03":835},{"2020-04-02":831},{"2020-04-01":686},{"2020-03-31":683}],
   "nl":[{"2020-05-04":8961},{"2020-05-03":8833},{"2020-05-02":8716},{"2020-05-01":8552},{"2020-04-30":8376},{"2020-04-29":8220},{"2020-04-28":7955},{"2020-04-27":7622},{"2020-04-26":7477},{"2020-04-25":7332},{"2020-04-24":7134},{"2020-04-23":6902},{"2020-04-22":6662},{"2020-04-21":6431},{"2020-04-20":6249},{"2020-04-19":6144},{"2020-04-18":5871},{"2020-04-17":5585},{"2020-04-16":5370},{"2020-04-15":5166},{"2020-04-14":5021},{"2020-04-13":4907},{"2020-04-12":4812},{"2020-04-11":4726},{"2020-04-10":4520},{"2020-04-09":4390},{"2020-04-08":4149},{"2020-04-07":3958},{"2020-04-06":3776},{"2020-04-05":3565},{"2020-04-04":3386},{"2020-04-03":"N"},{"2020-04-02":2929},{"2020-04-01":2816},{"2020-03-31":2575}],
   "nu":[{"2020-05-04":437},{"2020-05-03":"N"},{"2020-05-02":"N"},{"2020-05-01":"N"},{"2020-04-30":407},{"2020-04-29":361},{"2020-04-28":"N"},{"2020-04-27":323},{"2020-04-26":"N"},{"2020-04-25":"N"},{"2020-04-24":277},{"2020-04-23":"N"},{"2020-04-22":250},{"2020-04-21":"N"},{"2020-04-20":201},{"2020-04-19":"N"},{"2020-04-18":"N"},{"2020-04-17":199},{"2020-04-16":"N"},{"2020-04-15":190},{"2020-04-14":181},{"2020-04-13":"N"},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":147},{"2020-04-08":114},{"2020-04-07":"N"},{"2020-04-06":109},{"2020-04-05":"N"},{"2020-04-04":"N"},{"2020-04-03":"N"},{"2020-04-02":"N"},{"2020-04-01":85},{"2020-03-31":79}],
   "nt":[{"2020-05-04":1812},{"2020-05-03":1810},{"2020-05-02":1794},{"2020-05-01":1758},{"2020-04-30":1736},{"2020-04-29":1710},{"2020-04-28":1684},{"2020-04-27":1683},{"2020-04-26":1670},{"2020-04-25":1647},{"2020-04-24":1628},{"2020-04-23":1605},{"2020-04-22":1597},{"2020-04-21":1593},{"2020-04-20":1574},{"2020-04-19":1551},{"2020-04-18":1530},{"2020-04-17":1514},{"2020-04-16":1505},{"2020-04-15":1464},{"2020-04-14":1456},{"2020-04-13":1453},{"2020-04-12":1448},{"2020-04-11":1429},{"2020-04-10":1397},{"2020-04-09":1314},{"2020-04-08":1299},{"2020-04-07":1275},{"2020-04-06":1262},{"2020-04-05":1255},{"2020-04-04":1204},{"2020-04-03":1141},{"2020-04-02":996},{"2020-04-01":979},{"2020-03-31":910}],
   "yt":[{"2020-05-04":1021},{"2020-05-03":992},{"2020-05-02":978},{"2020-05-01":978},{"2020-04-30":966},{"2020-04-29":911},{"2020-04-28":913},{"2020-04-27":886},{"2020-04-26":"N"},{"2020-04-25":874},{"2020-04-24":871},{"2020-04-23":873},{"2020-04-22":862},{"2020-04-21":863},{"2020-04-20":876},{"2020-04-19":"N"},{"2020-04-18":852},{"2020-04-17":848},{"2020-04-16":"N"},{"2020-04-15":831},{"2020-04-14":"N"},{"2020-04-13":814},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":"N"},{"2020-04-08":775},{"2020-04-07":"N"},{"2020-04-06":747},{"2020-04-05":"N"},{"2020-04-04":"N"},{"2020-04-03":700},{"2020-04-02":"N"},{"2020-04-01":696},{"2020-03-31":598}],
   "ca":[{"2020-05-04":"N"},{"2020-05-03":"N"},{"2020-05-02":"N"},{"2020-05-01":"N"},{"2020-04-30":"N"},{"2020-04-29":"N"},{"2020-04-28":"N"},{"2020-04-27":"N"},{"2020-04-26":"N"},{"2020-04-25":"N"},{"2020-04-24":"N"},{"2020-04-23":"N"},{"2020-04-22":"N"},{"2020-04-21":"N"},{"2020-04-20":"N"},{"2020-04-19":"N"},{"2020-04-18":"N"},{"2020-04-17":"N"},{"2020-04-16":"N"},{"2020-04-15":"N"},{"2020-04-14":"N"},{"2020-04-13":"N"},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":"N"},{"2020-04-08":"N"},{"2020-04-07":"N"},{"2020-04-06":"N"},{"2020-04-05":"N"},{"2020-04-04":"N"},{"2020-04-03":"N"},{"2020-04-02":"N"},{"2020-04-01":"N"},{"2020-03-31":"N"}]

 }
}
;

STATS.hosp = {
 "series":"hosp",
 "description":"Current number of people in hospital",
 "data":{
   "bc":[{"2020-05-04":77},{"2020-05-03":"N"},{"2020-05-02":"N"},{"2020-05-01":79},{"2020-04-30":82},{"2020-04-29":89},{"2020-04-28":94},{"2020-04-27":97},{"2020-04-26":"N"},{"2020-04-25":"N"},{"2020-04-24":96},{"2020-04-23":103},{"2020-04-22":103},{"2020-04-21":109},{"2020-04-20":104},{"2020-04-19":"N"},{"2020-04-18":"N"},{"2020-04-17":119},{"2020-04-16":120},{"2020-04-15":131},{"2020-04-14":134},{"2020-04-13":137},{"2020-04-12":"N"},{"2020-04-11":134},{"2020-04-10":128},{"2020-04-09":132},{"2020-04-08":135},{"2020-04-07":138},{"2020-04-06":140},{"2020-04-05":"N"},{"2020-04-04":149},{"2020-04-03":146},{"2020-04-02":149},{"2020-04-01":142},{"2020-03-31":128}],
   "ab":[{"2020-05-04":89},{"2020-05-03":90},{"2020-05-02":88},{"2020-05-01":86},{"2020-04-30":90},{"2020-04-29":86},{"2020-04-28":82},{"2020-04-27":87},{"2020-04-26":83},{"2020-04-25":77},{"2020-04-24":76},{"2020-04-23":72},{"2020-04-22":70},{"2020-04-21":64},{"2020-04-20":63},{"2020-04-19":65},{"2020-04-18":57},{"2020-04-17":60},{"2020-04-16":"N"},{"2020-04-15":"N"},{"2020-04-14":44},{"2020-04-13":47},{"2020-04-12":44},{"2020-04-11":47},{"2020-04-10":48},{"2020-04-09":47},{"2020-04-08":44},{"2020-04-07":42},{"2020-04-06":40},{"2020-04-05":48},{"2020-04-04":42},{"2020-04-03":39},{"2020-04-02":32},{"2020-04-01":29},{"2020-03-31":26}],
   "sk":[{"2020-05-04":11},{"2020-05-03":14},{"2020-05-02":12},{"2020-05-01":10},{"2020-04-30":10},{"2020-04-29":10},{"2020-04-28":8},{"2020-04-27":7},{"2020-04-26":5},{"2020-04-25":4},{"2020-04-24":5},{"2020-04-23":6},{"2020-04-22":5},{"2020-04-21":5},{"2020-04-20":4},{"2020-04-19":4},{"2020-04-18":5},{"2020-04-17":5},{"2020-04-16":7},{"2020-04-15":8},{"2020-04-14":7},{"2020-04-13":8},{"2020-04-12":7},{"2020-04-11":8},{"2020-04-10":8},{"2020-04-09":8},{"2020-04-08":8},{"2020-04-07":7},{"2020-04-06":4},{"2020-04-05":4},{"2020-04-04":4},{"2020-04-03":3},{"2020-04-02":4},{"2020-04-01":4},{"2020-03-31":4}],
   "mb":[{"2020-05-04":5},{"2020-05-03":5},{"2020-05-02":6},{"2020-05-01":5},{"2020-04-30":5},{"2020-04-29":5},{"2020-04-28":7},{"2020-04-27":7},{"2020-04-26":8},{"2020-04-25":7},{"2020-04-24":7},{"2020-04-23":7},{"2020-04-22":7},{"2020-04-21":7},{"2020-04-20":8},{"2020-04-19":8},{"2020-04-18":7},{"2020-04-17":8},{"2020-04-16":8},{"2020-04-15":9},{"2020-04-14":9},{"2020-04-13":8},{"2020-04-12":8},{"2020-04-11":8},{"2020-04-10":"N"},{"2020-04-09":11},{"2020-04-08":12},{"2020-04-07":12},{"2020-04-06":11},{"2020-04-05":11},{"2020-04-04":10},{"2020-04-03":9},{"2020-04-02":5},{"2020-04-01":4},{"2020-03-31":3}],
   "on":[{"2020-05-04":984},{"2020-05-03":1010},{"2020-05-02":977},{"2020-05-01":1017},{"2020-04-30":999},{"2020-04-29":977},{"2020-04-28":957},{"2020-04-27":945},{"2020-04-26":938},{"2020-04-25":925},{"2020-04-24":910},{"2020-04-23":887},{"2020-04-22":878},{"2020-04-21":859},{"2020-04-20":802},{"2020-04-19":809},{"2020-04-18":828},{"2020-04-17":829},{"2020-04-16":807},{"2020-04-15":795},{"2020-04-14":769},{"2020-04-13":760},{"2020-04-12":738},{"2020-04-11":691},{"2020-04-10":673},{"2020-04-09":632},{"2020-04-08":605},{"2020-04-07":614},{"2020-04-06":589},{"2020-04-05":523},{"2020-04-04":506},{"2020-04-03":462},{"2020-04-02":405},{"2020-04-01":332},{"2020-03-31":291}],
   "qc":[{"2020-05-04":1772},{"2020-05-03":1754},{"2020-05-02":1738},{"2020-05-01":1716},{"2020-04-30":1684},{"2020-04-29":1648},{"2020-04-28":1625},{"2020-04-27":1541},{"2020-04-26":1518},{"2020-04-25":1509},{"2020-04-24":1460},{"2020-04-23":1411},{"2020-04-22":1278},{"2020-04-21":1224},{"2020-04-20":1169},{"2020-04-19":1102},{"2020-04-18":1130},{"2020-04-17":1076},{"2020-04-16":1018},{"2020-04-15":984},{"2020-04-14":936},{"2020-04-13":824},{"2020-04-12":824},{"2020-04-11":778},{"2020-04-10":733},{"2020-04-09":679},{"2020-04-08":632},{"2020-04-07":583},{"2020-04-06":533},{"2020-04-05":525},{"2020-04-04":478},{"2020-04-03":441},{"2020-04-02":365},{"2020-04-01":307},{"2020-03-31":286}],
   "nb":[{"2020-05-04":0},{"2020-05-03":0},{"2020-05-02":0},{"2020-05-01":0},{"2020-04-30":0},{"2020-04-29":1},{"2020-04-28":1},{"2020-04-27":3},{"2020-04-26":4},{"2020-04-25":4},{"2020-04-24":4},{"2020-04-23":5},{"2020-04-22":5},{"2020-04-21":5},{"2020-04-20":5},{"2020-04-19":5},{"2020-04-18":5},{"2020-04-17":5},{"2020-04-16":6},{"2020-04-15":5},{"2020-04-14":5},{"2020-04-13":5},{"2020-04-12":7},{"2020-04-11":5},{"2020-04-10":5},{"2020-04-09":5},{"2020-04-08":6},{"2020-04-07":7},{"2020-04-06":7},{"2020-04-05":4},{"2020-04-04":4},{"2020-04-03":4},{"2020-04-02":4},{"2020-04-01":4},{"2020-03-31":1}],
   "ns":[{"2020-05-04":6},{"2020-05-03":6},{"2020-05-02":9},{"2020-05-01":10},{"2020-04-30":10},{"2020-04-29":11},{"2020-04-28":12},{"2020-04-27":12},{"2020-04-26":13},{"2020-04-25":11},{"2020-04-24":11},{"2020-04-23":10},{"2020-04-22":10},{"2020-04-21":11},{"2020-04-20":12},{"2020-04-19":11},{"2020-04-18":11},{"2020-04-17":11},{"2020-04-16":11},{"2020-04-15":9},{"2020-04-14":10},{"2020-04-13":9},{"2020-04-12":9},{"2020-04-11":8},{"2020-04-10":8},{"2020-04-09":10},{"2020-04-08":11},{"2020-04-07":11},{"2020-04-06":10},{"2020-04-05":6},{"2020-04-04":4},{"2020-04-03":5},{"2020-04-02":5},{"2020-04-01":5},{"2020-03-31":4}],
   "pe":[{"2020-05-04":0},{"2020-05-03":"N"},{"2020-05-02":"N"},{"2020-05-01":0},{"2020-04-30":0},{"2020-04-29":0},{"2020-04-28":0},{"2020-04-27":0},{"2020-04-26":"N"},{"2020-04-25":"N"},{"2020-04-24":0},{"2020-04-23":0},{"2020-04-22":0},{"2020-04-21":0},{"2020-04-20":0},{"2020-04-19":"N"},{"2020-04-18":0},{"2020-04-17":0},{"2020-04-16":0},{"2020-04-15":0},{"2020-04-14":0},{"2020-04-13":0},{"2020-04-12":"N"},{"2020-04-11":0},{"2020-04-10":"N"},{"2020-04-09":0},{"2020-04-08":0},{"2020-04-07":0},{"2020-04-06":0},{"2020-04-05":"N"},{"2020-04-04":0},{"2020-04-03":0},{"2020-04-02":0},{"2020-04-01":0},{"2020-03-31":0}],
   "nl":[{"2020-05-04":4},{"2020-05-03":4},{"2020-05-02":4},{"2020-05-01":4},{"2020-04-30":4},{"2020-04-29":4},{"2020-04-28":4},{"2020-04-27":5},{"2020-04-26":5},{"2020-04-25":5},{"2020-04-24":5},{"2020-04-23":5},{"2020-04-22":6},{"2020-04-21":6},{"2020-04-20":6},{"2020-04-19":6},{"2020-04-18":6},{"2020-04-17":7},{"2020-04-16":7},{"2020-04-15":8},{"2020-04-14":8},{"2020-04-13":8},{"2020-04-12":7},{"2020-04-11":6},{"2020-04-10":7},{"2020-04-09":6},{"2020-04-08":6},{"2020-04-07":7},{"2020-04-06":8},{"2020-04-05":10},{"2020-04-04":11},{"2020-04-03":11},{"2020-04-02":11},{"2020-04-01":15},{"2020-03-31":11}],
   "nu":[{"2020-05-04":0},{"2020-05-03":"N"},{"2020-05-02":"N"},{"2020-05-01":"N"},{"2020-04-30":0},{"2020-04-29":0},{"2020-04-28":"N"},{"2020-04-27":0},{"2020-04-26":"N"},{"2020-04-25":"N"},{"2020-04-24":0},{"2020-04-23":"N"},{"2020-04-22":0},{"2020-04-21":"N"},{"2020-04-20":0},{"2020-04-19":"N"},{"2020-04-18":"N"},{"2020-04-17":0},{"2020-04-16":"N"},{"2020-04-15":0},{"2020-04-14":0},{"2020-04-13":"N"},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":0},{"2020-04-08":0},{"2020-04-07":"N"},{"2020-04-06":0},{"2020-04-05":"N"},{"2020-04-04":"N"},{"2020-04-03":"N"},{"2020-04-02":"N"},{"2020-04-01":0},{"2020-03-31":0}],
   "nt":[{"2020-05-04":0},{"2020-05-03":0},{"2020-05-02":0},{"2020-05-01":0},{"2020-04-30":0},{"2020-04-29":0},{"2020-04-28":0},{"2020-04-27":0},{"2020-04-26":0},{"2020-04-25":0},{"2020-04-24":0},{"2020-04-23":0},{"2020-04-22":0},{"2020-04-21":0},{"2020-04-20":0},{"2020-04-19":0},{"2020-04-18":0},{"2020-04-17":0},{"2020-04-16":0},{"2020-04-15":0},{"2020-04-14":0},{"2020-04-13":0},{"2020-04-12":0},{"2020-04-11":0},{"2020-04-10":0},{"2020-04-09":0},{"2020-04-08":0},{"2020-04-07":0},{"2020-04-06":0},{"2020-04-05":0},{"2020-04-04":0},{"2020-04-03":0},{"2020-04-02":0},{"2020-04-01":0},{"2020-03-31":0}],
   "yt":[{"2020-05-04":0},{"2020-05-03":0},{"2020-05-02":0},{"2020-05-01":0},{"2020-04-30":0},{"2020-04-29":0},{"2020-04-28":0},{"2020-04-27":0},{"2020-04-26":"N"},{"2020-04-25":0},{"2020-04-24":0},{"2020-04-23":0},{"2020-04-22":0},{"2020-04-21":0},{"2020-04-20":0},{"2020-04-19":"N"},{"2020-04-18":0},{"2020-04-17":0},{"2020-04-16":"N"},{"2020-04-15":0},{"2020-04-14":"N"},{"2020-04-13":0},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":"N"},{"2020-04-08":0},{"2020-04-07":"N"},{"2020-04-06":0},{"2020-04-05":"N"},{"2020-04-04":"N"},{"2020-04-03":0},{"2020-04-02":"N"},{"2020-04-01":0},{"2020-03-31":0}],
   "ca":[{"2020-05-04":"N"},{"2020-05-03":"N"},{"2020-05-02":"N"},{"2020-05-01":"N"},{"2020-04-30":"N"},{"2020-04-29":"N"},{"2020-04-28":"N"},{"2020-04-27":"N"},{"2020-04-26":"N"},{"2020-04-25":"N"},{"2020-04-24":"N"},{"2020-04-23":"N"},{"2020-04-22":"N"},{"2020-04-21":"N"},{"2020-04-20":"N"},{"2020-04-19":"N"},{"2020-04-18":"N"},{"2020-04-17":"N"},{"2020-04-16":"N"},{"2020-04-15":"N"},{"2020-04-14":"N"},{"2020-04-13":"N"},{"2020-04-12":"N"},{"2020-04-11":"N"},{"2020-04-10":"N"},{"2020-04-09":"N"},{"2020-04-08":"N"},{"2020-04-07":"N"},{"2020-04-06":"N"},{"2020-04-05":"N"},{"2020-04-04":"N"},{"2020-04-03":"N"},{"2020-04-02":"N"},{"2020-04-01":"N"},{"2020-03-31":"N"}]

 }
}
;

/* Array of screenshot directories on github, whose names are conventional yyyy-mm-dd. */
var SCREENSHOT_DIRECTORIES = ["2020-03-31_22h00mADT", "2020-04-01_22h00mADT", "2020-04-02_22h00mADT", "2020-04-03_21h30mADT", "2020-04-04_21h00mADT", "2020-04-05_21h30mADT", "2020-04-06_21h45mADT", "2020-04-07_21h45mADT", "2020-04-08_21h30mADT", "2020-04-09_22h00mADT", "2020-04-10_21h30mADT", "2020-04-11_21h00mADT", "2020-04-12_21h30mADT", "2020-04-13_21h00mADT", "2020-04-14_21h00mADT", "2020-04-15_21h00mADT", "2020-04-16_21h00mADT", "2020-04-17_21h00mADT", "2020-04-18_21h30mADT", "2020-04-19_19h30mADT", "2020-04-20_21h15mADT", "2020-04-21_21h30mADT", "2020-04-22_21h30mADT", "2020-04-23_21h30mADT", "2020-04-24_21h15mADT", "2020-04-25_21h30mADT", "2020-04-26_21h00mADT", "2020-04-27_21h15mADT", "2020-04-28_21h15mADT", "2020-04-29_21h15mADT", "2020-04-30_21h15mADT", "2020-05-01_21h30mADT", "2020-05-02_21h30mADT", "2020-05-03_21h15mADT", "2020-05-04_23h00mADT"];
