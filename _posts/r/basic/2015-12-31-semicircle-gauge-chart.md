---
title: R Gauge Charts | Examples | Plotly
name: Gauge Charts
permalink: r/gauge-charts/
description: How to make gauge charts in R with Plotly.
layout: base
thumbnail: thumbnail/gauge.jpg
language: r
has_thumbnail: true
display_as: basic
order: 10
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

##### Outline

We will use `donut` charts with custom colors to create a `semi-circular` gauge meter, such that lower half of the chart is invisible(same color as background).
This `semi-circular` meter will be overlapped on a base donut chart to create the `analog range` of the meter. We will have to rotate the base chart to align the range marks in the edges of meter's section, because by default `Plotly` places them at the center of a pie section.

###### Base Chart (rotated)

To make a `gauge meter` with 5 equally sized sections, we will create 6 sections in the base chart. So that center(position of label) aligns with the edges of each section.


```r
library(plotly)

base_plot <- plot_ly(
  type = "pie",
  values = c(40, 10, 10, 10, 10, 10, 10),
  labels = c("-", "0", "20", "40", "60", "80", "100"),
  rotation = 108,
  direction = "clockwise",
  hole = 0.4,
  textinfo = "label",
  textposition = "outside",
  hoverinfo = "none",
  domain = list(x = c(0, 0.48), y = c(0, 1)),
  marker = list(colors = c('rgb(255, 255, 255)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)')),
  showlegend = FALSE
)
```

##### Meter Chart

Now we will superimpose out `semi-circular` meter on top of this.
For that, we will also use 6 sections, but one of them will be invisible to form the lower half (colored same as the background).


```r
base_plot <- add_trace(
  base_plot,
  type = "pie",
  values = c(50, 10, 10, 10, 10, 10),
  labels = c("Error Log Level Meter", "Debug", "Info", "Warn", "Error", "Fatal"),
  rotation = 90,
  direction = "clockwise",
  hole = 0.3,
  textinfo = "label",
  textposition = "inside",
  hoverinfo = "none",
  domain = list(x = c(0, 0.48), y = c(0, 1)),
  marker = list(colors = c('rgb(255, 255, 255)', 'rgb(232,226,202)', 'rgb(226,210,172)', 'rgb(223,189,139)', 'rgb(223,162,103)', 'rgb(226,126,64)')),
  showlegend= FALSE
)
```

We are using `rotation` and `direction` parameters to start the sections from 3 o'clock `[rotation=90]` instead of the default value of 12 o'clock `[rotation=0]`.

##### Dial

Now we need a `dial` to show the current position in the meter at a particular time.
`Plotly`'s [path shape](https://plot.ly/r/reference/#layout-shapes-path) can be used for this. A nice explanation of `SVG` path is available [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) by Mozilla.
We can use a `filled triangle` to create our `Dial`.


```r
a <- list(
  showticklabels = FALSE,
  autotick = FALSE,
  showgrid = FALSE,
  zeroline = FALSE)

b <- list(
  xref = 'paper',
  yref = 'paper',
  x = 0.23,
  y = 0.45,
  showarrow = FALSE,
  text = '50')

base_chart <- layout(
  base_plot,
  shapes = list(
    list(
      type = 'path',
      path = 'M 0.235 0.5 L 0.24 0.62 L 0.245 0.5 Z',
      xref = 'paper',
      yref = 'paper',
      fillcolor = 'rgba(44, 160, 101, 0.5)'
    )
  ),
  xaxis = a,
  yaxis = a,
  annotations = b
)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(base_chart, filename="gauge-meter-in-r")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/2795.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

For the `filled-triangle`, the first point `(0.235, 0.5)` is left to the center of meter `(0.24, 0.5)`, the second point `(0.24 0.62)` is representing the current position on the `semi-circle` and the third point `(0.245, 0.5)` is just right to the center.

`M` represents the `'Move'` command that moves cursor to a particular point, `L` is the `'Line To'` command and `Z` represents the `'Close Path'` command. This way, this path string makes a triangle with those three points.


