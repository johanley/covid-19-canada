package epidemic.stats.render.markdown;

/** 
 Placeholder in a template text file.
 In the template file, the syntax used is ${tableRows}, for example.
 
 (I'm not sure this enum is really useful or not. 
 It might be simpler to use simple ${5} numeric codes instead.)
*/
enum Key {
 tableHeaderJurisdictions,
 tableHeaderSeparator,
 tableRows,
 tableRowsWithLinks,
 perCapitaTableRows,
 
 jurisdiction,
 knownCasesGraph,
 knownCasesDailyIncreaseGraph,
 deathsGraph,
 deathsDailyIncreaseGraph,
 testsGraph,
 testsDailyIncreaseGraph,
 hospGraph,
 hospDailyIncreaseGraph,
 
 dateOfMostRecentScreenshots,
 totalDeaths,
 totalDeathsPerCapita,
 totalDeathsDailyIncrease,
 totalCases,
 totalCasesPerCapita,
 totalCasesDailyIncrease,
 totalTests,
 totalTestsPerCapita,
 totalTestsDailyIncrease,
 totalHosp,
 totalHospPerCapita,
 totalHospDailyIncrease,
 
 summaryTableRows, 
 
 summaryTableDeaths,
 summaryTableDeathsDaily,
 summaryTableDeathsPerCapita,
 summaryTableCases,
 summaryTableCasesPerCapita,
 summaryTableCasesDaily,
 summaryTableTests,
 summaryTableTestsDaily,
 summaryTableTestsPerCapita,
 summaryTableHosp,
 summaryTableHospDaily,
 summaryTableHospPerCapita,
 
 
 summaryHistoDeaths,
 summaryHistoDeathsDailyIncrease,
 summaryHistoDeathsPerCapita,
 summaryHistoCases,
 summaryHistoCasesDailyIncrease,
 summaryHistoCasesPerCapita,
 summaryHistoTests,
 summaryHistoTestsDailyIncrease,
 summaryHistoTestsPerCapita,
 summaryHistoHosp,
 summaryHistoHospDailyIncrease,
 summaryHistoHospPerCapita,
 
 
 ;
}

