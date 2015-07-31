---
title: 3D Scatter Plots in R | Examples | Plotly
name: 3D Scatter Plots
permalink: r1/3d-scatter-plots/
description: How to make interactive 3D scatter plots in R.
layout: base
thumbnail: /images/3d-scatter.png
language: r
page_type: example_index
has_thumbnail: true
display_as: chart_type
---


# 3D Scatter Plots in R


```r
# variance-covariance matrix for a multivariate normal distribution
s <- matrix(c(1, .5, .5,
              .5, 1, .5,
              .5, .5, 1), ncol = 3)
# use the mvtnorm package to sample 200 observations
obs <- mvtnorm::rmvnorm(200, sigma = s)
# collect everything in a data-frame
df <- setNames(data.frame(obs), c("x", "y", "z"))

library(plotly)
plot_ly(df, x = x, y = y, z = z, type = "scatter3d", mode = "markers", filename="r-docs/3d-scatter")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/165" width="800" frameBorder="0"></iframe>
