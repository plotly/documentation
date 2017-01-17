---
title: Error Bars in R | Examples | Plotly
name: Error Bars
permalink: r/error-bars/
description: How to add error bars to plots in R.
layout: base
thumbnail: thumbnail/error-bar.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: statistical
order: 0.5
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

### Bar Chart with Error Bars


```r
library(plotly)
library(plyr)

data_mean <- ddply(ToothGrowth, c("supp", "dose"), summarise, length = mean(len))
data_sd <- ddply(ToothGrowth, c("supp", "dose"), summarise, length = sd(len))
data <- data.frame(data_mean, data_sd$length)
data <- rename(data, c("data_sd.length" = "sd"))
data$dose <- as.factor(data$dose)

p <- plot_ly(data = data[which(data$supp == 'OJ'),], x = ~dose, y = ~length, type = 'bar', name = 'OJ',
        error_y = ~list(value = sd, 
                        color = '#000000')) %>%
  add_trace(data = data[which(data$supp == 'VC'),], name = 'VC')

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="error/bar")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3915.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Scatterplot with Error Bars


```r
library(plotly)
library(plyr)

data_mean <- ddply(ToothGrowth, c("supp", "dose"), summarise, length = mean(len))
data_sd <- ddply(ToothGrowth, c("supp", "dose"), summarise, length = sd(len))
data <- data.frame(data_mean, data_sd$length)
data <- rename(data, c("data_sd.length" = "sd"))
data$dose <- as.factor(data$dose)

p <- plot_ly(data = data[which(data$supp == 'OJ'),], x = ~dose, y = ~length, type = 'scatter', mode = 'markers',
        name = 'OJ',
        error_y = ~list(value = sd, 
                        color = '#000000')) %>%
  add_trace(data = data[which(data$supp == 'VC'),], name = 'VC')

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="error/scatter")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3917.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Line Graph with Error Bars


```r
library(plotly)
library(plyr)

data_mean <- ddply(ToothGrowth, c("supp", "dose"), summarise, length = mean(len))
data_sd <- ddply(ToothGrowth, c("supp", "dose"), summarise, length = sd(len))
data <- data.frame(data_mean, data_sd$length)
data <- rename(data, c("data_sd.length" = "sd"))
data$dose <- as.factor(data$dose)

p <- plot_ly(data = data[which(data$supp == 'OJ'),], x = ~dose, y = ~length, type = 'scatter', mode = 'lines+markers',
        name = 'OJ',
        error_y = ~list(value = sd, 
                        color = '#000000')) %>%
  add_trace(data = data[which(data$supp == 'VC'),], name = 'VC')

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="error/line")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3919.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#Reference

See [https://plot.ly/r/reference](https://plot.ly/r/reference) for more information and chart attribute options!
