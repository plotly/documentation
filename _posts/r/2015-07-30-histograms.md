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
order: 2
---

### Basic Histogram
```r
library(plotly)
plot_ly(x = rnorm(50), type = "histogram")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/255.embed" width="800" frameBorder="0"></iframe>

### Normalized Histogram

```r
library(plotly)
plot_ly(x = rnorm(500), type = "histogram", histnorm = "probability")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/3034.embed" width="800" frameBorder="0"></iframe>

### Overlaid histograms
```r
plot_ly(x = rnorm(500), opacity = 0.6, type = "histogram") %>%
  add_trace(x = rnorm(500)+1, opacity = 0.6, type = "histogram") %>%
  layout(barmode="overlay")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/257.embed" width="800" frameBorder="0"></iframe>
