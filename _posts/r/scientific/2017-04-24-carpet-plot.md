---
title: Carpet Plots in R | Examples | Plotly
name: Carpet Plot
permalink: r/carpet-plot/
description: How to create carpet plots in R with Plotly.
layout: base
thumbnail: thumbnail/carpet.jpg
language: r
has_thumbnail: true
display_as: scientific
order: 15
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
## [1] '4.7.1'
```

### Set the Coordinates 

To set the `x` and `y` coordinates use `x` and `y` attributes. If `x` coorindate values are ommitted a cheater plot will be created.


```r
library(plotly)

p <- plot_ly(
    type = 'carpet',
    y = c(2, 3.5, 4, 3, 4.5, 5, 5.5, 6.5, 7.5, 8, 8.5, 10))
```

### Add Parameter Values

To save parameter values use `a` and `b` attributes.


```r
library(plotly)

p <- plot_ly(
    type = 'carpet',
    a = c(4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 6, 6, 6),
    b = c(1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3),
    y = c(2, 3.5, 4, 3, 4.5, 5, 5.5, 6.5, 7.5, 8, 8.5, 10))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="carpet-add-values", sharing = 'public')
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4557.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Add Carpet Axes

Use `aaxis` or `baxis` lists to make changes to the axes. For a more detailed list of attributes refer to [R reference](https://plot.ly/r/reference/#carpet-aaxis).


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
chart_link = api_create(p, filename="carpet-axes", sharing = 'public')
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4559.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Style Carpet Axes


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
    minorgridcount = 9,
    minorgridwidth = 0.6,
    minorgridcolor = 'white',
    gridcolor = 'white',
    color = 'white'
  ),
  baxis = list(
    tickprefix = 'b = ',
    ticksuffix = 'Pa',
    smoothing = 1,
    minorgridcount = 9,
    minorgridwidth = 0.6,
    gridcolor = 'white',
    minorgridcolor = 'white',
    color = 'white'
  )
) %>%
  layout(
    plot_bgcolor = 'black', paper_bgcolor = 'black',
    xaxis = list(showgrid = F, showticklabels = F),
    yaxis = list(showgrid = F, showticklabels = F)
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="carpet-styled", sharing = 'public')
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4561.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Add Points and Contours

To add points and lines to see [Carpet Scatter Plots](https://plot.ly/r/carpet-scatter) or to add contours see [Carpet Contour Plots](https://plot.ly/r/carpet-contour)

### Reference

See [https://plot.ly/r/reference/#carpet](https://plot.ly/r/reference/#carpet) for more information and options!
