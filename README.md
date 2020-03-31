# What's the problem?

The problem is *lack of fast access to simple, parseable stats regarding the covid-19 outbreak in Canada*.

I assume most people are looking for data with these characteristics:

* 4 categories: test, cases, recoveries, and deaths (T,C,R,D)
* time-series data (which of course includes the latest day), from the beginning of an outbreak until present
* 13 jurisdictions: provinces, territories (14, if you count the federal level)
* world-readable (can be easily accessed in a browser, with no restrictions)
* easily parsed and consumed by programming tools 

I don't see any data source that has all of the above.
Here's a breakdown:


 | Characteristic | [Federal .csv file](https://health-infobase.canada.ca/src/data/covidLive/covid19.csv) | [John Hopkins University](https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-30-2020.csv) | [COVID-19 Canada Open Data Working Group](https://github.com/ishaberry/Covid19Canada) |
 | ------------ | ------------- | ---------- | ----------- |
 | 13 jurisdictions | Yes | Yes | Yes |
 | World-readable | Yes | Yes | Yes |
 | 4 Categories TCRD | CD only | CD only | Yes |
 | Time-series | Yes | Yes | TR yes, CD no |
 | Parseability | Low | High | Low |

 
Ways of sharing data on the web:

* well-formatted .csv files on [github](https://github.com/). Example: a file from [John Hopkins University](https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-30-2020.csv).
Using github is likely the preferred method for most people.
You can use tools like [papaparse](https://www.papaparse.com/) to fetch the data.
* a world-readable, *easily parsed* Google spreadsheet. Example: [my file](https://docs.google.com/spreadsheets/d/1s253rdkFK4E_J5gjbbZyFgaatTBewUk9s-CMFxmrxkc/edit#gid=1626901138) .
You'll need Google's [Sheets API](https://developers.google.com/sheets/api/quickstart/js) to access the data, however.

Having such simple sources of publicly-readable data is a kind of simple, *de facto* web api.
Once the data is in place, programmers can build tools to fetch and parse the data.


Here's what seems to be happening in Canada.

# Problem 1.
There are 14 jurisdictions in Canada (provinces, territories, and the federal government).
Health is administered separately by each jurisdiction. 
This leads to silos and difficulty in getting consistent summary data across all jurisdictions.
See below.

# Problem 2.
The data made available by the various provinces/territories is **current-day only**!
If there was ever a time that time-series data was important, *it's during an epidemic*. 
The feds have started to provide a [.csv](https://health-infobase.canada.ca/src/data/covidLive/covid19.csv) file on the web. 
It has the defect (as of this writing), of not including number of tests or recovered cases. 
It's also not layed out in a way that's trivial to parse.
https://health-infobase.canada.ca/src/data/covidLive/covid19.csv

Because of these problems, the good people of the 
<a href='https://github.com/ishaberry/Covid19Canada'>COVID-19 Canada Open Data Working Group</a> of university professionals 
have *manually* gathered together basic time-series stats on the outbreak. 
(Their data is used by the <a href='https://virihealth.com/provincial-trends/'>Virihealth</a> site, for example.)
Each day they laboriously scan authoritative sources on the web, place relevant data in a spreadsheet, and make it publicly available.
They should be applauded for doing so, but they are forced into doing this by the lack of authoritative stats from the government.

The COVID-19 Canada Open Data Working Group have their data as a publicly readable Google spreadsheet.
https://docs.google.com/spreadsheets/d/1D6okqtBS3S2NRC7GFVHzaZ67DuTw7LX49-fqSLwJyeo/edit?usp=sharing

That leads to 

# Problem 3.
The *COVID-19 Canada Open Data Working Group* spreadsheet is too hard to parse:

* 2 of the 4 common data sets are not summed by jurisdiction (cases and deaths).
They are detailed records that need to be summed up by each and every programmer that wants to extract the usual totals out of them.
* it doesn't scale: in an epidemic, the number of cases increases exponentially. 
So the consumer of the data needs to cycle through thousands of case records in order to get 13 summations. 
Doing that in javascript is going to be slow. The 13 summations should be directly available (for cases and deaths).
* the layout of the data is not as simple as it could be. That makes it a chore to extract data from it.

The Virihealth website has taken some pains to produce the kind of summary data that most people want.
Take a look at the spreadsheet, and what was needed to get the desired result:
https://docs.google.com/spreadsheets/d/1C59nxtgcnwGyo6lgypsgN18duxmwWigjeVdKY58t0mU/edit#gid=1268011970 

Not simple! And every single consumer of this data would need to go through the same shenanigans.

Which is a shame, because it's the best data we have.

# So? Yet another spreadsheet
So, I've started to compile the daily basic stats myself, and I'm putting them here:
https://docs.google.com/spreadsheets/d/1s253rdkFK4E_J5gjbbZyFgaatTBewUk9s-CMFxmrxkc/edit#gid=0

The initial data load is from Virihealth's spreadsheet, but I'm now inputting manually into it each day.

# A closer look at the data

The data "food chain" always starts with various government sources.

- Prov/Terr 
  - [GOC](https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html?topic=tilelink) with [.csv](https://health-infobase.canada.ca/src/data/covidLive/covid19.csv)
    - [John Hopkins University](https://coronavirus.jhu.edu/map.html) with [.csv](https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-30-2020.csv)

Here's exactly what's being reported right now (morning of 202-03-31) by the provinces, 
territories, and federal government, from east to west. 
Note:

* differences in language
* the use of technical language, for example *Currently Under Investigation*, whose meaning to the non-expert is far from clear
* differences in what's reported
* the incompleteness of Recovered data
* provinces have changed what they report over time


[BC](http://www.bccdc.ca/health-info/diseases-conditions/covid-19/case-counts-press-statements)

* Confirmed cases 970
* Recovered 469
* Tests completed 42028
* Deaths 19
* March 30, 2020 

[AB](https://www.alberta.ca/covid-19-alberta-data.aspx) and [here](https://www.albertahealthservices.ca/topics/Page16944.aspx)

* Confirmed cases 690
* Recovered 94
* Completed tests 46057
* Deaths 8
* March 30

[SK](https://www.saskatchewan.ca/government/health-care-administration-and-provider-resources/treatment-procedures-and-guidelines/emerging-public-health-issues/2019-novel-coronavirus/cases-and-risk-of-covid-19-in-saskatchewan)

* Total Cases 176
* Recovered 14
* Confirmed Cases 176
* Inpatient Hospitalization 4
* ICU Hospitalizations 1
* Deaths N/A
* Num of Patients with Tests Ordered 9372
* Num of Patients with Tests Pending 61
* Patients Presumptive Positive 0
* Num Patients Confirmed Positive 176
* Patients Confirmed Negative 9135
* Total # of Tests Performed 9651
* March 30, 2020

 *"There may be more recovered cases yet to be reported to Public Health."*
 
 
[MB](https://www.gov.mb.ca/covid19/index.html)

* Total Cases 96 
* Confirmed Positive 83
* Probable Positive 13
* Recovered 2
* Completed tests 8550
* Deaths 1
* Hospitalized 4
* ICU 1
* March 30, 2020 - 1:00 p.m.

[ON](https://www.ontario.ca/page/2019-novel-coronavirus#section-0)

* Number of cases 1966 
* Resolved 534
* Deceased 23
* Total tested 51629
* Currently Under Investigation 4280
* January 15, 2020 to March 30, 2020

Footnote for Number of cases:  *Number of confirmed cases reported to date in iPHIS by Ontario’s 34 Public Health Units (PHUs), including resolved and deceased cases.  PHUs may publicly report on cases prior to updating the data in iPHIS.  In the event of a discrepancy between iPHIS cases and cases publicly reported by PHUs, data reported by PHUs should be considered the most up to date.*
Footnote for Resolved:  *Includes cases reported as recovered in iPHIS and cases that are not currently listed as hospitalized in iPHIS, those that are 14 days past symptom onset (if present) or 14 days past the episode date if the case is closed.*
Footnote for Deceased: *Public Health Units may publicly report deaths prior to updating the data in iPHIS. The data in iPHIS may therefore be underreported. This number includes data from iPHIS and public reports.*
Footnote for Total tested: *This includes all persons with tests performed by the Public Health Ontario Laboratory  and non-Public Health Laboratories.  This is an underestimate of the total number of tests completed, as a minimum of two specimens are recommended when testing hospitalized individuals for COVID-19.*
Footnote for Currently Under Investigation: *Test results pending*

The data for this report were based on information extracted from the integrated Public Health Information 
System (iPHIS) database as of March 29, 2020 at 4:00 p.m.

[QC](https://www.msss.gouv.qc.ca/professionnels/maladies-infectieuses/coronavirus-2019-ncov/)

* 3 430 cas confirmés
* 25 décès
* 6 200 personnes sous investigation
* 56 285 analyses négatives (cas infirmés)
* (Recovered CAN'T FIND THIS; sometimes in press releases, sometimes not)
* 30 mars 2020, 13 h

Completed-tests calc, add neg + pos tests: 56285 Analyses négatives + 3430 cas confirmés = 59715


[NB](https://www2.gnb.ca/content/gnb/en/departments/ocmoh/cdc/content/respiratory_diseases/coronavirus.html)

* Total cases 68
* Recovered cases 2
* Tests conducted 3234 
* 2020-03-30

Deaths presumed 0.

[NS](https://novascotia.ca/coronavirus/#cases)

* Positive 127
* Negative 5045 
* 30 March 2020. 

So, the number of completed tests is 127+5045=5172.
Deaths presumed 0.
Recovered? Can't find it; sometimes in press releases, sometimes not.

[PE](https://www.princeedwardisland.ca/en/topic/covid-19)

* Positive results 18
* Negative results 590
* Persons under investigation (test results pending) 161
* Total number of tests conducted 769 
* Recovered cases 1
* March 30, 10:00 AM

Footnote: *Positive results includes those for cases who have recovered.*
Deaths presumed 0.
Here, Total number of tests conducted INCLUDES pending. 


[NL](https://www.gov.nl.ca/covid-19/pandemic-update/)

* 148 cases
* 2332 people have been tested 
* 2185 have been confirmed negative
* March 30, 2020 at 12:30pm NDT

Can't find *Recovered*.
Deaths presumed 0.
People can be tested more than once!


[NU](https://www.gov.nu.ca/health/information/covid-19-novel-coronavirus)

* Confirmed cases 0
* Probable cases 0
* PUI cumulative total 259
* PUI currently under investigation 180
* PUIs now no longer under investigation 79
* Mar 30/20

Footnote: *PUI (Persons Under Investigation) includes all individuals that meet the national PUI definition as well as some others self-monitoring or self-isolating.*

[NT](https://www.hss.gov.nt.ca/en/services/coronavirus-disease-covid-19)

* Confirmed Cases: 1
* Negative Tests: 832 
* Tests Pending: 215
* Total Tests Performed: 833
* March 30 at 9:00 AM

[YK](https://yukon.ca/en/health-and-wellness/health-concerns-diseases-and-conditions/information-about-coronavirus-covid-19)

* Total people tested 688
* Confirmed cases 5
* Negative results 593
* Pending results 90
* March 30, 2020 – 12:00

People can be tested more than once. 
Possible error: *Total people tested* should be *Total tests performed, including pending*.

[CA](https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html?topic=tilelink)

* Number of confirmed cases 7435
* Number of probable cases 13
* Number of deaths 89
* Total cases 7448
* March 31st, 2020

Currently, there's no stats for Recovered and Tests on the federal government site, but they are the only Canadian 
jurisdiction to provide a [time-series download](https://health-infobase.canada.ca/src/data/covidLive/covid19.csv).
