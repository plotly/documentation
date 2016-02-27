---
title: WebGL vs SVG| Examples | Plotly
name: WebGL vs SVG in R
permalink: r/compare-webgl-svg/
description: Compare WebGL and SVG in R
layout: user-guide
language: r
page_type: example_index
---
# Compare WebGL and SVG in R

### Scatterplots with 75000 random points

### WebGL

```r
library(plotly)

n <- 75000
x <- rnorm(n)
y <- 2*x + rnorm(n, sd = 5)

p <- plot_ly(x = x, y = y, type = "scattergl", mode = "markers", marker = list(line = list(width = 2)))
p
```

<iframe src="https://plot.ly/~RPlotBot/2869"width="950" height="600px" scrolling="no" seamless="seamless"></iframe>

### SVG 
> The draw time for this plot will be slow for all clients.


```r
library(plotly)

n <- 75000
x <- rnorm(n)
y <- 2*x + rnorm(n, sd = 5)

p <- plot_ly(x = x, y = y, type = "scatter", mode = "markers", marker = list(line = list(width = 2)))
p
```

<iframe src="https://plot.ly/~RPlotBot/2871/y-vs-x/" width="950px" height="600px" scrolling="no" seamless="seamless"></iframe>

# References
See below for more information:

- [scattergl](https://plot.ly/r/reference/#scattergl)  
- [scatter](https://plot.ly/r/reference/#scatter)
