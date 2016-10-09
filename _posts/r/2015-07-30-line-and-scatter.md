---
title: Line and Scatter Plots in R | Examples | Plotly
name: Line and Scatter Plots
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

Plotly's R library is free and open source! [Get started](https://plot.ly/r/getting-started/) by downloading the client and [reading the primer](https://plot.ly/r/getting-started/). 
You can set up Plotly to work in [online](https://plot.ly/r/getting-started/#hosting-graphs-in-your-online-plotly-account) or [offline](https://plot.ly/r/offline/) mode. 
We also have a quick-reference [cheatsheet](https://images.plot.ly/plotly-documentation/images/r_cheat_sheet.pdf) (new!) to help you get started!

### Basic Scatterplot


```r
library(plotly)

plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length)
```

<iframe src="https://plot.ly/~RPlotBot/3576.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

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

<iframe src="https://plot.ly/~RPlotBot/3578.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Scatter Plot with Qualitative Colorscale


```r
library(plotly)

plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length, color = ~Species)
```

<iframe src="https://plot.ly/~RPlotBot/3580.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### ColorBrewer Palette Names


```r
library(plotly)

plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length, color = ~Species, colors = "Set1")
```

<iframe src="https://plot.ly/~RPlotBot/3582.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Custom Color Scales

The `colors` argument also accepts a character vector of any valid R color code(s).


```r
library(plotly)

pal <- c("red", "blue", "green")
plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length, color = ~Species, colors = pal)
```

<iframe src="https://plot.ly/~RPlotBot/3584.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

To ensure a particular data value gets mapped to particular color, provide a character vector of color codes, and match the names attribute accordingly.


```r
library(plotly)

pal <- c("red", "blue", "green")
pal <- setNames(pal, c("virginica", "setosa", "versicolor"))

plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length, color = ~Species, colors = pal)
```

<iframe src="https://plot.ly/~RPlotBot/3586.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Mapping Data to Symbol


```r
library(plotly)

plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length, type = 'scatter', mode = 'markers',
        symbol = ~Species, color = I('black'), marker = list(size = 9))
```

<iframe src="https://plot.ly/~RPlotBot/3588.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Adding Color and Size Mapping


```r
library(plotly)

d <- diamonds[sample(nrow(diamonds), 1000), ]

plot_ly(
  d, x = ~carat, y = ~price,
  color = ~carat, size = ~carat
)
```

<iframe src="https://plot.ly/~RPlotBot/3590.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

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

<iframe src="https://plot.ly/~RPlotBot/3592.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Categorical Dot Plot


```r
library(plotly)

country <- c('Switzerland (2011)', 'Chile (2013)', 'Japan (2014)', 'United States (2012)', 'Slovenia (2014)', 'Canada (2011)', 'Poland (2010)', 'Estonia (2015)', 'Luxembourg (2013)', 'Portugal (2011)')
voting_pop <- c(40, 45.7, 52, 53.6, 54.1, 54.2, 54.5, 54.7, 55.1, 56.6)
reg_voters <- c(49.1, 42, 52.7, 84.3, 51.7, 61.1, 55.3, 64.2, 91.1, 58.9)

data <- data.frame(country, voting_pop, reg_voters)

#The default order will be alphabetized unless specified as below:
data$country <- factor(data$country, levels = data[["country"]])

plot_ly(data, x = ~voting_pop, y = ~country, type = 'scatter', mode = 'markers',
        name = 'Percent of estimated voting age population',
        marker = list(color = 'rgba(156, 165, 196, 0.95)',
                      line = list(color = 'rgba(156, 165, 196, 1.0)',
                                  width = 1),
                      symbol = 'circle', 
                      size = 16)) %>%
  add_trace(x = ~reg_voters, y = ~country, name = 'Percent of estimated registered voters',
            marker = list(color = 'rgba(204, 204, 204, 0.95)',
                          line = list(color = 'rgba(217, 217, 217, 1.0)',
                                      width = 1),
                          symbol = 'circle',
                          size = 16)) %>%
  layout(title = 'Votes Cast for the Ten Lowest Voting Age Population in OECD Countries',
         xaxis = list(showgrid = FALSE, showline = TRUE,
                      linecolor = 'rgb(102, 102, 102)',
                      titlefont = list(color = 'rgb(204, 204, 204)'),
                      tickfont = list(color = 'rgb(102, 102, 102)'),
                      autotick = FALSE,
                      dtick = 10,
                      ticks = 'outside',
                      tickcolor = 'rgb(102, 102, 102)'),
         yaxis = list(title = ""),
         margin = list(l = 140, r = 40, b = 50, t = 80),
         legend = list(font = list(size = 10),
                       yanchor = 'middle', xanchor = 'right'),
         width = 800,
         height = 600,
         paper_bgcolor = 'rgb(254, 247, 234)',
         plot_bgcolor = 'rgb(254, 247, 234)',
         hovermode = 'closest')
```


```
## Error: Uh oh, an error occurred on the server.
```

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

<iframe src="https://plot.ly/~RPlotBot/3595.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Line Chart

See more examples of line charts [here](https://plot.ly/r/line-charts/).

#Reference

See [https://plot.ly/r/reference/#scatter](https://plot.ly/r/reference/#scatter) for more information and chart attribute options!
