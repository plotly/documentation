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
---



# Bar Charts in R


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

![plot of chunk unnamed-chunk-2](figure/unnamed-chunk-2-1.png)




```r
p2 <- add_trace(p, y = c(12, 18, 29), name = "LA Zoo")
p2
```

![plot of chunk unnamed-chunk-4](figure/unnamed-chunk-4-1.png)




```r
layout(p2, barmode = "stack")
```

![plot of chunk unnamed-chunk-6](figure/unnamed-chunk-6-1.png)



## customizing colors


```r
library(dplyr)
ggplot2::diamonds %>% count(cut) %>%
  plot_ly(x = ~cut, y = ~n, color = I("black"))
```

![plot of chunk unnamed-chunk-8](figure/unnamed-chunk-8-1.png)



# mapping a color variable


```r
ggplot2::diamonds %>% count(cut, clarity) %>%
  plot_ly(x = ~cut, y = ~n, color = ~clarity)
```

![plot of chunk unnamed-chunk-10](figure/unnamed-chunk-10-1.png)



