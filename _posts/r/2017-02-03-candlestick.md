---
title: Candlestick Charts in R | Examples | Plotly
name: Candlestick Charts
permalink: r/candlestick-charts/
description: How to create candlestick charts in R.
layout: base
thumbnail: thumbnail/candlestick.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: financial
order: 2
output:
  html_document:
    keep_md: true
---



### New to Plotly?

Plotly's R library is free and open source!<br>
[Get started](https://plot.ly/r/getting-started/) by downloading the client and [reading the primer](https://plot.ly/r/getting-started/).<br>
You can set up Plotly to work in [online](https://plot.ly/r/getting-started/#hosting-graphs-in-your-online-plotly-account) or [offline](https://plot.ly/r/offline/) mode.<br>
We also have a quick-reference [cheatsheet](https://images.plot.ly/plotly-documentation/images/r_cheat_sheet.pdf) (new!) to help you get started!

### Version Check

Version 4 of Plotly's R package is now [available](https://plot.ly/r/getting-started/#installation)!<br>
Check out [this post](http://moderndata.plot.ly/upgrading-to-plotly-4-0-and-above/) for more information on breaking changes and new features available in this version.

```r
library(plotly)
packageVersion('plotly')
```

```
## [1] '4.5.6.9000'
```

### Basic Candlestick


```r
library(plotly)
library(quantmod)

getSymbols("AAPL",src='yahoo')

# basic example of ohlc charts
df <- data.frame(Date=index(AAPL),coredata(AAPL))
df <- tail(df, 30) 

p <- df %>%
  plot_ly(x = ~Date, type="candlestick", 
          open = ~AAPL.Open, close = ~AAPL.Close, 
          high = ~AAPL.High, low = ~AAPL.Low) %>%
  layout(title = "Basic Candlestick Chart")

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="finance/candlestick-basic")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4305.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Customise the Figure with Shapes and Annotations


```r
library(plotly)
library(quantmod)

getSymbols("AAPL",src='yahoo')

df <- data.frame(Date=index(AAPL),coredata(AAPL))

# annotation
a <- list(text = "Stock Split",
          x = '2014-06-06',
          y = 1.02,
          xref = 'x',
          yref = 'paper',
          xanchor = 'left',
          showarrow = FALSE
)

# use shapes to create a line
l <- list(type = line,
          x0 = '2014-06-06',
          x1 = '2014-06-06',
          y0 = 0,
          y1 = 1,
          xref = 'x',
          yref = 'paper',
          line = list(color = 'black',
                      width = 0.5)
)

p <- df %>%
  plot_ly(x = ~Date, type="candlestick", 
          open = ~AAPL.Open, close = ~AAPL.Close, 
          high = ~AAPL.High, low = ~AAPL.Low) %>%
  layout(title = "Apple Stock", 
         annotations = a,
         shapes = l)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="finance/candlestick-custom")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4307.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Custom Candlestick Colors


```r
library(plotly)
library(quantmod)

getSymbols("AAPL",src='yahoo')

# basic example of ohlc charts
df <- data.frame(Date=index(AAPL),coredata(AAPL))
df <- tail(df, 30) 

# cutom colors
i <- list(line = list(color = '#FFD700'))
d <- list(line = list(color = '#0000ff'))

p <- df %>%
  plot_ly(x = ~Date, type="candlestick", 
          open = ~AAPL.Open, close = ~AAPL.Close, 
          high = ~AAPL.High, low = ~AAPL.Low,
          increasing = i, decreasing = d)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="finance/candlestick-colors")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4309.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Candlestick Using Segments


```r
library(plotly)
library(quantmod)

msft <- getSymbols("MSFT", auto.assign = F)
dat <- as.data.frame(msft)
dat$date <- index(msft)
dat <- subset(dat, date >= "2016-01-01")

names(dat) <- sub("^MSFT\\.", "", names(dat))

p <- plot_ly(dat, x = ~date, xend = ~date, color = ~Close > Open, 
             colors = c("red", "forestgreen"), hoverinfo = "none") %>%
       add_segments(y = ~Low, yend = ~High, size = I(1)) %>%
       add_segments(y = ~Open, yend = ~Close, size = I(3)) %>%
       layout(showlegend = FALSE, yaxis = list(title = "Price")) %>%
       rangeslider()

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="finance/candlestick-segments")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4311.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#Reference

See [https://plot.ly/r/reference](https://plot.ly/r/reference) for more information and chart attribute options!
