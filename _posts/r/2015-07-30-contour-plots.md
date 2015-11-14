---
title: Contour Plots in R | Examples | Plotly
name: Contour Plots
permalink: r/contour-plots/
description: How to make a contour plot in R. Two examples of contour plots of matrices and 2D distributions.
layout: base
thumbnail: /images/contour.png
language: r
page_type: example_index
has_thumbnail: true
display_as: chart_type
order: 6
---


# Contour Plots


```r
### Basic contour
library(plotly)
plot_ly(z = volcano, type = "contour", filename="r-docs/basic-contour")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/209.embed" width="800" frameBorder="0"></iframe>

### 2D Density Contour Plot


```r
x <- rnorm(200)
y <- rnorm(200)
p1 <- plot_ly(x = x, type = "histogram")
p2 <- plot_ly(x = x, y = y, type = "histogram2dcontour")
p3 <- plot_ly(y = y, type = "histogram", filename="r-docs/subplots")
a1 <- list(domain = c(0, .85))
a2 <- list(domain = c(.85, 1))
subplot(
  layout(p1, xaxis = a1, yaxis = a2),
  layout(p2, xaxis = a1, yaxis = a1),
  layout(p3, xaxis = a2, yaxis = a1)
)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/995.embed" width="800" frameBorder="0"></iframe>
