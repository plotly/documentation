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
order: 3
---



# Histograms in R



```r
### Basic histogram
library(plotly)
plot_ly(x = rnorm(50), type = "histogram")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/255.embed" width="800" frameBorder="0"></iframe>

```r
### Overlaid histograms
plot_ly(x = rnorm(500), opacity = 0.6, type = "histogram") %>%
  add_trace(x = rnorm(500)+1, opacity = 0.6, type = "histogram") %>%
  layout(barmode="overlay")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/257.embed" width="800" frameBorder="0"></iframe>
