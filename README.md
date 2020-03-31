# What's the problem?

The problem is *lack of fast access to a complete stats regarding the covid-19 outbreak in Canada*.

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

Note that C,D are easier to get than R, T (using the codes defined above). 
R and T are sometimes absent from some record sets.

Note that currently **none** of the provinces/territories share time-series data.
It's only current-day!
 
# Ways of sharing data on the web

* well-formatted .csv files on [github](https://github.com/). Example: a file from [John Hopkins University](https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-30-2020.csv).
Using github is likely the preferred method for most people.
You can use tools like [papaparse](https://www.papaparse.com/) to fetch the data.
* a world-readable, *easily parsed* Google spreadsheet. Example: [my file](https://docs.google.com/spreadsheets/d/1s253rdkFK4E_J5gjbbZyFgaatTBewUk9s-CMFxmrxkc/edit#gid=1626901138) .
You'll need Google's [Sheets API](https://developers.google.com/sheets/api/quickstart/js) to access the data, however.

Having such simple sources of publicly-readable data is a kind of simple, *de facto* web api.
Once the data is in place, programmers can build tools to fetch and parse the data.


## Desired data set

To my mind, the data set I'd prefer is this one (see Saskatchewan below; they come close to this):

* Tests - positive
* Tests - negative
* Tests - pending
* (Cases - confirmed is the same as Test - positive)
* Cases - probable
* Cases - recovered
* Cases - in hospital
* Cases - in intensive care
* Cases - deaths

Points that seem to me to be important, but are overlooked:

### Cases are really *known* cases. 
That's worth repeating, but it may seem pedantic to you.

### A Case can have more than 1 Test!
Tests are a kind of pipeline: Pending -> Result Positive or Negative. 
One human often goes through that pipeline multiple times.
I think there's a natural mistake to assume the number of tests equates to the number of people who've been tested.


# A close look at the source data

    
Here's exactly what's being reported right now (morning of 202-03-31) by the provinces, 
territories, and federal government, from east to west. 
Note:

* differences in language
* the use of technical language, for example *Currently Under Investigation*, whose meaning to the non-expert is far from clear
* differences in what's reported
* the incompleteness of *Recovered* data
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

Currently, there are no stats for *Recovered* and *Tests* on the federal government site, but they are the only Canadian 
jurisdiction to provide a [time-series download](https://health-infobase.canada.ca/src/data/covidLive/covid19.csv).

# Up the food chain
The data "food chain" always starts with various government sources.
In the case of Canada, it starts with provinces and territories.
One food chain:

- Province/Territory web sites
  - [GOC](https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html?topic=tilelink) with [.csv](https://health-infobase.canada.ca/src/data/covidLive/covid19.csv)
    - [John Hopkins University](https://coronavirus.jhu.edu/map.html) with [.csv](https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-30-2020.csv) files on github

In this food chain, the GOC's .csv file has CD, but not TR.
So that data is also missing from the John Hopkins dataset; it too has only C and D (for Canada).

Another food chain:

- Province/Territory web sites
  - [CODWG](https://github.com/ishaberry/Covid19Canada) github .csv files
    - [Virihealth](https://docs.google.com/spreadsheets/d/1C59nxtgcnwGyo6lgypsgN18duxmwWigjeVdKY58t0mU/edit#gid=1268011970) google spreadsheet
    
Here, CODWG has all 4 of TCRD.
Virihealth consumes that data, and summarizes its details. (It also adds some early test case data, as of 2020-03-07; CODWG
began to record TR a bit later, on 2020-03-15). 

# John Hopkins University data

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

This data is easy to understand and parse. It has Cases and Deaths, but no Recovered or Tests.


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

# So? Yet another spreadsheet...
So, I've started to compile the daily basic stats myself, and I'm putting them here:
https://docs.google.com/spreadsheets/d/1s253rdkFK4E_J5gjbbZyFgaatTBewUk9s-CMFxmrxkc/edit#gid=0

The initial data load is from Virihealth's spreadsheet, but I'm now inputting manually into it each day.
