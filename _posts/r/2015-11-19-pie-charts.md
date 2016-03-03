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
order: 13
---
# Basic Pie Chart

```r
library(plotly)

ds <- data.frame(labels = c("A", "B", "C"),
                 values = c(10, 40, 60))

plot_ly(ds, labels = labels, values = values, type = "pie") %>% 
  layout(title = "Basic Pie Chart using Plotly")
```
<iframe src="https://plot.ly/~RPlotBot/2887" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

# Basic Pie Chart - Subplots

```r
library(plotly)
library(dplyr)

cut <- diamonds %>% 
  group_by(cut) %>% 
  summarize(count = n())

color <- diamonds %>% 
  group_by(color) %>% 
  summarize(count = n())

clarity <- diamonds %>% 
  group_by(clarity) %>% 
  summarize(count = n())

plot_ly(cut, labels = cut, values = count, type = "pie", domain = list(x = c(0, 0.4), y = c(0.4, 1)), 
        name = "Cut", showlegend = F) %>% 
  add_trace(data = color, labels = color, values = count, type = "pie", domain = list(x = c(0.6, 1), y = c(0.4, 1)),
            name = "Color", showlegend = F) %>% 
  add_trace(data = clarity, labels = clarity, values = count, type = "pie", domain = list(x = c(0.25, 0.75), y = c(0, 0.6)),
            name = "Clarity", showlegend = F) %>% 
  layout(title = "Pie Charts with Subplots")
```

<iframe src="https://plot.ly/~RPlotBot/2889" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

# Donut Chart


```r
df <- mtcars

# Get Manufacturer
df$manuf <- sapply(rownames(mtcars), function(x) strsplit(x, split = " ")[[1]][1])

plot.df <- df %>%
  group_by(manuf) %>% 
  summarize(count = n())

plot_ly(plot.df, labels = manuf, values = count, type = "pie", hole = 0.6, showlegend = F) %>% 
  layout(title = "Donut charts using Plotly")
```

<iframe src="https://plot.ly/~RPlotBot/2897" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>


