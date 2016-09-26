---
title: Axes Labels in R
name: Axes Labels
permalink: r/figure-labels
description: How to set the title and axis-titles in R
layout: base
thumbnail: figure-labels.jpg
language: r
page_type: example_index
has_thumbnail: false
display_as: layout_opt
output:
  html_document:
    keep_md: true
---



#### Figure Labels for 2D Charts

```r
library(plotly)
f <- list(
  family = "Courier New, monospace",
  size = 18,
  color = "#7f7f7f"
)
x <- list(
  title = "x Axis",
  titlefont = f
)
y <- list(
  title = "y Axis",
  titlefont = f
)
plot_ly(x = ~rnorm(10), y = ~rnorm(10), mode = "markers") %>%
  layout(xaxis = x, yaxis = y)
```

<iframe src="https://plot.ly/~RPlotBot/2817.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Figure Labels for 3D Charts


```r
library(plotly)
set.seed(123)

n <- 100
theta <- runif(n, 0, 2*pi)
u <- runif(n, -1, 1)

plot_ly(x = ~sqrt(1 - u^2) * cos(theta), y = ~sqrt(1 - u^2) * sin(theta), z = ~u) %>%
  layout(
    title = "Layout options in a 3d scatter plot",
    scene = list(
      xaxis = list(title = "Cos"),
      yaxis = list(title = "Sin"),
      zaxis = list(title = "Z")
    ))
```

<iframe src="https://plot.ly/~RPlotBot/2814.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
