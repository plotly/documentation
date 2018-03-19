---
title: Carpet Scatter Plots in R | Examples | Plotly
name: Carpet Scatter Plot
permalink: r/carpet-scatter/
description: How to create carpet plots in R with Plotly.
layout: base
thumbnail: thumbnail/scattercarpet.jpg
language: r
has_thumbnail: true
display_as: scientific
order: 16
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
## [1] '4.7.0'
```

### Basic Carpet Plot


```r
library(plotly)

p <- plot_ly(
    type = 'carpet',
    a = c(4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 6, 6, 6),
    b = c(1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3),
    y = c(2, 3.5, 4, 3, 4.5, 5, 5.5, 6.5, 7.5, 8, 8.5, 10),
    aaxis = list(
      tickprefix = 'a = ',
      ticksuffix = 'm',
      smoothing = 1,
      minorgridcount = 9
      ),
    baxis = list(
      tickprefix = 'b = ',
      ticksuffix = 'Pa',
      smoothing = 1,
      minorgridcount = 9
      )
    )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="scattercarpet-basic", sharing = 'public')
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4531.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Add Carpet Scatter Trace


```r
library(plotly)

p <- plot_ly(
    type = 'carpet',
    a = c(4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 6, 6, 6),
    b = c(1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3),
    y = c(2, 3.5, 4, 3, 4.5, 5, 5.5, 6.5, 7.5, 8, 8.5, 10),
    aaxis = list(
      tickprefix = 'a = ',
      ticksuffix = 'm',
      smoothing = 1,
      minorgridcount = 9
      ),
    baxis = list(
      tickprefix = 'b = ',
      ticksuffix = 'Pa',
      smoothing = 1,
      minorgridcount = 9
      )
    ) %>%
  add_trace(
    type = 'scattercarpet',
    a = c(4, 4.5, 5, 6),
    b = c(2.5, 2.5, 2.5, 2.5),
    line = list(
      shape = 'spline',
      smoothing = 1,
      color = 'blue'
    ),
    marker = list(color = "blue")
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="scattercarpet-add-scattercarpet", sharing = 'public')
```

```
## Error: Client error: (400) Bad Request
## 	Figure field is invalid. Reason: Raw data arrays are not allowed at this endpoint. Use grid references instead. Raw data found at the following paths in the figure [('data', 1, u'y')]
```

```r
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4531.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>


### Adding Multiple Traces


```r
library(plotly)

p <- plot_ly() %>%
  add_trace(
    type = 'carpet',
    a = c(4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 6, 6, 6),
    b = c(1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3),
    y = c(2, 3.5, 4, 3, 4.5, 5, 5.5, 6.5, 7.5, 8, 8.5, 10),
    aaxis = list(
      tickprefix = 'a = ',
      ticksuffix = 'm',
      smoothing = 1,
      minorgridcount = 9
    ),
    baxis = list(
      tickprefix = 'b = ',
      ticksuffix = 'Pa',
      smoothing = 1,
      minorgridcount = 9
    )
  ) %>%
  add_trace(
    type = 'scattercarpet',
    a = c(4, 4.5, 5, 6),
    b = c(2.5, 2.5, 2.5, 2.5),
    mode = 'markers+lines',
    line = list(
      shape = 'spline',
      smoothing = 1,
      color = "blue"
    ),
    marker = list(color = "blue")
  ) %>%
  add_trace(
    type = 'scattercarpet',
    a = c(4, 4.5, 5, 6),
    b = c(1.5, 1.5, 1.5, 1.5),
    mode = 'lines',
    line = list(
      shape = 'spline',
      smoothing = 1,
      color = "green"
    )
  ) %>%
  add_trace(
    type = 'scattercarpet',
    a = c(5, 5, 5, 5),
    b = c(1, 1.5, 2, 3),
    mode = 'markers',
    marker = list(
      color = "red",
      size = c(0,0,20,0)
    )
  ) %>%
  add_trace(
    type = 'scattercarpet',
    a = c(4.5, 4.5, 4.5, 4.5),
    b = c(1, 1.5, 2, 3),
    mode = 'markers',
    marker = list(
      color = "black",
      size = c(0,0,30,0)
    )
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="scattercarpet-advanced", sharing = 'public')
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4569.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#Reference

See [https://plot.ly/r/reference/#scattercarpet](https://plot.ly/r/reference/#scattercarpet) for more information and options!
