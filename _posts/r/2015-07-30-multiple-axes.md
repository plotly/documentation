---
title: Multiple Axes in R | Plotly
name: Multiple Axes
permalink: r/multiple-axes/
description: How to make a graph with multiple axes in R with Plotly.
layout: base
thumbnail: thumbnail/multiple-axes.jpg
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
  side = "right",
  title = "second y axis"
)
plot_ly() %>%
  add_lines(x = ~1:3, y = ~10*(1:3), name = "slope of 10") %>%
  add_lines(x = ~2:4, y = ~1:3, name = "slope of 1", yaxis = "y2") %>%
  layout(
    title = "Double Y Axis", yaxis2 = ay,
    xaxis = list(title="x")
  )
```

![plot of chunk unnamed-chunk-2](figure/unnamed-chunk-2-1.png)



