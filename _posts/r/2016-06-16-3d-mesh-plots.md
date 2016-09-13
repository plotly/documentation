---
title: 3D Mesh Plots in R | Examples | Plotly
name: 3D Mesh Plots
permalink: r/3d-mesh/
description: How to make interactive 3D mesh plots in R.
layout: base
thumbnail: thumbnail/3d-mesh.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: 3d_charts
order: 16
---



# Basic 3D Mesh Plot


```r
library(plotly)
plot_ly(
  x = c(0, 0, 1), y = c(0, 1, 0), z = c(0, 0, 0),
  i = 0, j = 1, k = 2,
  intensity = c(0, 0.5, 1), 
  color = c(0, 0.5, 1),
  showscale = FALSE
)
```

```
## Warning in resolve_vars(new_groups, tbl_vars(.data)): '.Random.seed' is not
## an integer vector but of type 'NULL', so ignored
```

![plot of chunk unnamed-chunk-2](figure/unnamed-chunk-2-1.png)



# Tetrahedron Mesh Plot


```r
library(plotly)

plot_ly(
  x = c(0, 1, 2, 0),
  y = c(0, 0, 1, 2),
  z = c(0, 2, 0, 1),
  i = c(0, 0, 0, 1),
  j = c(1, 2, 3, 2),
  k = c(2, 3, 1, 3),
  intensity = c(0, 0.33, 0.66, 1),
  color = c(0, 0.33, 0.66, 1),
  colors = colorRamp(c("red", "green", "blue"))
)
```

![plot of chunk unnamed-chunk-4](figure/unnamed-chunk-4-1.png)



# Cube Mesh Plot


```r
library(plotly)

plot_ly(
  x = c(0, 0, 1, 1, 0, 0, 1, 1),
  y = c(0, 1, 1, 0, 0, 1, 1, 0),
  z = c(0, 0, 0, 0, 1, 1, 1, 1),
  i = c(7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2),
  j = c(3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3),
  k = c(0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6),
  intensity = seq(0, 1, length = 8),
  color = seq(0, 1, length = 8),
  colors = colorRamp(rainbow(8))
)
```

```
## Error: Variables must be length 1 or 12.
## Problem variables: 'x', 'y', 'z', 'intensity', 'color'
```


