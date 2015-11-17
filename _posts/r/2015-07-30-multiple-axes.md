---
title: Multiple Axes in R | Plotly
name: Multiple Axes
permalink: r/multiple-axes/
description: How to make a graph with multiple axes in R with Plotly.
layout: base
thumbnail: /images/multiple-axes.png
language: r
page_type: example_index
has_thumbnail: true
display_as: multiple_axes
order: 1
---


# Multiple Axes


```r
library(plotly)
ay <- list(
  tickfont = list(color = "red"),
  overlaying = "y",
  side = "right"
)
plot_ly(x = 1:3, y = 10*(1:3), name = "slope of 10") %>%
  add_trace(x = 2:4, y = 1:3, name = "slope of 1", yaxis = "y2") %>%
  layout(title = "Double Y Axis", yaxis2 = ay)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1055.embed" width="800" frameBorder="0"></iframe>
