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
output:
  html_document:
    keep_md: true
---


### New to Plotly?

Plotly's R library is free and open source!<br>
[Get started](https://plot.ly/r/getting-started/) by downloading the client and [reading the primer](https://plot.ly/r/getting-started/).<br>
You can set up Plotly to work in [online](https://plot.ly/r/getting-started/#hosting-graphs-in-your-online-plotly-account) or [offline](https://plot.ly/r/offline/) mode.<br>
We also have a quick-reference [cheatsheet](https://images.plot.ly/plotly-documentation/images/r_cheat_sheet.pdf) (new!) to help you get started!

### Version Check

Version 4 of Plotly's R package is now [available](https://plot.ly/r/getting-started/#installation)!<br>
Check out [this post](http://moderndata.plot.ly/upgrading-to-plotly-4-0-and-above/) for more information on breaking changes and new features available in this version.

```r
library(plotly)
```

```
## Warning: package 'ggplot2' was built under R version 3.2.4
```

```r
packageVersion('plotly')
```

# Basic Pie Chart


```r
library(plotly)

ds <- data.frame(
  labels = c("A", "B", "C"),
  values = c(10, 40, 60)
)

plot_ly(ds, labels = ~labels, values = ~values) %>%
  add_pie() %>%
  layout(title = "Basic Pie Chart using Plotly")
```

```
## Warning in arrange_impl(.data, dots): '.Random.seed' is not an integer
## vector but of type 'NULL', so ignored
```



# Basic Pie Chart - Subplots


```r
library(plotly)
library(dplyr)
```

```
## Warning: package 'dplyr' was built under R version 3.2.5
```

```r
plot_ly() %>%
  add_pie(data = count(diamonds, cut), labels = ~cut, values = ~n,
            name = "Cut", domain = list(x = c(0, 0.4), y = c(0.4, 1))) %>%
  add_pie(data = count(diamonds, color), labels = ~cut, values = ~n,
            name = "Color", domain = list(x = c(0.6, 1), y = c(0.4, 1))) %>%
  add_pie(data = count(diamonds, clarity), labels = ~cut, values = ~n,
            name = "Clarity", domain = list(x = c(0.25, 0.75), y = c(0, 0.6))) %>%
  layout(title = "Pie Charts with Subplots", showlegend = F)
```



# Donut Chart


```r
# Get Manufacturer
mtcars$manuf <- sapply(strsplit(rownames(mtcars), " "), "[[", 1)
mtcars %>%
  group_by(manuf) %>%
  summarize(count = n()) %>%
  plot_ly(labels = ~manuf, values = ~count) %>%
  add_pie(hole = 0.6) %>%
  layout(title = "Donut charts using Plotly",  showlegend = F)
```




