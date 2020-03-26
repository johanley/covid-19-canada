# About
Basic stats and news feeds for the various jurisdictions in Canada, regarding the covid-19 outbreak.

This project was begun out of frustration with government data sources.
Government web pages state the current value of stats, but has no easy way of getting at **consolidated time-series data in a convenient form**.

Projects on github using similar data:

 * https://github.com/wzmli/COVID19-Canada
 * https://github.com/ishaberry/Covid19Canada
 
Core values of the project, to act as guidelines:

* existing solely for the public good
* high data quality
* and authoritative sources 
* no advertisements or monetary aspect

The data is provided *free and open source*.
There's absolutely no guarantee of its accuracy. 
It's not appropriate to use this data for other than information purposes.

It's hoped that this project (or at least parts of it) might be a useful template for those in other countries wanting to create something similar. 
(In particular, its simple database schema is fairly generic, and not specific to Canada.)

# Project status

2020-03-26: Day one. Looking for help!

# Data 

The data is provided as *.csv files*.
Such files can be loaded into spreadsheet tools, and into relational databases.
The files are also provided as *SQL scripts*, that create a schema and load the data.

There are 14 jurisdictions in all: 10 provinces, 3 territories, and the federal government.

The main data has 3 parts:

* *basic stats*: time-series of basic stats for each jurisdiction. This is the most important content.
  This data is taken (daily) from official government web sites.
* *news feed*: time-series of news events (timeline or newsfeed) for each jurisdiction. 
  Expected to be updated daily by site admins (or even more frequently).
* *explainer pages*: general background information. 
  Usually not tied to a specific jurisdiction, and updated only occasionally.

The basic stats from each jurisdiction have minor variations. 
Each jurisdiction publishes its own data set, as they see fit.
The exact meaning of things sometimes has subtle differences between jurisdictions.

It's important to note that the basic stats provided by jurisdictions *can change its schema at any time.*
For example, a jurisdiction can stop reporting *presumptive* cases, because, for technical reasons, it no 
longer makes sense to keep that category. 
This can have ripple effects into the provided data files, which can break code that parses them.

The site has an *admin* interface, not visible to the public, for updating the database.

# Implementation 

This project uses:

* UTF-8 encoding for all files 
* a simple relational database to store the basic stats and news feed (not very complicated)
* Java, servlets, and Java Server Pages
* JSON, Javascript, and CSS 
* the website is implemented in English only, at least initially (sorry about that!)

Some design ideas valued here:

* simplicity
* speed of implementation
* not relying on too much guru-level code (hard to maintain when the guru leaves the project)
* attractive charts
* using validators for HTML and CSS
* responsive design
