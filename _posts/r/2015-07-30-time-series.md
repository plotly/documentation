---
title: Time Series in R | Examples | Plotly
name: Time Series
permalink: r/time-series/
description: How to plot date and time in R. An example of a time series plot with the POSIXct and Sys.Date classes.
layout: base
thumbnail: thumbnail/time-series.jpg
language: r
page_type: example_index
has_thumbnail: false
display_as: chart_type
output:
  html_document:
    keep_md: true
---



### Dates


```r
today <- Sys.Date()
tm <- seq(0, 600, by = 10)
x <- today - tm
y <- rnorm(length(x))
plot_ly(x = ~x, y = ~y, text = paste(tm, "days from today"))
```

```
## Error in eval(expr, envir, enclos): could not find function "plot_ly"
```


```
## Error in eval(expr, envir, enclos): could not find function "plotly_POST"
```

### POSIXlt date time class with timezone


```r
library(plotly)
now_lt <- as.POSIXlt(Sys.time(), tz = "GMT")
tm <- seq(0, 600, by = 10)
x <- now_lt - tm
y <- rnorm(length(x))
plot_ly(x = ~x, y = ~y, text = paste(tm, "seconds from now in GMT"))
```

<iframe src="https://plot.ly/~RPlotBot/3461.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### POSIXct date time class without timezone


```r
now_ct <- as.POSIXct(Sys.time())
tm <- seq(0, 600, by = 10)
x <- now_ct - tm
y <- rnorm(length(x))
plot_ly(x = ~x, y = ~y, text = paste(tm, "seconds from now in", Sys.timezone()))
```

<iframe src="https://plot.ly/~RPlotBot/3463.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
