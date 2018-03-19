---
title: OHLC Charts in R | Examples | Plotly
name: OHLC Charts
permalink: r/ohlc-charts/
description: How to create OHLC charts in R.
layout: base
thumbnail: thumbnail/ohlc.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: financial
order: 3
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
## [1] '4.7.1.9000'
```

### Basic OHLC Chart


```r
library(plotly)
library(quantmod)

getSymbols("AAPL",src='yahoo')

df <- data.frame(Date=index(AAPL),coredata(AAPL))
df <- tail(df, 30)

p <- df %>%
  plot_ly(x = ~Date, type="ohlc",
          open = ~AAPL.Open, close = ~AAPL.Close,
          high = ~AAPL.High, low = ~AAPL.Low) %>%
  layout(title = "Basic OHLC Chart")

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="finance-ohlc-basic")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4299.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### OHLC Chart without Rangeslider


```r
library(plotly)
library(quantmod)

getSymbols("AAPL",src='yahoo')

df <- data.frame(Date=index(AAPL),coredata(AAPL))
df <- tail(df, 30)

p <- df %>%
  plot_ly(x = ~Date, type="ohlc",
          open = ~AAPL.Open, close = ~AAPL.Close,
          high = ~AAPL.High, low = ~AAPL.Low) %>%
  layout(title = "Basic OHLC Chart",
         xaxis = list(rangeslider = list(visible = F)))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="finance-ohlc-rangeslider")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5218.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

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
  plot_ly(x = ~Date, type="ohlc",
          open = ~AAPL.Open, close = ~AAPL.Close,
          high = ~AAPL.High, low = ~AAPL.Low) %>%
  layout(title = "Custom Colors",
         annotations = a,
         shapes = l)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="finance-ohlc-shapes-annot")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4301.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Custom OHLC Chart Colors


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
  plot_ly(x = ~Date, type="ohlc",
          open = ~AAPL.Open, close = ~AAPL.Close,
          high = ~AAPL.High, low = ~AAPL.Low,
          increasing = i, decreasing = d)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="finance-ohlc-colors")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4303.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#Reference

See [https://plot.ly/r/reference/#ohlc](https://plot.ly/r/reference/#ohlc) for more information and chart attribute options!
