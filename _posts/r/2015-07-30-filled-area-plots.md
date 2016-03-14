---
title: Filled Area Plots in R | Examples
name: Filled Area Plots
permalink: r/filled-area-plots/
description: How to make a filled area plot in R. An area chart displays a solid color between the traces of a graph.
layout: base
thumbnail: thumbnail/area.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: basic
order: 4
---


# Filled Area Plots in R


```r
library(plotly)
p <- plot_ly(x = c(1, 2, 3, 4), y = c(0, 2, 3, 5), fill = "tozeroy")
add_trace(p, x = c(1, 2, 3, 4), y = c(3, 5, 1, 7), fill = "tonexty")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/217.embed" width="800" frameBorder="0"></iframe>
