---
title: Filled Area Plots in R | Examples
name: Filled Area Plots
permalink: r/filled-area-plots/
description: How to make a filled area plot in R. An area chart displays a solid color between the traces of a graph.
layout: base
thumbnail: thumbnail/area.jpg
language: r
has_thumbnail: true
display_as: basic
order: 3.5
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
## [1] '4.5.6.9000'
```

### Basic Filled Area Plot

To make an area plot with interior filling set `fill` to `"tozeroy"` in the call for the second trace.
For more informations and options about the `fill` option checkout [https://plot.ly/r/reference/#scatter-fill](https://plot.ly/r/reference/#scatter-fill)


```r
library(plotly)

density <- density(diamonds$carat)

p <- plot_ly(x = ~density$x, y = ~density$y, type = 'scatter', mode = 'lines', fill = 'tozeroy') %>%
  layout(xaxis = list(title = 'Carat'),
         yaxis = list(title = 'Density'))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="area/basic")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3621.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Filled Area Plot with Multiple Traces

To make a filled area plot set `fill` to `"tozeroy"`.


```r
library(plotly)

diamonds1 <- diamonds[which(diamonds$cut == "Fair"),]
density1 <- density(diamonds1$carat)

diamonds2 <- diamonds[which(diamonds$cut == "Ideal"),]
density2 <- density(diamonds2$carat)

p <- plot_ly(x = ~density1$x, y = ~density1$y, type = 'scatter', mode = 'lines', name = 'Fair cut', fill = 'tozeroy') %>%
  add_trace(x = ~density2$x, y = ~density2$y, name = 'Ideal cut', fill = 'tozeroy') %>%
  layout(xaxis = list(title = 'Carat'),
         yaxis = list(title = 'Density'))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="area/basic2")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3613.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Custom Colors


```r
library(plotly)

diamonds1 <- diamonds[which(diamonds$cut == "Fair"),]
density1 <- density(diamonds1$carat)

diamonds2 <- diamonds[which(diamonds$cut == "Ideal"),]
density2 <- density(diamonds2$carat)

p <- plot_ly(x = ~density1$x, y = ~density1$y, type = 'scatter', mode = 'lines', name = 'Fair cut', fill = 'tozeroy',
        fillcolor = 'rgba(168, 216, 234, 0.5)',
        line = list(width = 0.5)) %>%
  add_trace(x = ~density2$x, y = ~density2$y, name = 'Ideal cut', fill = 'tozeroy',
            fillcolor = 'rgba(255, 212, 96, 0.5)') %>%
  layout(xaxis = list(title = 'Carat'),
         yaxis = list(title = 'Density'))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="area/colors")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3615.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Area Plot without Lines

To make an area plot without lines set `mode` to `"none"`.


```r
library(plotly)

diamonds1 <- diamonds[which(diamonds$cut == "Fair"),]
density1 <- density(diamonds1$carat)

diamonds2 <- diamonds[which(diamonds$cut == "Ideal"),]
density2 <- density(diamonds2$carat)

p <- plot_ly(x = ~density1$x, y = ~density1$y, type = 'scatter', mode = 'none', name = 'Fair cut', fill = 'tozeroy',
        fillcolor = 'rgba(168, 216, 234, 0.5)') %>%
  add_trace(x = ~density2$x, y = ~density2$y, name = 'Ideal cut', fill = 'tozeroy',
            fillcolor = 'rgba(255, 212, 96, 0.5)') %>%
  layout(xaxis = list(title = 'Carat'),
         yaxis = list(title = 'Density'))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="area/nolines")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3617.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Interior Filling for Area Chart

To make an area plot with interior filling set `fill` to `"tonexty"` in the call for the second trace.
For more informations and options about the `fill` option checkout [https://plot.ly/r/reference/#scatter-fill](https://plot.ly/r/reference/#scatter-fill)


```r
library(plotly)

month <- c('January', 'February', 'March', 'April', 'May', 'June', 'July',
           'August', 'September', 'October', 'November', 'December')
