# What's the problem?

The problem is *lack of fast access to desired data regarding the covid-19 outbreak in Canada*.

Most people want to see summary info related to:

* tests
* cases
* recoveries 
* deaths

for each jurisdiction, both the current day, *and* as a time series.

Here's what seems to be happening. 

# Problem 1.
There are 14 jurisdictions in Canada (provinces, territories, and the federal government).
Health is administered separately by each jurisdiction. 
This leads to silos and difficulty in getting consistent summary data across all jurisdictions.

# Problem 2.
The data made available by the various provinces/territories is current-day only!
If there was ever a time that time-series data was important, it's during an epidemic. 
(The feds have started to provide a .csv file on the web. It has the defect (as of this writing), of 
not including number of tests or recovered cases. 
It's also not layed out in a way that's trivial to parse.)
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

It's interesting to note that having publicly-readable Google spreadsheets is already *de facto* web api.
I originally thought that building a web api around the spreadsheet was needed, but that's *just stupid*: 
Google has excellent tools for talking to Google spreadsheets, from all kinds of contexts, including browsers.
https://developers.google.com/sheets/api/quickstart/js


