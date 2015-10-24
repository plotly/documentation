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
s <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/school_earnings.csv")
s <- s[order(s$Men), ]
library(plotly)
p <- plot_ly(s, x = Women, y = School, name = "Women",
             mode = "markers", marker = list(color = "pink")) %>%
  add_trace(x = Men, name = "Men", marker = list(color = "blue")) %>%
  layout(
    title = "Gender earnings disparity",
    xaxis = list(title = "Annual Salary (in thousands)"),
    margin = list(l = 65)
  )

# to add lines between points:
library(tidyr)
s2 <- gather(s, variable, value, Women, Men)
p %>%
  add_trace(data = s2, group = School, showlegend = F,
            x = value, y = School, mode = "lines", 
            line = list(color = "gray"))
```

<iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~agvd/1685.embed"></iframe>
