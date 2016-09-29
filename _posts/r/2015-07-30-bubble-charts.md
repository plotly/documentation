---
title: Bubble Charts in R | Examples | Plotly
name: Bubble Charts
permalink: r/bubble-charts/
description: How to make a bubble chart in R. A bubble chart is a scatter plot whose markers have variable color and size.
layout: base
thumbnail: thumbnail/bubble.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: chart_type
order: 2
output:
  html_document:
    keep_md: true
---



# Basic Bubble Chart


```r
library(plotly)
d <- diamonds[sample(nrow(diamonds), 1000), ]
# note how size is automatically scaled
plot_ly(d, x = ~carat, y = ~price, size = ~carat)
```

<iframe src="https://plot.ly/~RPlotBot/3100.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>


```r
plot_ly(d, x = ~carat, y = ~price, text = ~paste("Clarity: ", clarity),
        color = ~carat, size = ~carat)
```

<iframe src="https://plot.ly/~RPlotBot/3102.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
