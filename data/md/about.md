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
- NL, NB, and NU report on the number of *people* tested, not on the number of *tests*. One person can often have more than one test. 
  In spite of this difference, this dataset treats them as the same.

*Warning*: what a jurisdiction reports may not accurately reflect other sources.
For example, on 2020-03-31 NL was not reporting any deaths, but other sources were reporting the first death in NL before that date.

*Warning*: jurisdictions can report *as of* the previous day. ON does that at present. 
(That's likely the most logical way of reporting; otherwise, you are reporting on a day that hasn't completed yet.)
The data presented here is by date-reported.

*Warning*: because of timing issues, the values for the federal jurisdiction often don't add up to the sum
of the values from the provinces and territories.

*Error*: the testing data for SK is almost certainly erroneous on 2020-04-14. I have recorded it as 'E', for error.

*Warning*: In BC, the total tests-completed *dropped* from 58,626 (on 2020-04-14) to 57,997 (on 2020-04-15).