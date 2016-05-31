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
---


### Setting Axes Labels

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
p <- plot_ly(x = rnorm(10), y = rnorm(10), mode = "markers") %>%
  layout(xaxis = x, yaxis = y)
p
```

<iframe src="https://plot.ly/~RPlotBot/2821" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Setting Axes Labels for 3d Charts


```r
library(plotly)
set.seed(123)

n <- 100
theta <- runif(n,0,2*pi)
u <- runif(n,-1,1)
x <- sqrt(1 - u^2)*cos(theta)
y <- sqrt(1 - u^2)*sin(theta)
z <- u

p <- plot_ly(x = x, y = y, z = z, type = "scatter3d", mode = "markers", color = z) %>% 
  layout(title = "Layout options in a 3d scatter plot",
         scene = list(
           xaxis = list(title = "Cos"), 
           yaxis = list(title = "Sin"), 
           zaxis = list(title = "Z")))
p
```

<iframe src="https://plot.ly/~RPlotBot/2823" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
