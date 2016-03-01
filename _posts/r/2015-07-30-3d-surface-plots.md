---
title: 3D Surface Plots in R
name: 3D Surface Plots
permalink: r/3d-surface-plots/
description: How to make interactive 3D surface plots in R.
layout: base
thumbnail: thumbnail/3d-surface.jpg
language: r
page_type: example_index
has_thumbnail: TRUE
display_as: 3d_charts
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


### Multiple Surfaces

```{r, message=FALSE, heigh=850}
library(plotly)

z <- c(
  c(8.83,8.89,8.81,8.87,8.9,8.87),
  c(8.89,8.94,8.85,8.94,8.96,8.92),
  c(8.84,8.9,8.82,8.92,8.93,8.91),
  c(8.79,8.85,8.79,8.9,8.94,8.92),
  c(8.79,8.88,8.81,8.9,8.95,8.92),
  c(8.8,8.82,8.78,8.91,8.94,8.92),
  c(8.75,8.78,8.77,8.91,8.95,8.92),
  c(8.8,8.8,8.77,8.91,8.95,8.94),
  c(8.74,8.81,8.76,8.93,8.98,8.99),
  c(8.89,8.99,8.92,9.1,9.13,9.11),
  c(8.97,8.97,8.91,9.09,9.11,9.11),
  c(9.04,9.08,9.05,9.25,9.28,9.27),
  c(9,9.01,9,9.2,9.23,9.2),
  c(8.99,8.99,8.98,9.18,9.2,9.19),
  c(8.93,8.97,8.97,9.18,9.2,9.18)
)
dim(z) <- c(15,6)
z2 <- z + 1
z3 <- z - 1

plot_ly(z=z, type="surface") %>%
  add_trace(z=z2, type="surface") %>%
  add_trace(z=z3, type="surface")
```
<iframe width="800" height="850" frameborder="0" scrolling="no" src="https://plot.ly/~RPlotBot/2877.embed"></iframe>