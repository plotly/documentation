---
title: Setting Graph Size in R
name: Setting Graph Size
permalink: r/setting-graph-size/
description: How to change the size of graphs in R.
layout: base
language: r
page_type: example_index
has_thumbnail: false
display_as: layout_opt
output:
  html_document:
    keep_md: true
---



### Customize Margins and Plot Size

```r
library(plotly)
m <- list(
  l = 50,
  r = 50,
  b = 100,
  t = 100,
  pad = 4
)
plot_ly(x = seq(0, 8), y = seq(0, 8)) %>%
  layout(autosize = F, width = 500, height = 500, margin = m)
```

<iframe src="https://plot.ly/~RPlotBot/3157.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
