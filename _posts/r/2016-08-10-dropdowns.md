---
title: Adding Dropdowns
name: Dropdown Events
permalink: r/dropdowns
description: How to add dropdowns to R plots
layout: base
thumbnail: thumbnail/dropdown.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as:
order: 7
---



# Dropdowns

### Simple Dropdown Menu Example


```r
library(plotly)
library(MASS)

covmat <- matrix(c(0.8, 0.4, 0.3, 0.8), nrow = 2, byrow = T)
df <- mvrnorm(n = 10000, c(0,0), Sigma = covmat)
df <- as.data.frame(df)

colnames(df) <- c("x", "y")
p <- plot_ly(df, x = ~x, y = ~y, alpha = 0.3) %>%
  add_markers(marker = list(line = list(color = "black", width = 1))) %>%
  layout(
    title = "Drop down menus - Plot type",
    xaxis = list(domain = c(0.1, 1)),
    yaxis = list(title = "y"),
    updatemenus = list(
      list(
        y = 0.8,
        buttons = list(
          
          list(method = "restyle",
               args = list("type", "scatter"),
               label = "Scatter"),
          
          list(method = "restyle",
               args = list("type", "histogram2d"),
               label = "2D Histogram")))
    ))
```

<iframe src="https://plot.ly/~RPlotBot/3294.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Add Two Dropdown Menus to Restyle Graph


```r
library(plotly)

x <- seq(-2 * pi, 2 * pi, length.out = 1000)
df <- data.frame(x, y1 = sin(x), y2 = cos(x))

plot_ly(df, x = ~x) %>%
  add_lines(y = ~y1, name = "A") %>%
  add_lines(y = ~y2, name = "B", visible = F) %>% 
  layout(
    title = "Drop down menus - Styling",
    xaxis = list(domain = c(0.1, 1)),
    yaxis = list(title = "y"),
    updatemenus = list(
      list(
        y = 0.8,
        buttons = list(
          
          list(method = "restyle",
               args = list("line.color", "blue"),
               label = "Blue"),
          
          list(method = "restyle",
               args = list("line.color", "red"),
               label = "Red"))),
      
      list(
        y = 0.7,
        buttons = list(
          list(method = "restyle",
               args = list("visible", list(TRUE, FALSE)),
               label = "Sin"),
          
          list(method = "restyle",
               args = list("visible", list(FALSE, TRUE)),
               label = "Cos")))
    )
  )
```

![plot of chunk unnamed-chunk-4](figure/unnamed-chunk-4-1.png)

<iframe src="https://plot.ly/~RPlotBot/3323.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
