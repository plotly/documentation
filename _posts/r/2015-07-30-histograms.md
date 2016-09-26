---
title: Histograms in R | Examples | Plotly
name: Histograms
permalink: r/histograms/
description: How to make a histogram in R.
layout: base
thumbnail: thumbnail/histogram.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: statistical
order: 4
output:
  html_document:
    keep_md: true
---



#### Basic Histogram


```r
library(plotly)
plot_ly(x = ~rnorm(50), type = "histogram")
```

<iframe src="https://plot.ly/~RPlotBot/3219.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Overlaid histograms


```r
plot_ly(alpha = 0.6) %>%
  add_histogram(x = ~rnorm(500)) %>%
  add_histogram(x = ~rnorm(500) + 1) %>%
  layout(barmode = "overlay")
```

<iframe src="https://plot.ly/~RPlotBot/3221.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
