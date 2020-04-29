# COVID-19 stats reported by Canadian governments

These 4 data sets, all starting as of 2020-03-31:

* deaths (cumulative)
* known cases, both confirmed and probable/presumptive (cumulative)
* tests completed (cumulative)
* hospitalized patients (*not* cumulative, current day only)

For QC, NL, and NU the number of *tests completed* is not available. 
Instead, those jurisdictions report the number of *people tested*.
That's a lower number, since people can get tested more than once.

Details about the source data are [here](https://github.com/johanley/covid-19-canada/blob/master/data/md/about.md).

## Recommended tables and charts

Most people would prefer to view the data in this project 
using [this github-pages site](https://johanley.github.io/covid-19-canada/index.html).

(The main tool used to generate the above charts is an excellent tool called [plotly.js](https://plotly.com/javascript/).)

## Basic tables and charts 

In these basic tables and charts for the various jurisdictions, the nominal values always **link directly to the screenshot** from which the data-point originates.

* [Summary](https://github.com/johanley/covid-19-canada/blob/master/data/md/summary.md)
* [BC](https://github.com/johanley/covid-19-canada/blob/master/data/md/bc.md)
* [AB](https://github.com/johanley/covid-19-canada/blob/master/data/md/ab.md)
* [SK](https://github.com/johanley/covid-19-canada/blob/master/data/md/sk.md)
* [MB](https://github.com/johanley/covid-19-canada/blob/master/data/md/mb.md)
* [ON](https://github.com/johanley/covid-19-canada/blob/master/data/md/on.md)
* [QC](https://github.com/johanley/covid-19-canada/blob/master/data/md/qc.md)
* [NB](https://github.com/johanley/covid-19-canada/blob/master/data/md/nb.md)
* [NS](https://github.com/johanley/covid-19-canada/blob/master/data/md/ns.md)
* [PE](https://github.com/johanley/covid-19-canada/blob/master/data/md/pe.md)
* [NL](https://github.com/johanley/covid-19-canada/blob/master/data/md/nl.md)
* [NU](https://github.com/johanley/covid-19-canada/blob/master/data/md/nu.md)
* [NT](https://github.com/johanley/covid-19-canada/blob/master/data/md/nt.md)
* [YT](https://github.com/johanley/covid-19-canada/blob/master/data/md/yt.md)
* [CA](https://github.com/johanley/covid-19-canada/blob/master/data/md/ca.md)

**Warning**: the bar charts presented here don't render well (they max out) when the screen width is small.
If you see a problem, try using landscape instead of portrait.

## Other info

The source of these stats are [screenshots](https://github.com/johanley/covid-19-canada/tree/master/data/screenshots) of 
various government web pages.
The screenshots are taken at about 21:00 ADT each day (after the update from BC).

If a jurisdiction hasn't updated that day, then it's recorded here as "N" (*not updated*).

Recording the actual screenshots is in imitation of [this project in the US](https://github.com/COVID19Tracking).
Screenshots are more robust than relying on archive.org's Way Back Machine.

The raw data is stored in simple [csv files](https://github.com/johanley/covid-19-canada/tree/master/data/csv).
The data is also available in the [json](https://github.com/johanley/covid-19-canada/tree/master/data/json) format.
These basic tables are charts are generated by scripts using the .csv files as the sole data source.
(They are simply generated as markdown, and posted to this github repository.)

## Daily tasks

The daily tasks needed to maintain the data are done at the end of the day, after 
all jurisdictions have updated:

* create a new directory in the *data/screenshots* directory
* follow the naming convention for the dir name: for example *2020-04-26_21h15mADT* (the underscore is needed!)
* save screenshots of the various government web pages in that directory
* manually edit the .csv files in the *data/csv* directory to reflect the day's numbers; these .csv files form the database
* if a jurisdiction has not had an update for that day, then an 'N' is recorded for that day (no update)
* run the script named *MarkdownScript* to generate markdown files from the new data
* push the files onto the github repo
* verify the data, usually using the links on [this page](https://github.com/johanley/covid-19-canada/blob/master/data/md/about.md) to browse the new data
* if any errors, apply corrections
* run the script named *HtmlScript* to generate content for the github pages associated with this project
* push the files onto the github repo

This process takes about 30-45 minutes.