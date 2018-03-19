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
chart_link = api_create(p, filename="error-bar")
```

```
## Error: Client error: (400) Bad Request
## 	Figure field is invalid. Reason: Raw data arrays are not allowed at this endpoint. Use grid references instead. Raw data found at the following paths in the figure [('data', 0, u'error_y', u'value'), ('data', 1, u'error_y', u'value')]
```

```r
chart_link
```

```
## Error in eval(expr, envir, enclos): object 'chart_link' not found
```


```
## Error in eval(expr, envir, enclos): object 'chart_link' not found
```

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
chart_link = api_create(p, filename="error-scatter")
```

```
## Error: Client error: (400) Bad Request
## 	Figure field is invalid. Reason: Raw data arrays are not allowed at this endpoint. Use grid references instead. Raw data found at the following paths in the figure [('data', 0, u'error_y', u'value'), ('data', 1, u'error_y', u'value')]
```

```r
chart_link
```

```
## Error in eval(expr, envir, enclos): object 'chart_link' not found
```


```
## Error in eval(expr, envir, enclos): object 'chart_link' not found
```

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
chart_link = api_create(p, filename="error-line")
```

```
## Error: Client error: (400) Bad Request
## 	Figure field is invalid. Reason: Raw data arrays are not allowed at this endpoint. Use grid references instead. Raw data found at the following paths in the figure [('data', 0, u'error_y', u'value'), ('data', 1, u'error_y', u'value')]
```

```r
chart_link
```

```
## Error in eval(expr, envir, enclos): object 'chart_link' not found
```


```
## Error in eval(expr, envir, enclos): object 'chart_link' not found
```

### Reference

See [https://plot.ly/r/reference](https://plot.ly/r/reference) for more information and chart attribute options!
