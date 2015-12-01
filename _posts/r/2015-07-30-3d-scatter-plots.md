---
title: 3D Scatter Plots in R | Examples | Plotly
name: 3D Scatter Plots
permalink: r/3d-scatter-plots/
description: How to make interactive 3D scatter plots in R.
layout: base
thumbnail: thumbnail/3d-scatter.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: chart_type
order: 14
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
plot_ly(df, x = x, y = y, z = z, type = "scatter3d", mode = "markers")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/2000.embed" width="800" frameBorder="0"></iframe>

## 3D Scatter Plot with Hover Text


```r
set.seed(100)
d <- diamonds[sample(nrow(diamonds), 1000), ]
plot_ly(d, x = carat, y = price, z=depth, text = paste("Clarity: ", clarity),
        type="scatter3d", mode="markers")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/2002.embed" width="800" frameBorder="0"></iframe>
