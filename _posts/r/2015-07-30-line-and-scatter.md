---
title: Scatter and Line Plots in R | Examples | Plotly
name: Scatter and Line Plots
permalink: r/line-and-scatter/
description: How to create line and scatter plots in R. Examples of basic and advanced scatter plots, time series line plots, colored charts, and density plots.
layout: base
thumbnail: thumbnail/line-and-scatter.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: chart_type
order: 1
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
## [1] '4.5.2'
```

### Basic Scatterplot


```r
library(plotly)

plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length)
```

<iframe src="https://plot.ly/~RPlotBot/3831.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Styled Scatter Plot


```r
library(plotly)

plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length,
        marker = list(size = 10,
                       color = 'rgba(255, 182, 193, .9)',
                       line = list(color = 'rgba(152, 0, 0, .8)',
                                   width = 2))) %>%
  layout(title = 'Styled Scatter',
         yaxis = list(zeroline = FALSE),
         xaxis = list(zeroline = FALSE))
```

<iframe src="https://plot.ly/~RPlotBot/3833.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Scatter Plot with Qualitative Colorscale


```r
library(plotly)

plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length, color = ~Species)
```

<iframe src="https://plot.ly/~RPlotBot/3835.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### ColorBrewer Palette Names


```r
library(plotly)

plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length, color = ~Species, colors = "Set1")
```

<iframe src="https://plot.ly/~RPlotBot/3837.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Custom Color Scales

The `colors` argument also accepts a character vector of any valid R color code(s).


```r
library(plotly)

pal <- c("red", "blue", "green")
plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length, color = ~Species, colors = pal)
```

<iframe src="https://plot.ly/~RPlotBot/3839.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

To ensure a particular data value gets mapped to particular color, provide a character vector of color codes, and match the names attribute accordingly.


```r
library(plotly)

pal <- c("red", "blue", "green")
pal <- setNames(pal, c("virginica", "setosa", "versicolor"))

plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length, color = ~Species, colors = pal)
```

<iframe src="https://plot.ly/~RPlotBot/3841.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Mapping Data to Symbol


```r
library(plotly)

plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length, type = 'scatter', mode = 'markers',
        symbol = ~Species, color = I('black'), marker = list(size = 9))
```

<iframe src="https://plot.ly/~RPlotBot/3843.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Adding Color and Size Mapping


```r
library(plotly)

d <- diamonds[sample(nrow(diamonds), 1000), ]

plot_ly(
  d, x = ~carat, y = ~price,
  color = ~carat, size = ~carat
)
```

<iframe src="https://plot.ly/~RPlotBot/3845.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Data Labels on Hover


```r
library(plotly)

d <- diamonds[sample(nrow(diamonds), 1000), ]

plot_ly(
  d, x = ~carat, y = ~price,
  # Hover text:
  text = ~paste("Price: ", price, '$<br>Cut:', cut),
  color = ~carat, size = ~carat
)
```

<iframe src="https://plot.ly/~RPlotBot/3847.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Plotting markers and lines, efficiently


```r
library(plotly)

trace_0 <- rnorm(100, mean = 5)
trace_1 <- rnorm(100, mean = 0)
trace_2 <- rnorm(100, mean = -5)
x <- c(1:100)

data <- data.frame(x, trace_0, trace_1, trace_2)

plot_ly(data, x = ~x) %>%
  add_trace(y = ~trace_0, name = 'trace 0',mode = 'lines') %>%
  add_trace(y = ~trace_1, name = 'trace 1', mode = 'lines+markers') %>%
  add_trace(y = ~trace_2, name = 'trace 2', mode = 'markers')
```

It is also possible to pass the first trace in the plot_ly function. In such cases, the type of graph has to be specified, as shown below:


```r
library(plotly)

trace_0 <- rnorm(100, mean = 5)
trace_1 <- rnorm(100, mean = 0)
trace_2 <- rnorm(100, mean = -5)
x <- c(1:100)

data <- data.frame(x, trace_0, trace_1, trace_2)

plot_ly(data, x = ~x, y = ~trace_0, name = 'trace 0', type = 'scatter', mode = 'lines') %>%
  add_trace(y = ~trace_1, name = 'trace 1', mode = 'lines+markers') %>%
  add_trace(y = ~trace_2, name = 'trace 2', mode = 'markers')
```

<iframe src="https://plot.ly/~RPlotBot/3849.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Line Chart

See more examples of line charts [here](https://plot.ly/r/line-charts/).

#Reference

See [https://plot.ly/r/reference/#scatter](https://plot.ly/r/reference/#scatter) for more information and chart attribute options!
