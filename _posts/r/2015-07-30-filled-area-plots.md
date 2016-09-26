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
display_as: chart_type
order: 4
output:
  html_document:
    keep_md: true
---



#### Basic Filled Area Plot

To make a filled area plot, use `add_lines()` and set `fill` to `"tozeroy"`.


```r
library(plotly)
p <- plot_ly(fill = "tozeroy")
for (i in c("x", "y", "z")) {
  d <- density(diamonds[[i]])
  p <- add_lines(p, x = d[["x"]], y = d[["y"]], name = i)
}
layout(p, xaxis = list(range = c(0, 10)))
```

<iframe src="https://plot.ly/~RPlotBot/3434.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Custom Fill
If you don't want the fills for overlay, you can set different [fill modes](https://plot.ly/r/reference/#scatter-fill).


```r
plot_ly() %>%
  add_lines(x = c(1, 2, 3, 4), y = c(0, 2, 3, 5), fill = "tozeroy") %>%
  add_lines(x = c(1, 2, 3, 4), y = c(3, 5, 1, 7), fill = "tonexty")
```

<iframe src="https://plot.ly/~RPlotBot/3436.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
