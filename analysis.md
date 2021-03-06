# Overview of the COVID-19 stats being reported in Canada

There is a *lack of fast programmatic access to a complete, robust set of stats on the COVID-19 outbreak in Canada*.

In a perfect world, I assume that most programmers looking to consume this data would want the following:

* 4 categories of data: tests, cases, recoveries, and deaths (T,C,R,D)
* an authoritative source of the data
* precise semantics for the data, that's also easy to understand
* time-series data from the beginning of an outbreak until the present day
* 14 jurisdictions: provinces, territories, and the federal government
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

Note that C,D are easier to get than R, T (using the codes defined above). 
R and T are sometimes absent from some record sets.

 
# Daily screenshots of exactly what's reported  

In imitation of [this project in the US](https://github.com/COVID19Tracking), as of 2020-03-31 I've begun to take screen shots of 
web pages at the end of the day, for the 14 jurisdictions. 
You can view those screenshots conveniently [here](https://github.com/johanley/covid-19-canada/blob/master/data/md/about.md).

# A deep dive into the source data
    
Here's exactly what's being reported right now (morning of 2020-03-31) by the provinces, 
territories, and federal government, from west to east. 

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
Here, Total number of tests conducted *includes* pending. 


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

Currently, there are no stats for *Recovered* and *Tests* on the federal government site.
They are the only Canadian 
jurisdiction to provide a [time-series download](https://health-infobase.canada.ca/src/data/covidLive/covid19.csv) as of 2020-03-30.

# Some criticisms of the data reporting

Taken as a whole across the 14 jurisdictions, I think the following are fair criticisms:

*No time series for the provinces and territories*: none of the provinces and territories publish a time series of the data.
In every case, it's current-day only. (If there was ever a time in which a time-series is needed, it's during a 
rapidly escalating epidemic!)

*Inconsistent across jurisdictions*. The various jurisdictions are inconsistent, in that they report different data.
If they report the same data, they sometimes give it a slightly different name. 

*Inconsistent across time*. Some jurisdictions have changed their reporting over time.

*Not always 100% clear*:

* NB reports *Tests conducted*. Does that including pending tests? 
* when ON says *Total tested*, is that a count of people or tests?
* the phrases *persons under investigation* and *presumptive positive* are terms that are understood immediately only by experts in the field

*No data nicely formatted as csv or JSON* (CA has a csv, but the format isn't the greatest).
These are the formats that programmers look for when they want to rapidly access and share data.

I understand that there are difficulties involved when there are so many separate health systems. 
But many citizens would appreciate it if these problems were fixed.


# Up the food chain
The data "food chain" always starts with various government sources.
In the case of Canada, it starts with provinces and territories.
One food chain:

- Province/Territory web sites
  - [GOC](https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html?topic=tilelink) with [.csv](https://health-infobase.canada.ca/src/data/covidLive/covid19.csv)
    - [Johns Hopkins University](https://coronavirus.jhu.edu/map.html) with [.csv](https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-30-2020.csv) files on github

In this food chain, the GOC's .csv file has CD, but not TR.
So that data is also missing from the Johns Hopkins dataset; it too has only C and D (for Canada).

Another food chain:

- Province/Territory web sites
  - [CODWG](https://github.com/ishaberry/Covid19Canada) github .csv files
    - [Virihealth](https://docs.google.com/spreadsheets/d/1C59nxtgcnwGyo6lgypsgN18duxmwWigjeVdKY58t0mU/edit#gid=1268011970) google spreadsheet
    
Here, CODWG has all 4 of TCRD.
Virihealth consumes that data, and summarizes its details. (It also adds some early test case data, as of 2020-03-07; CODWG
began to record TR a bit later, on 2020-03-15). 

# Johns Hopkins University data

It has both daily and time-series data. 
The files with Canadian data are about 50k in size (at the moment).
That's likely small enough to be processed directly by javascript in a browser.
(The data for the US itself is more extensive. It may be the case that the files are downloaded daily and imported into other tools.
In that case, the .csv files act as a data source, but not as part of a web api.)

Take a look at their data. 
This example is taken from their [global deaths](https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv) 
file, as a time series:

```
Province/State,Country/Region,Lat,Long,1/22/20,1/23/20,1/24/20,1/25/20,1/26/20,1/27/20,1/28/20,1/29/20,1/30/20,1/31/20,2/1/20,2/2/20,2/3/20,2/4/20,2/5/20,2/6/20,2/7/20,2/8/20,2/9/20,2/10/20,2/11/20,2/12/20,2/13/20,2/14/20,2/15/20,2/16/20,2/17/20,2/18/20,2/19/20,2/20/20,2/21/20,2/22/20,2/23/20,2/24/20,2/25/20,2/26/20,2/27/20,2/28/20,2/29/20,3/1/20,3/2/20,3/3/20,3/4/20,3/5/20,3/6/20,3/7/20,3/8/20,3/9/20,3/10/20,3/11/20,3/12/20,3/13/20,3/14/20,3/15/20,3/16/20,3/17/20,3/18/20,3/19/20,3/20/20,3/21/20,3/22/20,3/23/20,3/24/20,3/25/20,3/26/20,3/27/20,3/28/20,3/29/20,3/30/20
...
Alberta,Canada,53.9333,-116.5765,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3
British Columbia,Canada,49.2827,-123.1207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,4,4,7,7,8,10,10,13,13,13,14,14,17,17,19
Grand Princess,Canada,37.6489,-122.6655,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
Manitoba,Canada,53.7609,-98.8139,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1
New Brunswick,Canada,46.5653,-66.4619,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
Newfoundland and Labrador,Canada,53.1355,-57.6604,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1
Nova Scotia,Canada,44.681999999999995,-63.7443,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
Ontario,Canada,51.2538,-85.3232,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,3,5,6,7,8,13,18,18,21,31
Prince Edward Island,Canada,46.5107,-63.4168,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
Quebec,Canada,52.9399,-73.5491,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,5,4,4,4,6,8,18,22,22,22
Saskatchewan,Canada,52.9399,-106.4509,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2
...
```
... and similarly for the [global confirmed cases](https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv):

```
Province/State,Country/Region,Lat,Long,1/22/20,1/23/20,1/24/20,1/25/20,1/26/20,1/27/20,1/28/20,1/29/20,1/30/20,1/31/20,2/1/20,2/2/20,2/3/20,2/4/20,2/5/20,2/6/20,2/7/20,2/8/20,2/9/20,2/10/20,2/11/20,2/12/20,2/13/20,2/14/20,2/15/20,2/16/20,2/17/20,2/18/20,2/19/20,2/20/20,2/21/20,2/22/20,2/23/20,2/24/20,2/25/20,2/26/20,2/27/20,2/28/20,2/29/20,3/1/20,3/2/20,3/3/20,3/4/20,3/5/20,3/6/20,3/7/20,3/8/20,3/9/20,3/10/20,3/11/20,3/12/20,3/13/20,3/14/20,3/15/20,3/16/20,3/17/20,3/18/20,3/19/20,3/20/20,3/21/20,3/22/20,3/23/20,3/24/20,3/25/20,3/26/20,3/27/20,3/28/20,3/29/20,3/30/20
...
Alberta,Canada,53.9333,-116.5765,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,4,7,7,19,19,29,29,39,56,74,97,119,146,195,259,301,359,358,486,542,542,621,661
British Columbia,Canada,49.2827,-123.1207,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,4,4,4,4,4,4,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,9,12,13,21,21,27,32,32,39,46,64,64,73,103,103,186,231,271,424,424,472,617,617,725,725,884,884,970
Grand Princess,Canada,37.6489,-122.6655,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,8,9,9,10,10,13,13,13,13,13,13,13,13,13
Manitoba,Canada,53.7609,-98.8139,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,7,8,15,17,17,18,20,20,21,35,36,39,64,72,96
New Brunswick,Canada,46.5653,-66.4619,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,6,8,11,11,11,17,17,17,18,18,33,45,51,66,68
Newfoundland and Labrador,Canada,53.1355,-57.6604,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,3,3,3,4,6,9,24,35,35,82,102,120,135,148
Nova Scotia,Canada,44.681999999999995,-63.7443,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,7,12,14,15,21,28,41,51,68,73,90,110,122,127
Ontario,Canada,51.2538,-85.3232,0,0,0,0,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,6,6,11,15,18,20,20,22,25,28,29,34,36,41,42,74,79,104,177,185,221,257,308,377,425,503,588,688,858,994,1144,1355,1706
Prince Edward Island,Canada,46.5107,-63.4168,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,3,3,3,5,5,9,11,11,18
Quebec,Canada,52.9399,-73.5491,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,3,4,4,4,8,9,17,17,24,50,74,94,121,139,181,219,628,1013,1342,1632,2024,2498,2840,3430
Saskatchewan,Canada,52.9399,-106.4509,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,7,7,8,16,20,26,52,66,72,72,95,95,134,156,156
...
```

This data is easy to understand and parse. It has *Cases* and *Deaths*, but no *Recovered* or *Tests*.

# Ways of sharing data on the web

* well-formatted .csv files on [github](https://github.com/). Example: a file from [Johns Hopkins University](https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-30-2020.csv).
Using github is likely the preferred method for most people.
You can use tools like [papaparse](https://www.papaparse.com/) to fetch the data.
* a world-readable, *easily parsed* Google spreadsheet. You'll need Google's [Sheets API](https://developers.google.com/sheets/api/quickstart/js) to access the data, however.

Having such simple sources of publicly-readable data is a kind of simple, *de facto* web api.
Once the data is in place, programmers can build tools to fetch and parse the data.


# Perfect world

In a perfect world, what would a top-notch data set look like?
That's a matter of opinion; here's mine.

General:

* *frequency*: daily updates are a necessity. Some jurisdictions are not currently updating on the weekends.
 I understand that people want to take a break on the weekends.
 But the virus isn't taking a break, and the numbers often double in a few days.
 This data is so critical, that it *needs* to be updated every day.
* *federal updates at end-of-day*: the federal stats often don't add up to the sum of the others. 
This is because of timing issues with the transfer of the data.
The only way to get rid of the issue is to updated at the end of the day. 
But, the downside is that the data at the federal level would not be as timely.
* *plain language*: avoid technical terms that the typical citizen will not immediately understand. Make it so clear that 
there are no questions in people's minds as to what the numbers really mean.
* *time series*: show both the current numbers *and* the time series for important stats
* show both total cumulative values, and the daily change
* show both nominal values, and *per capita* values; without *per capita* values, you can't directly compare jurisdictions
* show both linear and logarithmic charts of the time series data
* *formats*: csv and/or JSON formats should be available so that programming tools can easily fetch and parse the data
* *accessibility*: never publish the data *solely* as images or PDF files. Always have an HTML version at minimum.

My preferred data set is roughly similar to Saskatchewan's.

* Tests: pending
* Tests: positive
* Tests: negative
* (Known Cases: confirmed is the same as Tests: positive)
* Known Cases: probable
* Known Cases: recovered
* Known Cases: in hospital
* Known Cases: in intensive care
* Known Cases: deaths

In my perfect world, *cases* would always be referred to as *known cases*.
The only way these stats are generated are by having an entry into some health system's database somewhere.
That's how a case becomes *known*.

Some might say this is pedantic, but I disagree. 
I think it's important. 
The French writer Guy de Maupassant once wrote: *Les mots ont une âme* (*Words have a soul*).
The words you use affect how you *think*.
The feeling-tone you have when you see the phrase *the number of cases is 176* is one of excessive precision.
You have a feeling of being informed accurately about the state of the world when you read that.
But you are *not* accurately informed at all. 
These are *known* cases, that have been entered into a computer system somewhere.
It's a certainty that there are many people who are sick with the virus, but who haven't been recorded anywhere.

Clarity of language and clarity of thought are one and the same thing.
If you repeatedly see the phrase *known cases* rather than *cases*, then you are continually reminded of 
something which is actually rather important: *acknowledging our ignorance*.


# Miscellaneous

Points that seem to be important but overlooked:


### The number of Known Cases really reflect the past, not the present
It's important to remember that the actual reality today is almost always *worse* than what the numbers are saying.
 
### A Known Case can have more than 1 Test!
Tests are a kind of pipeline: Pending -> Result Positive or Negative. 
One human often goes through that pipeline multiple times.
I think there's a natural mistake to assume the number of tests equates to the number of people who've been tested.


# covidtracking.com

Interesting and technically impressive: https://covidtracking.com/ and https://github.com/COVID19Tracking. 
(I love America; they know how to get things done in a hurry.)
It uses [Google sheets as input](https://github.com/COVID19Tracking/covid-data-pipeline), I think, and stores 
data in Amazon AWS/S3.
Their schema:

* positive (test)
* negative (test)
* pending (test)
* hospitalized (person)
* deaths (person)

They have no *Recovered* in their schema.
They have no *Case* in their schema; they may equate it with positive tests.

They even store screenshots, saving the state of the web page when the data was read by human!
They also have an API for US data.
They built it because they were frustrated by a lack of data from the CDC.

# Other

https://coronavirusapi.com/ - they [crawl web sites](https://github.com/coronavirusapi/crawl-and-parse) to get the data. No humans involved. 

https://github.com/wzmli/COVID19-Canada - has a version of all 4 stats in csv format on github.

https://github.com/tomwhite/covid-19-uk-data - the UK has the same problem as the US and Canada. The data is all over the place.

https://www.cbc.ca/news/health/covid-19-pandemic-data-primer-stats-charts-1.5513222

https://www.cbc.ca/news/covid-19/italy-covid-19-outbreak-lessons-1.5517520 - Number of dead underestimated?

https://www.nytimes.com/2020/04/05/us/coronavirus-deaths-undercount.html?action=click&module=Spotlight&pgtype=Homepage - Underestimated?

https://www.cbc.ca/news/health/covid-19-testing-variations-1.5520812 - testing highly variable.

https://nationalpost.com/news/world/covid-19-tests-likely-only-accurate-70-per-cent-of-the-time-health-experts-warn - 70% rate of false positives?

https://covid19dashboards.com/

https://github.com/nytimes/covid-19-data

https://advances.sciencemag.org/content/4/12/eaau5294 - urban versus rural

https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4526984/ waves 
*For influenza pandemics, possible explanations include antigenic drift, waning immunity, 
changing environmental conditions, and social distancing behavior.*


[New Zealand Gov't](https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-situation/covid-19-current-cases) doing a good job of reporting.

[NZ dashboard](https://covid19map.nz/)

https://www.theglobeandmail.com/canada/article-coronavirus-cases-canada-world-map-explainer/ good charts  bad testing stats?
https://www.cbc.ca/news/health/covid-19-testing-variations-1.5520812  bad testing stats?
https://www.inspq.qc.ca/covid-19/donnees quebec is reporting on people, not tests
https://www.inspq.qc.ca/covid-19/donnees quebec: chart for per cap tests; the PE number is people, treated as tests; SK seems to people not tests too.


Download time series data
https://data.ontario.ca/dataset/status-of-covid-19-cases-in-ontario - ON
https://www.inspq.qc.ca/covid-19/donnees - QC
http://www.bccdc.ca/health-info/diseases-conditions/covid-19/data - BC 2/3: tests; minimal case line listing; no deaths
https://catalogue.data.gov.bc.ca/dataset/b-c-covid-19-lab-information - BC
https://covid19stats.alberta.ca/ - AB; case line listing only?
https://open.canada.ca/data/en/dataset/1a75d374-2c4c-4616-aaf0-122d6e810432 - CA
https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html?topic=tilelink - CA 
All others: no

https://nationalpost.com/news/canadas-public-data-on-covid-19-is-mostly-a-mess-heres-how-to-find-the-useful-info 

https://www.cbc.ca/news/canada/calgary/alberta-covid-19-data-statistics-numbers-cases-hospitalizations-1.5514947 alberta hospitalizations - cbc only?

# Sources of screenshots

https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html?topic=tilelink

http://www.bccdc.ca/health-info/diseases-conditions/covid-19/data
http://www.bccdc.ca/health-info/diseases-conditions/covid-19/case-counts-press-statements

https://www.alberta.ca/covid-19-alberta-data.aspx
https://www.alberta.ca/news.aspx
https://www.albertahealthservices.ca/topics/Page16944.aspx

https://www.saskatchewan.ca/government/health-care-administration-and-provider-resources/treatment-procedures-and-guidelines/emerging-public-health-issues/2019-novel-coronavirus/cases-and-risk-of-covid-19-in-saskatchewan

https://www.gov.mb.ca/covid19/updates/index.html

https://www.ontario.ca/page/2019-novel-coronavirus#section-0
https://www.ontario.ca/page/how-ontario-is-responding-covid-19#section-0

https://www.msss.gouv.qc.ca/professionnels/maladies-infectieuses/coronavirus-2019-ncov/
https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/?utm_source=print&utm_medium=print&utm_campaign=coronavirus_2020
https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/situation-coronavirus-quebec/

https://www2.gnb.ca/content/gnb/en/corporate/promo/covid-19/maps_graphs.html
https://www2.gnb.ca/content/gnb/en/departments/ocmoh/cdc/content/respiratory_diseases/coronavirus.html

https://novascotia.ca/coronavirus/#cases
https://novascotia.ca/coronavirus/data/

https://www.princeedwardisland.ca/en/information/health-and-wellness/pei-covid-19-testing-data/

https://covid-19-newfoundland-and-labrador-gnl.hub.arcgis.com/

https://www.gov.nu.ca/health/information/covid-19-novel-coronavirus

https://www.hss.gov.nt.ca/en/services/coronavirus-disease-covid-19

https://yukon.ca/covid-19


