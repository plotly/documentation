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
display_as: chart_type
order: 5
---


# 3D Surface Plots in R


```r
library(plotly)
# volcano is a numeric matrix that ships with R
plot_ly(z = volcano, type = "surface")
```

![plot of chunk unnamed-chunk-2](figure/unnamed-chunk-2-1.png)

### 2D Kernel Density Estimation


```r
kd <- with(MASS::geyser, MASS::kde2d(duration, waiting, n = 50))
plot_ly(x = kd$x, y = kd$y, z = kd$z, type = "surface")
```

![plot of chunk unnamed-chunk-3](figure/unnamed-chunk-3-1.png)


### Multiple Surfaces


```r
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

p <- plot_ly(showscale = FALSE) %>%
  add_surface(z = z) %>%
  add_surface(z = z2, opacity = 0.98) %>%
  add_surface(z = z3, opacity = 0.98)
p
```

![plot of chunk unnamed-chunk-4](figure/unnamed-chunk-4-1.png)
