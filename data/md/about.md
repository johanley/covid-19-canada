# What's reported: daily screen-shots

This is what the various jurisdictions are *reporting* at approximately 21:00 EDT each day.
Data points are linked to a supporting screen-shot of a web page, as of that time (see the exception noted below).

The *table* form of the data links to supporting screen-shots (*csv* and *json* do not):

 |Time series data|Table|CSV|JSON|
 |----|-----|---|---|
 |Known Cases (confirmed and probable/presumptive)|[table](https://github.com/johanley/covid-19-canada/blob/master/data/md/known_cases.md)|[csv](https://github.com/johanley/covid-19-canada/blob/master/data/csv/known_cases.csv) | [json](https://github.com/johanley/covid-19-canada/blob/master/data/json/known_cases.json) |
 |Deaths|[table](https://github.com/johanley/covid-19-canada/blob/master/data/md/deaths.md)|[csv](https://github.com/johanley/covid-19-canada/blob/master/data/csv/deaths.csv)|[json](https://github.com/johanley/covid-19-canada/blob/master/data/json/deaths.json) |
 |Completed Tests|[table](https://github.com/johanley/covid-19-canada/blob/master/data/md/tests.md)|[csv](https://github.com/johanley/covid-19-canada/blob/master/data/csv/tests.csv)|[json](https://github.com/johanley/covid-19-canada/blob/master/data/json/tests.json) |

## Warnings about the data
 
*Warning*: there are gaps in the data. 
If a jurisdiction hasn't updated that day, then it's recorded here as "N" (*not updated*).
The gaps are not filled, and no interpolation is performed.

*Warning*: because of timing issues, the values for the federal jurisdiction often *don't add up* to the sum
of the values from the provinces and territories.

*Warning*: jurisdictions can report *as of* the previous day. ON does that at present. 
(That's likely the most logical way of reporting; otherwise, you are reporting on a day that hasn't completed yet.)
The data presented here is by date-reported.

*Warning*: the reporting may not be very timely. 
For example, if the ultimate source of the data is non-governmental (maybe a private long-term care home), 
it likely takes time for that data to get into government databases.

*Warning*: reported-cases versus actual-cases.
The number of cases reported should be treated with care. 
Not everyone is being tested, and all tests have false-negatives and false-positives. 
In most cases, the number of actual cases (the sum of both detected and undetected cases) is very likely larger than the number reported.
  
*Warning*: what a jurisdiction reports may not accurately reflect other sources.
For example, on 2020-03-31 NL was not reporting any deaths, but other sources were reporting the first death in NL before that date.

*Warning*: clerical errors can get corrected; this can cause cumulative totals to actually *drop* from 
one day to the next (see below).


## Testing data
The testing data is not very consistent across jurisdictions.
There's the question of *the number of people tested* verses *the number of tests performed*.
Those aren't the same statistic, because a person can have more than one test. 

This site is trying to report tests-completed.
But CA, NL, NU, and (I think) QC seem to be reporting only persons-tested.
This means that comparisons between jurisdictions for that data can be "comparing apples to oranges".

Here's exactly what this site is using for tests-completed:

|Jurisdiction|Term used by the jurisdiction|
|------------|---------|
|BC|Total tests|
|AB|Completed tests|
|SK|Total # tests performed|
|MB|# Completed tests|
|ON|Total tests completed|
|QC|Cas négatifs + cas positifs|
|NB|Total tests performed|
|NS|Total positive tests + Total negative tests|
|PE|Total cases + Negative results|
|NL|Total # of people tested|
|NU|PUI now no longer under investigation + Confirmed cases|
|NT|Completed tests|
|YT|Confirmed cases + Negative results|
|CA|numtested (in their .csv file)|

Again, CA, QC, NL, and NU seem to be reporting only on persons-tested, so this data is a mixed bag, unfortunately.



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
