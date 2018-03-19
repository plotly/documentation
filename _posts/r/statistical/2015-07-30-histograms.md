---
title: Histograms in R | Examples | Plotly
name: Histograms
permalink: r/histograms/
description: How to make a histogram in R.
layout: base
thumbnail: thumbnail/histogram.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: statistical
order: 4
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

#### Basic Histogram


```r
library(plotly)
p <- plot_ly(x = ~rnorm(50), type = "histogram")

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="histogram-basic")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5090.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Normalized Histogram


```r
library(plotly)
p <- plot_ly(x = ~rnorm(50),
             type = "histogram",
             histnorm = "probability")

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="histogram-norm")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5092.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Specify Binning Function


```r
library(plotly)

x = c("Apples","Apples","Apples","Organges", "Bananas")
y = c("5","10","3","10","5")

p <- plot_ly(y=y, x=x, histfunc='sum', type = "histogram") %>%
  layout(yaxis=list(type='linear'))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="histogram-histfunc")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5278.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Horizontal Histogram


```r
library(plotly)
p <- plot_ly(y = ~rnorm(50), type = "histogram")

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="histogram-horizontal")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5094.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Overlaid Histograms


```r
p <- plot_ly(alpha = 0.6) %>%
  add_histogram(x = ~rnorm(500)) %>%
  add_histogram(x = ~rnorm(500) + 1) %>%
  layout(barmode = "overlay")

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="histogram-overlay")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5096.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Stacked Histograms


```r
p <- plot_ly(alpha = 0.6) %>%
  add_histogram(x = ~rnorm(500)) %>%
  add_histogram(x = ~rnorm(500) + 1) %>%
  layout(barmode = "overlay")

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="histogram-stack")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5098.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Cumulative Histogram


```r
library(plotly)
p <- plot_ly(x = ~rnorm(50),
             type = "histogram",
             cumulative = list(enabled=TRUE))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="histogram-cumulative")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5100.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Reference

See [https://plot.ly/r/reference/#histogram](https://plot.ly/r/reference/#histogram) for more information and chart attribute options!
