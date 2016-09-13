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
---



# Filled Area Plots in R

The `add_area()` function will *always* fill to 0 (on the y-axis).


```r
library(plotly)
p <- plot_ly()
for (i in c("x", "y", "z")) {
  d <- density(diamonds[[i]])
  p <- add_area(p, x = d[["x"]], y = d[["y"]], name = i)
}
layout(p, xaxis = list(range = c(0, 10)))
```

![plot of chunk unnamed-chunk-2](figure/unnamed-chunk-2-1.png)



For more control over the fill mode, use `add_lines()`:


```r
plot_ly() %>%
  add_lines(x = c(1, 2, 3, 4), y = c(0, 2, 3, 5), fill = "tozeroy") %>%
  add_lines(x = c(1, 2, 3, 4), y = c(3, 5, 1, 7), fill = "tonexty")
```

![plot of chunk unnamed-chunk-4](figure/unnamed-chunk-4-1.png)
