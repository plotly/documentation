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
---



# Bubble Charts


```r
library(plotly)
d <- diamonds[sample(nrow(diamonds), 1000), ]
# note how size is automatically scaled
plot_ly(d, x = ~carat, y = ~price, size = ~carat)
```

![plot of chunk unnamed-chunk-2](figure/unnamed-chunk-2-1.png)




```r
plot_ly(d, x = ~carat, y = ~price, text = ~paste("Clarity: ", clarity), 
        color = ~carat, size = ~carat)
```

![plot of chunk unnamed-chunk-4](figure/unnamed-chunk-4-1.png)


