---
title: Bar Charts in R | Examples | Plotly
name: Bar Charts
permalink: r/bar-charts/
description: How to make a bar chart in R. Examples of grouped, stacked, overlaid, and colored bar charts.
layout: base
thumbnail: thumbnail/bar.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: chart_type
order: 2
output:
  html_document:
    keep_md: true
---



### Basic Bar Charts in R


```r
library(plotly)

p <- plot_ly(
  x = c("giraffes", "orangutans", "monkeys"),
  y = c(20, 14, 23),
  name = "SF Zoo",
  type = "bar"
)
p
```

<iframe src="https://plot.ly/~RPlotBot/3080.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>


```r
p2 <- add_trace(p, y = c(12, 18, 29), name = "LA Zoo")
```

<iframe src="https://plot.ly/~RPlotBot/3082.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>


```r
p3 <- layout(p2, barmode = "stack")
```

<iframe src="https://plot.ly/~RPlotBot/3084.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Customizing Colors


```r
library(plotly)
library(dplyr)

ggplot2::diamonds %>% count(cut) %>%
  plot_ly(x = ~cut, y = ~n, color = I("black"))
```

<iframe src="https://plot.ly/~RPlotBot/3086.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Mapping a Color Variable


```r
library(plotly)
library(dplyr)

ggplot2::diamonds %>% count(cut, clarity) %>%
  plot_ly(x = ~cut, y = ~n, color = ~clarity)
```

<iframe src="https://plot.ly/~RPlotBot/3088.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