high_2014 <- c(28.8, 28.5, 37.0, 56.8, 69.7, 79.7, 78.5, 77.8, 74.1, 62.6, 45.3, 39.9)
low_2014 <- c(12.7, 14.3, 18.6, 35.5, 49.9, 58.0, 60.0, 58.6, 51.7, 45.2, 32.2, 29.1)
data <- data.frame(month, high_2014, low_2014)
data$average_2014 <- rowMeans(data[,c("high_2014", "low_2014")])

#The default order will be alphabetized unless specified as below:
data$month <- factor(data$month, levels = data[["month"]])

p <- plot_ly(data, x = ~month, y = ~high_2014, type = 'scatter', mode = 'lines',
        line = list(color = 'rgba(0,100,80,1)'),
        showlegend = FALSE, name = 'High 2014') %>%
  add_trace(y = ~low_2014, type = 'scatter', mode = 'lines',
            fill = 'tonexty', fillcolor='rgba(0,100,80,0.2)', line = list(color = 'rgba(0,100,80,1)'),
            showlegend = FALSE, name = 'Low 2014') %>%
  layout(title = "High and Low Temperatures in New York",
         paper_bgcolor='rgb(255,255,255)', plot_bgcolor='rgb(229,229,229)',
         xaxis = list(title = "Months",
                      gridcolor = 'rgb(255,255,255)',
                      showgrid = TRUE,
                      showline = FALSE,
                      showticklabels = TRUE,
                      tickcolor = 'rgb(127,127,127)',
                      ticks = 'outside',
                      zeroline = FALSE),
         yaxis = list(title = "Temperature (degrees F)",
                      gridcolor = 'rgb(255,255,255)',
                      showgrid = TRUE,
                      showline = FALSE,
                      showticklabels = TRUE,
                      tickcolor = 'rgb(127,127,127)',
                      ticks = 'outside',
                      zeroline = FALSE))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="area/interior")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3619.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Stacked Area Chart with Original Values


```r
library(plotly)

data <- t(USPersonalExpenditure)
data <- data.frame("year"=rownames(data), data)

p <- plot_ly(data, x = ~year, y = ~Food.and.Tobacco, name = 'Food and Tobacco', type = 'scatter', mode = 'none', fill = 'tozeroy', fillcolor = '#F5FF8D') %>%
  add_trace(y = ~Household.Operation, name = 'Household Operation', fillcolor = '#50CB86') %>%
  add_trace(y = ~Medical.and.Health, name = 'Medical and Health', fillcolor = '#4C74C9') %>%
  add_trace(y = ~Personal.Care, name = 'Personal Care', fillcolor = '#700961') %>%
  add_trace(y = ~Private.Education, name = 'Private Education', fillcolor = '#312F44') %>%
  layout(title = 'United States Personal Expenditures by Categories',
         xaxis = list(title = "",
                      showgrid = FALSE),
         yaxis = list(title = "Expenditures (in billions of dollars)",
                      showgrid = FALSE))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="area/stackedoriginal")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3623.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Stacked Area Chart with Cumulative Values


```r
library(plotly)

data <- t(USPersonalExpenditure)
data2 <- data/rowSums(data)*100
data2 <- data.frame("year"=rownames(data2), data2)

# Transforming into a cumulative table:
for (i in c(6:3)) {
  data2[,i-1] <- data2[,i-1] + data2[,i]
}

p <- plot_ly(data2, x = ~year, y = ~Food.and.Tobacco, name = 'Food and Tobacco', type = 'scatter', mode = 'none', fill = 'tozeroy', fillcolor = '#F5FF8D') %>%
  add_trace(y = ~Household.Operation, name = 'Household Operation', fillcolor = '#50CB86') %>%
  add_trace(y = ~Medical.and.Health, name = 'Medical and Health', fillcolor = '#4C74C9') %>%
  add_trace(y = ~Personal.Care, name = 'Personal Care', fillcolor = '#700961') %>%
  add_trace(y = ~Private.Education, name = 'Private Education', fillcolor = '#312F44') %>%
  layout(title = 'United States Personal Expenditures by Categories',
         xaxis = list(title = "",
                      showgrid = FALSE),
         yaxis = list(title = "Proportion from the Total Expenditures",
                      showgrid = FALSE,
                      ticksuffix = '%'))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="area/stackedcum")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3625.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#Reference

See [https://plot.ly/r/reference/#area](https://plot.ly/r/reference/#area) for more information and chart attribute options!
