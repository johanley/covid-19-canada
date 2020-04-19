# What's reported: daily screen-shots

This is what the various jurisdictions are *reporting* at approximately 21:00 EDT each day.
Each and every data point is linked to a supporting screen-shot of a web page, as of that time.
(It's hard to argue with a screen-shot.)

The *table* form of the data links to supporting screen-shots (*csv* does not):

 |Time series data|Table|CSV|JSON|
 |----|-----|---|---|
 |Known Cases (confirmed and probable/presumptive)|[table](https://github.com/johanley/covid-19-canada/blob/master/data/md/known_cases.md)|[csv](https://github.com/johanley/covid-19-canada/blob/master/data/csv/known_cases.csv) | [json](https://github.com/johanley/covid-19-canada/blob/master/data/json/known_cases.json) |
 |Deaths|[table](https://github.com/johanley/covid-19-canada/blob/master/data/md/deaths.md)|[csv](https://github.com/johanley/covid-19-canada/blob/master/data/csv/deaths.csv)|[json](https://github.com/johanley/covid-19-canada/blob/master/data/json/deaths.json) |
 |Completed Tests|[table](https://github.com/johanley/covid-19-canada/blob/master/data/md/tests.md)|[csv](https://github.com/johanley/covid-19-canada/blob/master/data/csv/tests.csv)|[json](https://github.com/johanley/covid-19-canada/blob/master/data/json/tests.json) |
 
If a jurisdiction hasn't updated that day, then it's recorded here as "N" (*not updated*).

If an obvious error has been made in the reporting, then it's recorded here as "E".

*Warning:* the *Completed Tests* data is not very consistent:

- no testing data at all for the CA federal jurisdiction
- NL and NU report on the number of *people* tested, not on the number of *tests*. One person can often have more than one test. 
  In spite of this difference, this dataset treats them as the same.

*Error*: This is my mistake. The completed-test reporting for NB is confusing. They give positive and negative test numbers, 
as do most jurisdictions. But they state that those numbers are attached to *people*, not tests.
This isn't logical, because the positive/negative state of a person can change over time. 
Because of this, I overlooked another screen, in which they report the number of tests-performed.
This mistake was made from 2020-03-31 until 2020-04-16 (inclusive).
I have had to backfill this data for NB, using this [non-governmental data source](https://github.com/ishaberry/Covid19Canada).
The screenshots I have for NB, in this time period, do not support the stated test numbers, because the screenshots 
don't show the proper statistic.
  
*Warning*: what a jurisdiction reports may not accurately reflect other sources.
For example, on 2020-03-31 NL was not reporting any deaths, but other sources were reporting the first death in NL before that date.

*Warning*: jurisdictions can report *as of* the previous day. ON does that at present. 
(That's likely the most logical way of reporting; otherwise, you are reporting on a day that hasn't completed yet.)
The data presented here is by date-reported.

*Warning*: because of timing issues, the values for the federal jurisdiction often don't add up to the sum
of the values from the provinces and territories.

*Error*: the testing data for SK was mis-reported on 2020-04-14. An incorrect value appears in the expected place.
The value of 20,282 completed tests appears near the top of the screenshot, however, and that value is used here.

*Warning*: In BC, the total tests-completed *dropped* from 58,626 (on 2020-04-14) to 57,997 (on 2020-04-15), with no explanation that I can see.

