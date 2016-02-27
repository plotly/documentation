---
title: WebGL in Plotly and R| Examples | Plotly
name: WebGL in Plotly and R
permalink: r/webgl-vs-svg-million-points/
description: How to create plots using WebGL and Plotly
layout: user-guide
language: r
page_type: example_index
---
# WebGL in Plotly and R

Now in Ploty you can implement WebGL with `type = "scattergl"` in place of `scatter` for increased speed, improved interactivity, and the ability to plot even more data!


### Compare WebGL and SVG

Checkout this [post](/r/compare-webgl-svg/) for a comparison of WebGL and SVG scatter plots with 75000 data points.

### WebGL with 1 Million points 

```r
library(plotly)

n <- 1000000
x <- rnorm(n)
y <- 2*x + rnorm(n, sd = 5)

p <- plot_ly(x = x, y = y, type = "scattergl", mode = "markers", marker = list(line = list(width = 2)))
p
```

<iframe src="https://plot.ly/~RPlotBot/2865/y-vs-x/" width="900px" height="600px" scrolling="no" seamless="seamless"></iframe>

# Reference
see [scattergl](https://plot.ly/r/reference/#scattergl) for more information. 




