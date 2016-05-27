---
title: 2D Histograms in R | Examples | Plotly
name: 2D Histograms
permalink: r/2D-Histogram/
description: How to make a 2D histogram in R. A 2D histogram is a visualization of a bivariate distribution.
layout: base
thumbnail: thumbnail/histogram2d.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: statistical
plottype: histogram
order: 4
---


# 2D Histogram in R


```r
# install.packages('mvtnorm')
library(plotly)
s <- matrix(c(1, -.75, -.75, 1), ncol = 2)
obs <- mvtnorm::rmvnorm(500, sigma = s)
plot_ly(x = obs[,1], y = obs[,2], type = "histogram2d")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/161.embed" width="800" frameBorder="0"></iframe>
