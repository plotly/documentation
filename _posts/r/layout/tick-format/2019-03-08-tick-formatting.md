---
title: Formatting Ticks in R
name: Formatting Ticks
permalink: r/tick-formatting/
description: How to format axes ticks in R.
layout: base
language: r
page_type: example_index
has_thumbnail: false
display_as: layout_opt
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

### Tickmode - Linear


```r
library(plotly)

p <- plot_ly(
  type = "scatter",
  x = c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12), 
  y = c(28.8, 28.5, 37, 56.8, 69.7, 79.7, 78.5, 77.8, 74.1, 62.6, 45.3, 39.9), 
  mode = "markers+lines") %>%
  layout(
    xaxis = list(
      dtick = 0.75, 
      tick0 = 0.5, 
      tickmode = "linear"
  ))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="tickformatting-tickmode-linear")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5614.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Tickmode - Array


```r
library(plotly)

p <- plot_ly(
  type = "scatter",
  x = c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12), 
  y = c(28.8, 28.5, 37, 56.8, 69.7, 79.7, 78.5, 77.8, 74.1, 62.6, 45.3, 39.9), 
  mode = "markers+lines") %>%
  layout(
    xaxis = list(
      ticktext = c("One", "Three", "Five", "Seven", "Nine", "Eleven"), 
      tickvals = c(1, 3, 5, 7, 9, 11),
      tickmode = "array"
  ))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="tickformatting-tickmode-array")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5616.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>


### Using Tickformat


```r
library(plotly)

p <- plot_ly(
  type = "scatter",
  x = c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12), 
  y = c(0.18, 0.38, 0.56, 0.46, 0.59, 0.4, 0.78, 0.77, 0.74, 0.42, 0.45, 0.39), 
  mode = "markers+lines") %>%
  layout(
    yaxis = list(
        tickformat = "%"
  ))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="using-tickformat-attribute")
chart_link
```


<iframe src="https://plot.ly/~RPlotBot/5619.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Using Exponentformat


```r
library(plotly)

p <- plot_ly(
  type = "scatter",
  x = c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12), 
  y = c(68000, 52000, 60000, 20000, 95000, 40000, 60000, 79000, 74000, 42000, 20000, 90000),
  mode = "markers+lines") %>%
  layout(
    yaxis = list(
      showexponent = "all",
      exponentformat = "e"
    )
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="using-exponentformat")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5625.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
