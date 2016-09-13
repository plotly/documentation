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
---



# Time Series Plots in R


```r
# POSIXlt date time class with timezone
library(plotly)
now_lt <- as.POSIXlt(Sys.time(), tz = "GMT")
tm <- seq(0, 600, by = 10)
x <- now_lt - tm
y <- rnorm(length(x))
plot_ly(x = ~x, y = ~y, text = paste(tm, "seconds from now in GMT"))
```

![plot of chunk unnamed-chunk-2](figure/unnamed-chunk-2-1.png)

### POSIXct date time class without timezone


```r
now_ct <- as.POSIXct(Sys.time())
tm <- seq(0, 600, by = 10)
x <- now_ct - tm
y <- rnorm(length(x))
plot_ly(x = ~x, y = ~y, text = paste(tm, "seconds from now in", Sys.timezone()))
```

![plot of chunk unnamed-chunk-3](figure/unnamed-chunk-3-1.png)

### Dates


```r
today <- Sys.Date()
tm <- seq(0, 600, by = 10)
x <- today - tm
y <- rnorm(length(x))
plot_ly(x = ~x, y = ~y, text = paste(tm, "days from today"))
```

![plot of chunk unnamed-chunk-4](figure/unnamed-chunk-4-1.png)
