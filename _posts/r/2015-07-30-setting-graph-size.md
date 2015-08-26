---
title: Setting Graph Size in R
name: Setting Graph Size
permalink: r/setting-graph-size/
description: How to change the size of graphs in R.
layout: base
language: r
page_type: example_index
has_thumbnail: false
display_as: layout
---


# Setting Graph Size

```r
library(plotly)
m = list(
  l = 50,
  r = 50,
  b = 100,
  t = 100,
  pad = 4
)
plot_ly(x = seq(0, 8), y = seq(0, 8), filename="r-docs/sizing") %>%
  layout(autosize = F, width = 500, height = 500, margin = m)
```

<iframe height="500" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/449" width="500" frameBorder="0"></iframe>
