---
title: Axes Labels in R
name: Axes Labels
permalink: r/figure-labels
description: How to set the title and axis-titles in python.
layout: base
thumbnail: thumbnail/figure-labels.jpg
language: r
page_type: example_index
has_thumbnail: false
display_as: layout_opt
---


# Axes Labels

```r
library(plotly)
f <- list(
  family = "Courier New, monospace",
  size = 18,
  color = "#7f7f7f"
)
x <- list(
  title = "x Axis",
  titlefont = f
)
y <- list(
  title = "y Axis",
  titlefont = f
)
plot_ly(x = rnorm(10), y = rnorm(10), mode = "markers") %>%
  layout(xaxis = x, yaxis = y)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/447.embed" width="800" frameBorder="0"></iframe>
