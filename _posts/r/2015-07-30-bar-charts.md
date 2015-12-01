---
title: Bar Charts in R | Examples | Plotly
name: Bar Charts
permalink: r/bar-charts/
description: How to make a bar chart in R. Seven examples of grouped, stacked, overlaid, and colored bar charts.
layout: base
thumbnail: thumbnail/bar.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: chart_type
order: 2
---


# Bar Charts in R


```r
library(plotly)
p <- plot_ly(
  x = c("giraffes", "orangutans", "monkeys"),
  y = c(20, 14, 23),
  name = "SF Zoo",
  type = "bar",
  filename="r-docs/simple-bar"
)
p
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/175.embed" width="800" frameBorder="0"></iframe>

```r
p2 <- add_trace(
  p,
  x = c("giraffes", "orangutans", "monkeys"),
  y = c(12, 18, 29),
  name = "LA Zoo",
  filename="r-docs/simple-bars"
)
p2
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/177.embed" width="800" frameBorder="0"></iframe>

```r
layout(p2, barmode = "stack")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/177.embed" width="800" frameBorder="0"></iframe>

```r
## customizing colors

library(dplyr)
ggplot2::diamonds %>% count(cut) %>%
  plot_ly(x = cut, y = n, type = "bar", marker = list(color = toRGB("black")))
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/183.embed" width="800" frameBorder="0"></iframe>

```r
# mapping a color variable

ggplot2::diamonds %>% count(cut, clarity) %>%
  plot_ly(x = cut, y = n, type = "bar", color = clarity)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/187.embed" width="800" frameBorder="0"></iframe>
