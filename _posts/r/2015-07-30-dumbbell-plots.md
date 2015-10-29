---
title: Dumbbell plots in R | Examples | Plotly
name: Dumbbell plots
permalink: r/dumbbell-plots/
description: How to make a dumbbell plot in R. Dumbbell plots show changes between two points in time or between two conditions.
layout: base
thumbnail: /images/dumbbell-plot.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: chart_type
order: 7
---

# Dumbbell plots in R

```r
library(tidyr)
library(plotly)
s <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/school_earnings.csv")
s <- s[order(s$Men), ]
gather(s, Sex, value, Women, Men) %>%
  plot_ly(x = value, y = School, mode = "markers",
          color = Sex, colors = c("pink", "blue")) %>%
  add_trace(x = value, y = School, mode = "lines", 
            group = School, showlegend = F, line = list(color = "gray")) %>%
  layout(
    title = "Gender earnings disparity",
    xaxis = list(title = "Annual Salary (in thousands)"),
    margin = list(l = 65)
  )
```

<iframe width="650" height="650" frameborder="0" scrolling="no" src="https://plot.ly/~jackp/14455.embed"></iframe>
