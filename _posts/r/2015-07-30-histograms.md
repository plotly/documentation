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
display_as: chart_type
order: 4
---



# Histograms in R

### Basic histogram


```r
library(plotly)
plot_ly(x = ~rnorm(50), type = "histogram")
```

![plot of chunk unnamed-chunk-2](figure/unnamed-chunk-2-1.png)



### Overlaid histograms


```r
plot_ly(alpha = 0.6) %>%
  add_histogram(x = ~rnorm(500)) %>%
  add_histogram(x = ~rnorm(500) + 1) %>%
  layout(barmode = "overlay")
```

![plot of chunk unnamed-chunk-4](figure/unnamed-chunk-4-1.png)


