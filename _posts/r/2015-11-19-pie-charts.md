---
title: Pie Charts in R | Examples | Plotly
name: Pie Charts
permalink: r/pie-charts/
description: How to make pie charts in R using plotly.
layout: base
thumbnail: thumbnail/pie-chart.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: chart_type
order: 6
---



# Basic Pie Chart


```r
library(plotly)

ds <- data.frame(
  labels = c("A", "B", "C"),
  values = c(10, 40, 60)
)

plot_ly(ds, labels = ~labels, values = ~values, type = "pie") %>%
  layout(title = "Basic Pie Chart using Plotly")
```

![plot of chunk unnamed-chunk-2](figure/unnamed-chunk-2-1.png)



# Basic Pie Chart - Subplots


```r
library(plotly)
library(dplyr)

plot_ly(type = "pie") %>%
  add_trace(data = count(diamonds, cut), labels = ~cut, values = ~n,
            name = "Cut", domain = list(x = c(0, 0.4), y = c(0.4, 1))) %>%
  add_trace(data = count(diamonds, color), labels = ~cut, values = ~n,
            name = "Color", domain = list(x = c(0.6, 1), y = c(0.4, 1))) %>%
  add_trace(data = count(diamonds, clarity), labels = ~cut, values = ~n,
            name = "Clarity", domain = list(x = c(0.25, 0.75), y = c(0, 0.6))) %>%
  layout(title = "Pie Charts with Subplots", showlegend = F)
```

```
## Error: Each variable must be a 1d atomic vector or list.
## Problem variables: 'labels'
```



# Donut Chart


```r
# Get Manufacturer
mtcars$manuf <- sapply(strsplit(rownames(mtcars), " "), "[[", 1)
mtcars %>%
  group_by(manuf) %>%
  summarize(count = n()) %>%
  plot_ly(labels = ~manuf, values = ~count, type = "pie", hole = 0.6) %>%
  layout(title = "Donut charts using Plotly",  showlegend = F)
```

![plot of chunk unnamed-chunk-6](figure/unnamed-chunk-6-1.png)




