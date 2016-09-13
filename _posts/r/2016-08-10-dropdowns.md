---
title: Adding Dropdowns with JavaScript | Examples | Plotly
name: Dropdown Events
permalink:
description: How to add dropdowns to Python charts with JavaScript.
layout: base
thumbnail: thumbnail/dropdown.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as:
order: 7
---


# Dropdowns

##### Check out our <b>[reference page](https://plot.ly/r/reference/#layout-shapes)</b> for more information on using shapes!

### Simple Dropdown Menu Example

```r
library(plotly)
library(MASS)

covmat %
  add_markers(marker = list(opacity = 0.3, line = list(color = "black", width = 1)))

p % layout(
  title = "Drop down menus - Plot type",
  xaxis = list(domain = c(0.1, 1)),
  yaxis = list(title = "y"),
  updatemenus = list(
    list(
      y = 0.8,
      buttons = list(

        list(method = "restyle",
             args = list("type", "scatter"),
             label = "Scatter"),

        list(method = "restyle",
             args = list("type", "histogram2d"),
             label = "2D Histogram")))
  ))
```

```
## Error: <text>:4:8: unexpected input
## 3: 
## 4: covmat %
##           ^
```
<iframe src="https://plot.ly/~RPlotBot/3294.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Add Two Dropdown Menus to Restyle Graph

```r
library(plotly)
x %
  add_lines(y = ~y1, name = "A") %&gt;%
  add_lines(y = ~y2, name = "B", visible = F)


p % layout(
  title = "Drop down menus - Styling",
  xaxis = list(domain = c(0.1, 1)),
  yaxis = list(title = "y"),
  updatemenus = list(
    list(
      y = 0.8,
      buttons = list(

        list(method = "restyle",
             args = list("line.color", "blue"),
             label = "Blue"),

        list(method = "restyle",
             args = list("line.color", "red"),
             label = "Red"))),

    list(
      y = 0.7,
      buttons = list(
        list(method = "restyle",
             args = list("visible", list(TRUE, FALSE)),
             label = "Sin"),

        list(method = "restyle",
             args = list("visible", list(FALSE, TRUE)),
             label = "Cos")))
  ))
```

```
## Error: <text>:2:3: unexpected input
## 1: library(plotly)
## 2: x %
##      ^
```
<iframe src="https://plot.ly/~RPlotBot/3297.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
