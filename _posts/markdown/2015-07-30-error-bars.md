---
title: Error Bars in R | Examples | Plotly
name: Error Bars
permalink: r1/error-bars/
description: How to create error bars to scatter plots in R.
layout: base
thumbnail: error-bars.png
language: r
page_type: example_index
has_thumbnail: false
display_as: chart_type
---


# Error Bars


```r
library(dplyr)
library(plotly)

p <- ggplot2::mpg %>% group_by(class) %>%
  summarise(mn = mean(hwy), sd = 1.96 * sd(hwy)) %>%
  arrange(desc(mn)) %>%
  plot_ly(x = class, y = mn, error_y = list(value = sd),
          mode = "markers", name = "Highway",
          filename="r-docs/basic-error-bars") %>%
  layout(yaxis = list(title = "Miles Per Gallon"))
p
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/213" width="800" frameBorder="0"></iframe>

```r
df2 <- mpg %>% group_by(class) %>%
  summarise(mn = mean(cty), sd = 1.96 * sd(cty))

p2 <- add_trace(p, y = mn, error_y = list(value = sd),
          name = "City", data = df2,
          filename = "r-docs/basic-error-bars-extra-trace")
p2
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/215" width="800" frameBorder="0"></iframe>
