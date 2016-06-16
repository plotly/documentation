---
title: 3D Mesh Plots in R | Examples | Plotly
name: 3D Mesh Plots
permalink: r/3d-mesh/
description: How to make interactive 3D mesh plots in R.
layout: base
thumbnail: thumbnail/3d-scatter.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: 3d_charts
order: 16
---


# Basic 3D Mesh Plot
```r
library(plotly)

x = c(0, 0, 1)
y = c(0, 1, 0)
z = c(0, 0, 0)
i = c(0)
j = c(1)
k = c(2)
p<- plot_ly(x = x, y = y, z = z,
            i = i, j = j, k = k,
            type = "mesh3d",
            intensity = c(0, 0.5, 1),
            colorscale = list(c(0, 'rgb(255, 0, 0)'),
                           c(0.5, 'rgb(0, 255, 0)'),
                           c(1, 'rgb(0, 0, 255)')),
            showscale = FALSE
        )
p
```
<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/3024.embed" width="800" frameBorder="0"></iframe>

# Tetrahedron Mesh Plot

```r
library(plotly)

x = c(0, 1, 2, 0)
y = c(0, 0, 1, 2)
z = c(0, 2, 0, 1)
i = c(0, 0, 0, 1)
j = c(1, 2, 3, 2)
k = c(2, 3, 1, 3)
intensity = c(0, 0.33, 0.66, 1)
colorscale = list(
  c(0, 'rgb(255, 0, 0)'),
  c(0.5, 'rgb(0, 255, 0)'),
  c(1, 'rgb(0, 0, 255)')
)

p <- plot_ly(x = x, y = y, z = z,
            i = i, j = j, k = k,
            type = "mesh3d",
            intensity = intensity,
            colorscale = colorscale,
            showscale = TRUE
            )
p
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/3026.embed" width="800" frameBorder="0"></iframe>

# Cube Mesh Plot

```r
library(plotly)

x = c(0, 0, 1, 1, 0, 0, 1, 1)
y = c(0, 1, 1, 0, 0, 1, 1, 0)
z = c(0, 0, 0, 0, 1, 1, 1, 1)
i = c(7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2)
j = c(3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3)
k = c(0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6)
intensity = seq(0,1,length=8)
colorscale = list(
  c(0, 'rgb(255, 0, 255)'),
  c(0.5, 'rgb(0, 255, 0)'),
  c(1, 'rgb(0, 0, 255)')
)

p <- plot_ly(x = x, y = y, z = z,
            i = i, j = j, k = k,
            type = "mesh3d",
            intensity = intensity,
            colorscale = colorscale,
            showscale = TRUE
            )
p
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/3028.embed" width="800" frameBorder="0"></iframe>
