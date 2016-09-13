---
title: Dumbbell plots in R | Examples | Plotly
name: Dumbbell plots
permalink: r/dumbbell-plots/
description: How to make a dumbbell plot in R. Dumbbell plots show changes between two points in time or between two conditions.
layout: base
thumbnail: thumbnail/dumbbell-plot.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: chart_type
order: 8
---

# Dumbbell plots in R



# Dot plots in R


```r
s <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/school_earnings.csv")
# order factor levels by men's income (plot_ly() will pick up on this ordering)
s$School <- factor(s$School, levels = s$School[order(s$Men)])

library(plotly)
p <- plot_ly(s, color = I("gray80")) %>%
  add_segments(x = ~Women, xend = ~Men, y = ~School, yend = ~School, showlegend = FALSE) %>%
  add_markers(x = ~Women, y = ~School, name = "Women", color = I("pink")) %>%
  add_markers(x = ~Men, y = ~School, name = "Men", color = I("blue")) %>%
  layout(
    title = "Gender earnings disparity",
    xaxis = list(title = "Annual Salary (in thousands)"),
    margin = list(l = 65)
  )
p
```

![plot of chunk unnamed-chunk-2](figure/unnamed-chunk-2-1.png)


