# What's been reported (with daily screenshots)

This is what the various jurisdictions are *reporting* at approximately 21:00 EDT each day.
Data points are linked to a supporting screen-shot of a web page, as of that time (see the exception noted below).

The *table* form of the data links to supporting screen-shots (*csv* and *json* do not):

 |Time series data|Table|CSV|JSON|
 |----|-----|---|---|
 |Known Cases (confirmed and probable/presumptive)|[table](https://github.com/johanley/covid-19-canada/blob/master/data/md/known_cases.md)|[csv](https://github.com/johanley/covid-19-canada/blob/master/data/csv/known_cases.csv) | [json](https://github.com/johanley/covid-19-canada/blob/master/data/json/known_cases.json) |
 |Deaths|[table](https://github.com/johanley/covid-19-canada/blob/master/data/md/deaths.md)|[csv](https://github.com/johanley/covid-19-canada/blob/master/data/csv/deaths.csv)|[json](https://github.com/johanley/covid-19-canada/blob/master/data/json/deaths.json) |
 |Completed Tests|[table](https://github.com/johanley/covid-19-canada/blob/master/data/md/tests.md)|[csv](https://github.com/johanley/covid-19-canada/blob/master/data/csv/tests.csv)|[json](https://github.com/johanley/covid-19-canada/blob/master/data/json/tests.json) |

## Warnings about the data
 
*Warning*: there are **gaps** in the data. 
If a jurisdiction hasn't updated that day, then it's recorded here as "N" (*not updated*).
The gaps are not filled, and no interpolation is performed.

*Warning*: because of **timing issues**, the values for the federal jurisdiction often *don't add up* to the sum
of the values from the provinces and territories.

*Warning*: jurisdictions can report **as of** the previous day. ON does that at present. 
(That's likely the most logical way of reporting; otherwise, you are reporting on a day that hasn't completed yet.)
The data presented here is by date-reported.

*Warning*: the reporting **may not be very timely**. 
For example, if the ultimate source of the data is non-governmental (maybe a private long-term care home), 
it likely takes time for that data to get into government databases.

*Warning*: **reported-cases versus actual-cases**.
The number of cases reported should be treated with care. 
Not everyone is being tested, and all tests have false-negatives and false-positives. 
In most cases, the number of actual cases (the sum of both detected and undetected cases) is very likely larger than the number reported.
  
*Warning*: what a jurisdiction reports may not accurately reflect other sources.
For example, on 2020-03-31 NL was not reporting any deaths, but other sources were reporting the first death in NL before that date.

*Warning*: **clerical errors** can get corrected; this can cause cumulative totals to actually *drop* from 
one day to the next (see below).


## Testing data
Unfortunately, **this data is a mixed bag**.
There are 2 basic variations seen in the various jurisdictions:

* the number of *people* tested
* the number of *tests* performed

Some jurisdictions report both of these stats. It's important to note that **a person can have more than one test**. 
I've tried to come up with a uniform data-set from the given data, but it doesn't seem possible.

The preferred data collected by this project is the number of *tests-completed*.
**So, comparing test data *between* jurisdictions is definitely *not* always comparing apples to apples.**
(Technically, since case definitions aren't 100% universal, even comparing case numbers isn't always comparing apples to apples, but it's probably close enough.)

Here's exactly what this site is collecting for tests.

|Jurisdiction|Term(s) used by the jurisdiction|People or Tests|
|------------|---------|---------|
|BC|[Total tests](https://governmentofbc.maps.arcgis.com/home/item.html?id=5c4b4f315bbc4708880fa10153775c4d)|[tests](https://experience.arcgis.com/experience/a6f23959a8b14bfa989e3cda29297ded)|
|AB|Completed tests|[tests](https://www.alberta.ca/covid-19-alberta-data.aspx)|
|SK|Total # tests performed|[tests](https://www.saskatchewan.ca/government/health-care-administration-and-provider-resources/treatment-procedures-and-guidelines/emerging-public-health-issues/2019-novel-coronavirus/cases-and-risk-of-covid-19-in-saskatchewan)|
|MB|Number of tests completed|[tests](https://www.gov.mb.ca/covid19/updates/index.html)|
|ON|Total tests completed|[tests](https://www.ontario.ca/page/2019-novel-coronavirus#section-0)|
|QC|Cas négatifs + cas positifs|[people](https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/?utm_source=print&utm_medium=print&utm_campaign=coronavirus_2020)|
|NB|Total tests performed|[tests](https://www2.gnb.ca/content/gnb/en/corporate/promo/covid-19/maps_graphs.html)|
|NS|Total positive tests + Total negative tests|[people](https://novascotia.ca/coronavirus/data/)|
|PE|Total cases + Negative results|[people](https://www.princeedwardisland.ca/en/information/health-and-wellness/pei-covid-19-testing-data)|
|NL|Total # of people tested|[people](https://covid-19-newfoundland-and-labrador-gnl.hub.arcgis.com/)|
|NU|PUI now no longer under investigation + Confirmed cases|[people](https://www.gov.nu.ca/health/information/covid-19-novel-coronavirus)|
|NT|Completed tests|[tests](https://www.hss.gov.nt.ca/en/services/coronavirus-disease-covid-19)|
|YT|Confirmed cases + Negative results|[people](https://yukon.ca/covid-19)|
|CA|numtested (in their .csv file)|[people](https://health-infobase.canada.ca/src/data/covidLive/covid19.csv)|

I'm not 100% certain that the above is correct.
If you have any insight into this, please let me know by raising an issue on this github project.

The problem in some cases is *ambiguity* and *lack of clear definition* of what exactly is being reported.
(Also, each jurisdictions has their own unique way of reporting.)

QC: the term *cas négatifs* is not used by the CDC. It seems that they are reporting numbers of people, not tests.
In the terms used by the CDC, I think they mean *confirmed case* and *not a case* (or perhaps *persons under investigation*).
Because of the large size of QC, and because per-capita they are having by far the most trouble with the virus, this 
difference should be especially noted.

NS: Their terms are ambiguous. I'm almost certain that, in this context, *test* is really *person/case*. 

PE (and YT): *Total cases* is a count of people, while *Negative results* seems to be a count of people, not test results.
 

## Miscellaneous oddities in the data: 

|Jurisdiction|Date|Item|Comment|
|------------|----|-----|-------|
|BC|2020-04-15|tests completed|dropped in value|
|YT|2020-04-21|tests completed|dropped in value|
|NL|2020-04-22|tests completed|dropped in value|
|YT|2020-04-22|tests completed|dropped in value|

*Error*: the testing data for SK was mis-reported on 2020-04-14. An incorrect value appears in the expected place.
The value of 20,282 completed tests appears near the top of the screenshot, however, and that value is used here.

*Error*: This is my mistake. The completed-test reporting for NB is confusing. 
They give positive and negative test numbers, as do most jurisdictions. 
But they state that those numbers are attached to *people*, not tests.
Because of this, I overlooked another screen, in which they report the number of tests-performed.
This mistake was made from 2020-03-31 until 2020-04-16 (inclusive).
I have had to backfill this data for NB, using this [non-governmental data source](https://github.com/ishaberry/Covid19Canada) and 
from [virihealth.com](https://virihealth.com/).
The screenshots I have for NB, in this time period, do not support the stated test numbers, because the screenshots 
don't show the proper statistic.




## Understanding the terms used

Like any subject, epidemiology has its own set of terms.
You need to understand those terms in order to understand government websites.

The [CDC in the US](https://www.cdc.gov/csels/dsepd/ss1978/lesson1/section5.html) has 
a simple introduction to the subject which can help you with this. 
The quotes below are from that guide.


### Case

*"A case definition is a set of standard criteria for classifying whether a 
person has a particular disease, syndrome, or other health condition."*

A **case definition** has:
* clinical criteria (always)
* restrictions on person, place, time (sometimes)

The definition of a case:
* is specific to the target disease
* can change over time (the checklist of symptoms, for example)
* can differ between jurisdictions

A *case definition* often has various categories. Common values are:
* **Probable**: no test, but good clinical evidence of the illness
* **Suspected**: not tested yet, but there's reason to investigate 
* **Presumptive**: positive test at a non-reference lab, awaiting confirmation by a reference lab
* **Confirmed**: confirmed by a test at a reference lab (see below)

Note: **a person with no symptoms who tests positive is considered a case**.
You don't have to be sick in order to be considered a case.
(That's important, because a significant number of people infected with COVID-19 show no symptoms.)

Note that *probable cases* don't involve a test at all.
It's not necessary that a *probable* case changes into a *confirmed* one.
If a test is not necessary, then the case will never reach the *confirmed* status.
(Do you really need a test if you have the same symptoms as three of your family members, who are already confirmed cases?)

There's another common category called **Person under investigation (PUI)**.
This is kind of a "pre-case". 
The person has a test pending, or a test ordered for the future. 
For example, this may be a health worker who shows no symptoms, and who's being tested for safety reasons.
If such a person tests negative, the CDC would call that **Not a case**, because they aren't sick and have no apparent infection.
If a health worker has many tests, all negative, then they remain a PUI the whole time.


### Reference Labs

A reference lab is an "official" lab whose test results are known to be of high quality.
A non-reference lab is a lab whose expertise in a particular test has yet to be certified as robust.
A non-reference lab can change quickly into a reference lab.

It's a *specimen* that gets sent to a lab.
One specimen can be used for more than one kind of test; and it may be sent to more than one lab.

### Quotes from the CDC

*"A case might be classified as suspected or probable while waiting for the laboratory results to become available. 
Once the laboratory provides the report, the case can be reclassified as either confirmed or "not a case", depending 
on the laboratory results. In the midst of a large outbreak of a disease caused by a known agent, some cases may be 
permanently classified as suspected or probable because officials may feel that running laboratory tests on every 
patient with a consistent clinical picture and a history of exposure (e.g., chickenpox) is unnecessary and even wasteful.
Case definitions should not rely on laboratory culture results alone, since organisms are sometimes present without 
causing disease."*


*"Classifications such as confirmed-probable-possible are helpful because they provide 
flexibility to the investigators. A case might be temporarily classified as probable or 
possible while laboratory results are pending. Alternatively, a case may be permanently 
classified as probable or possible if the patient’s physician decided not to order the 
confirmatory laboratory test because the test is expensive, difficult to obtain, or unnecessary....
Note that while this approach is typical in the United States, some countries prefer to acquire 
laboratory samples from every affected person, and only those with a positive laboratory test are counted 
as true cases."*


*"A case definition is a tool for classifying someone as having or not having the disease 
of interest, but few case definitions are 100% accurate in their classifications. 
Some persons with mild illness may be missed, and some persons with a similar but not 
identical illness may be included. Generally, epidemiologists strive to ensure that a 
case definition includes most if not all of the actual cases, but very few or no 
false-positive cases. However, this ideal is not always met. For example, 
case definitions often miss infected people who have mild or no symptoms, because 
they have little reason to be tested."*

In the case of COVID-19, a significant fraction of those infected have no symptoms, or very mild symptoms. 
It would seem very likely, therefore, that the reported number of cases is significantly smaller than the actual 
number of cases.

### Examples of case definitions

These sometimes don't match up 100%.
So, technically, when you compare such jurisdictions, you aren't comparing apples to apples.

* [CDC](https://www.cdc.gov/coronavirus/2019-ncov/downloads/pui-form.pdf)
* [Canada](https://www.canada.ca/content/dam/phac-aspc/documents/services/diseases/2019-novel-coronavirus-infection/health-professionals/2019-nCoV-case-report-form-en.pdf)
* [Canada](https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/health-professionals/national-case-definition.html)
* [AB](https://open.alberta.ca/dataset/a86d7a85-ce89-4e1c-9ec6-d1179674988f/resource/04d14c71-83a7-45bc-a2a7-c0dcff34ff34/download/covid-19-guideline-2020-04-11.pdf)
* [ON](http://www.health.gov.on.ca/en/pro/programs/publichealth/coronavirus/docs/2019_case_definition.pdf)
* [QC](https://msss.gouv.qc.ca/professionnels/documents/coronavirus-2019-ncov/definition-nosologique-COVID-19-020-04-08.pdf)
* [NS](https://novascotia.ca/dhw/populationhealth/surveillanceguidelines/2019-Novel-Coronavirus-Surveillance-Guidelines.pdf)
* [PE](https://www.princeedwardisland.ca/sites/default/files/publications/20200311_guideline_covid-19_final.pdf)
