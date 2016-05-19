---
title: Error Bars in R | Examples | Plotly
name: Error Bars
permalink: r/error-bars/
description: How to add error bars to scatter plots in R.
layout: base
thumbnail: thumbnail/error-bar.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: statistical
order: 1
---


# Error Bars


```r
library(dplyr)
library(plotly)

p <- ggplot2::mpg %>% group_by(class) %>%
  summarise(mn = mean(hwy), sd = 1.96 * sd(hwy)) %>%
  arrange(desc(mn)) %>%
  plot_ly(x = class, y = mn, error_y = list(array = sd),
          mode = "markers", name = "Highway") %>%
  layout(yaxis = list(title = "Miles Per Gallon"))
p
```

<iframe height="850" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/2845.embed" width="800" frameBorder="0"></iframe>

```r
library(dplyr)
library(plotly)

data <- ggplot2::mpg %>% group_by(class) %>%
  summarise(mn = mean(hwy), sd = 1.96 * sd(hwy), mn_c = mean(cty)) %>%
  arrange(desc(mn))

p <- data %>%
  plot_ly(x = class, y = mn, error_y = list(value=10),
          mode = "markers", name = "Highway") %>%
  layout(yaxis = list(title = "Miles Per Gallon"))

p2 <- add_trace(p, x = class, y = mn_c, error_y = list(value=10),
                name = "City", data = data)
#by default the `type` for error is `percent`, which takes
#a percentage of the y value as the error bar.
p2
```

<iframe height="850" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/2849.embed" width="800" frameBorder="0"></iframe>
