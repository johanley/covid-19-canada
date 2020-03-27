# What problem does this solve?

The problem is *lack of access to good time-series data regarding the covid-19 outbreak in Canada*.

Here's what seems to be happening. 
There are 14 jurisdictions in Canada (provinces, territories, and the federal government).
Health is administered separately by each jurisdiction. 
This leads to silos and difficulty in getting summary data across all jurisdictions.

For the current covid-19 outbreak in Canada, the relevant stats from the government are:

* not easily accessible 
* not in a form that can be immediately put to use in building websites (web API, JSON formats, for instance)
* not available in time-series form; only the current day's data is available

Because of these problems, the good people of the 
<a href='https://github.com/ishaberry/Covid19Canada'>COVID-19 Canada Open Data Working Group</a> of university professionals 
have *manually* gathered together basic time-series stats on the outbreak. 
(Their data is used by the <a href='https://virihealth.com/provincial-trends/'>Virihealth</a> site, for example.)
Each day they laboriously scan authoritative sources on the web, place relevant data in a spreadsheet, and make it publicly available.
They should be applauded for doing so, but they are forced into doing this by the lack of authoritative stats from the government.

# What is the goal of this project?

The goal of this project is to *record the basic history of the covid-19 outbreak in Canada*.

This project is a web site for the collection and open dissemination of that data, by motivated citizens.

Main aspects:

* focused primarily *on the data above all*
* jump-started with data from the <a href='https://github.com/ishaberry/Covid19Canada'>COVID-19 Canada Open Data Working Group</a> mentioned above
* allow data entry over the web into a relational database (instead of a spreadsheet)
* provide access to the data via a web API of some kind (likely implemented with JSON)
* we let other projects focus on building nice looking charts, based on the data provided here
* all this is done for the public good by motivated volunteers, not for monetary gain
 
The data is provided free and open source.
There's absolutely no guarantee of its accuracy. 
It's not appropriate to use this data for other than information purposes.
This web site is not run by the Government of Canada.

It's hoped that this project (or at least parts of it) might be a useful template for those in other countries wanting to create something similar. 
(In particular, its simple database schema is fairly generic, and not specific to Canada.)

# Project status

2020-03-27: Day 2. Initial database design, and an initial data load.

# Data 

The data is provided as *.csv files*.
Such files can be loaded into spreadsheet tools, and into relational databases.
The files are also provided as *SQL scripts*, that create a schema and load the data.

There are 14 jurisdictions in all: 10 provinces, 3 territories, and the federal government.

The main data has 3 parts:

* *basic stats*: time-series of basic stats for each jurisdiction. 
  This data is taken (daily) from official government web sites.
* *timeline*: time-series of news events for each jurisdiction. 
  Expected to be updated daily by site admins (or even more frequently).
* (possibly) *explainer pages*: general background information. 
  Usually not tied to a specific jurisdiction, and updated only occasionally.

The basic stats from each jurisdiction have minor variations. 
Each jurisdiction publishes its own data set, as they see fit.
The exact meaning of things sometimes has subtle differences between jurisdictions.
In addition, sometimes there are abrupt changes in the data, because of changes to definitions and procedures by a given jurisdiction.

The desired core stats (as of a given date-time) are:

* cumulative number of tests performed (regardless of outcome, or whether they've been completed)
* cumulative number of *known cases*, interpreting that to mean *confirmed* AND *probable/presumptive* cases
* cumulative number of recoveries
* cumulative number of deaths

It's important to note that the basic stats provided by jurisdictions *can change schema at any time.*
For example, a jurisdiction can stop reporting *presumptive* cases, because, for technical reasons, it no 
longer makes sense to keep that category. 
This can have ripple effects into the provided data files, which can break code that parses them.

# Implementation 

? To be determined