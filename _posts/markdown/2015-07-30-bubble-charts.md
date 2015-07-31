---
title: Bubble Charts in R | Examples | Plotly
name: Bubble Charts
permalink: r1/bubble-charts/
description: How to make a bubble chart in R. A bubble chart is a scatter plot whose markers have variable color and size.
layout: base
thumbnail: /images/bubble.png
language: r
page_type: example_index
has_thumbnail: true
display_as: chart_type
---


# Bubble Charts


```r
library(plotly)
d <- diamonds[sample(nrow(diamonds), 1000), ]
# note how size is automatically scaled and added as hover text
plot_ly(d, x = carat, y = price, size = carat, mode = "markers", filename="r-docs/basic-bubble")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/205" width="800" frameBorder="0"></iframe>

```r
plot_ly(d, x = carat, y = price, text = paste("Clarity: ", clarity),
        mode = "markers", color = carat, size = carat, opacity = carat,
        filename="r-docs/custom-bubble-text")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/207" width="800" frameBorder="0"></iframe>
