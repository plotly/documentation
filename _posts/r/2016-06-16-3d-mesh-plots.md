---
title: 3D Mesh Plots in R | Examples | Plotly
name: 3D Mesh Plots
permalink: r/3d-mesh-plots/
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
