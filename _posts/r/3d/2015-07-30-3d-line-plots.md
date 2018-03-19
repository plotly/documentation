---
title: 3D Line Plots in R | Examples | Plotly
name: 3D Line Plots
permalink: r/3d-line-plots/
description: How to make interactive 3D line plots in R.
layout: base
thumbnail: thumbnail/3d-line.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: 3d_charts
order: 2
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
packageVersion('plotly')
```

```
## [1] '4.5.5.9000'
```

### Basic 3D Line Plot


```r
library(plotly)

data <- read.csv('https://raw.githubusercontent.com/plotly/datasets/master/3d-line1.csv')
data$color <- as.factor(data$color)

p <- plot_ly(data, x = ~x, y = ~y, z = ~z, type = 'scatter3d', mode = 'lines',
        opacity = 1, line = list(width = 6, color = ~color, reverscale = FALSE))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="line3d-basic")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3922.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### 3D Line and Markers Plot


```r
library(plotly)

x <- c()
y <- c()
z <- c()
c <- c()

for (i in 1:62) {
  r <- 20 * cos(i / 20)
  x <- c(x, r * cos(i))
  y <- c(y, r * sin(i))
  z <- c(z, i)
  c <- c(c, i)
}

data <- data.frame(x, y, z, c)

p <- plot_ly(data, x = ~x, y = ~y, z = ~z, type = 'scatter3d', mode = 'lines+markers',
        line = list(width = 6, color = ~c, colorscale = 'Viridis'),
        marker = list(size = 3.5, color = ~c, colorscale = 'Greens', cmin = -20, cmax = 50))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="line3d-markers")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3924.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Custom Color Scale


```r
library(plotly)

count <- 3000

x <- c()
y <- c()
z <- c()
c <- c()

for (i in 1:count) {
  r <- i * (count - i)
  x <- c(x, r * cos(i / 30))
  y <- c(y, r * sin(i / 30))
  z <- c(z, i)
  c <- c(c, i)
}

data <- data.frame(x, y, z, c)

p <- plot_ly(data, x = ~x, y = ~y, z = ~z, type = 'scatter3d', mode = 'lines',
        line = list(width = 4, color = ~c, colorscale = list(c(0,'#BA52ED'), c(1,'#FCB040'))))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="line3d-color")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3926.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### 3D Random Walk Plot


```r
library(plotly)

data <- read.csv('https://raw.githubusercontent.com/plotly/datasets/master/_3d-line-plot.csv')

p <- plot_ly(data, x = ~x1, y = ~y1, z = ~z1, type = 'scatter3d', mode = 'lines',
        line = list(color = '#1f77b4', width = 1)) %>%
  add_trace(x = ~x2, y = ~y2, z = ~z2,
            line = list(color = 'rgb(44, 160, 44)', width = 1)) %>%
  add_trace(x = ~x3, y = ~y3, z = ~z3,
            line = list(color = 'bcbd22', width = 1))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="line3d-randomwalk")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3941.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### 3D Density Plot


```r
library(plotly)

dens <- with(diamonds, tapply(price, INDEX = cut, density))
data <- data.frame(
  x = unlist(lapply(dens, "[[", "x")),
  y = unlist(lapply(dens, "[[", "y")),
  cut = rep(names(dens), each = length(dens[[1]]$x)))

p <- plot_ly(data, x = ~x, y = ~y, z = ~cut, type = 'scatter3d', mode = 'lines', color = ~cut)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="line3d-density")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3943.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#Reference

See [https://plot.ly/r/reference/#scatter3d](https://plot.ly/r/reference/#scatter3d) for more information and chart attribute options!
