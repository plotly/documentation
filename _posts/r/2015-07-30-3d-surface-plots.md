---
title: 3D Surface Plots in R
name: 3D Surface Plots
permalink: r/3d-surface-plots/
description: How to make interactive 3D surface plots in R.
layout: base
thumbnail: /images/3d-surface.png
language: r
page_type: example_index
has_thumbnail: TRUE
display_as: chart_type
order: 15
---


# 3D Surface Plots in R


```r
library(plotly)
# volcano is a numeric matrix that ships with R
plot_ly(z = volcano, type = "surface")
```

<iframe height="850" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/171.embed" width="800" frameBorder="0"></iframe>

### 2D Kernel Density Estimation


```r
kd <- with(MASS::geyser, MASS::kde2d(duration, waiting, n = 50))
with(kd, plot_ly(x = x, y = y, z = z, type = "surface"))
```

<iframe height="850" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/173.embed" width="800" frameBorder="0"></iframe>
