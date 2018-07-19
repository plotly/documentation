---
title: Streamtube Plots in R Graphs | Plotly
name: Streamtube Plots in R Graphs
permalink: r/streamtube-plot/
description: How to create streamtube plots with Plotly.
layout: base
thumbnail: thumbnail/streamtube.jpg
language: r
has_thumbnail: true
display_as: 3d_charts
order: 19
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
## [1] '4.8.0'
```


#### Introduction

In streamtube plots, attributes inlcude `x`, `y`, and `z`, which set the coorindates of the vector field, and `u`, `v`, and `w`, which sets the x, y, and z components of the vector field. Additionally, you can use `starts` to determine the streamtube's starting position. Lastly, `maxdisplayed` determines the maximum segments displayed in a streamtube.  

#### Basic Streamtube Plot


```r
library(plotly)

p <- df %>%
  plot_ly(
    type = 'streamtube',
    x = c(0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2),
    y = c(0, 0, 0, 1, 1, 1, 2, 2, 2, 0, 0, 0, 1, 1, 1, 2, 2, 2, 0, 0, 0, 1, 1, 1, 2, 2, 2),
    z = c(0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2),
    u = c(1,1,1,1,1,1,1,1,1,1.8414709848078965,1.8414709848078965,1.8414709848078965,1.8414709848078965,
          1.8414709848078965,1.8414709848078965,1.8414709848078965,1.8414709848078965,1.8414709848078965,1.9092974268256817,
          1.9092974268256817,1.9092974268256817,1.9092974268256817,1.9092974268256817,1.9092974268256817,
          1.9092974268256817,1.9092974268256817,1.9092974268256817),
    v = c(1,1,1,0.5403023058681398,0.5403023058681398,0.5403023058681398,-0.4161468365471424,-0.4161468365471424,
          -0.4161468365471424,1,1,1,0.5403023058681398,0.5403023058681398,0.5403023058681398,-0.4161468365471424,
          -0.4161468365471424,-0.4161468365471424,1,1,1,0.5403023058681398,0.5403023058681398,0.5403023058681398,
          -0.4161468365471424,-0.4161468365471424,-0.4161468365471424),
    w = c(0,0.08865606199840186,0.1693927420185106,0,0.08865606199840186,0.1693927420185106,0,
          0.08865606199840186,0.1693927420185106,0,0.08865606199840186,0.1693927420185106,0,0.08865606199840186,
          0.1693927420185106,0,0.08865606199840186,0.1693927420185106,0,0.08865606199840186,0.1693927420185106,
          0,0.08865606199840186,0.1693927420185106,0,0.08865606199840186,0.1693927420185106),
    sizeref = 0.5,
    cmin = 0,
    cmax = 3
  ) %>%
  layout(
    scene = list(
      camera = list(
        eye = list(
          x = -0.7243612458865182,
          y = 1.9269804254717962,
          z = 0.6704828299861716
        )
      )
    )
  )
```

```
## Error: First argument, `data`, must be a data frame or shared data.
```

```r
# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="streamtube-basic")
```

```
## Error in api_create(p, filename = "streamtube-basic"): object 'p' not found
```

```r
chart_link
```

```
## Error in eval(expr, envir, enclos): object 'chart_link' not found
```


```
## Error in eval(expr, envir, enclos): object 'chart_link' not found
```

#### Starting Position and Segments


```r
library(plotly)

df = read.csv('https://raw.githubusercontent.com/bcdunbar/datasets/master/streamtube-wind.csv')

p <- df %>%
  plot_ly(
    type = 'streamtube',
    x = ~x,
    y = ~y,
    z = ~z,
    u = ~u,
    v = ~v,
    w = ~z,
    starts = list(
      x = rep(80, 16),
      y = rep(c(20,30,40,50), 4),
      z = c(rep(0,4),rep(5,4),rep(10,4),rep(15,4))
    ),
    sizeref = 0.3,
    showscale = F,
    maxdisplayed = 3000
  ) %>%
  layout(
    scene = list(
      aspectratio = list(
        x = 2,
        y = 1,
        z = 0.3
      )
    ),
    margin = list(
      t = 20, b = 20, l = 20, r = 20
    )
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="streamtube-advanced")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5449.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>


#### Reference

See our [reference page](https://plot.ly/r/reference/) for more information and chart attribute options!.
