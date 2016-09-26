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



### Basic Scatterplot


```r
library(plotly)
p <- plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length)
p
```

<iframe src="https://plot.ly/~RPlotBot/3438.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Scatter Plot with Qualitative Colorscale


```r
add_markers(p, color = ~Species)
```

<iframe src="https://plot.ly/~RPlotBot/3440.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### ColorBrewer Palette Names


```r
add_markers(p, color = ~Species, colors = "Set1")
```

<iframe src="https://plot.ly/~RPlotBot/3442.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Custom Color Scales

The `colors` argument also accepts a character vector of any valid R color code(s).


```r
pal <- c("red", "blue", "green")
add_markers(p, color = ~Species, colors = pal)
```

<iframe src="https://plot.ly/~RPlotBot/3444.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

To ensure a particular data value gets mapped to particular color, provide a character vector of color codes, and match the names attribute accordingly.


```r
pal <- setNames(pal, c("virginica", "setosa", "versicolor"))
add_markers(p, color = ~Species, colors = pal)
```

<iframe src="https://plot.ly/~RPlotBot/3446.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Plotting markers and lines, efficiently


```r
add_trace(p, color = ~Species, mode = "markers+lines")
```

<iframe src="https://plot.ly/~RPlotBot/3448.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

## Mapping data to symbol and linetype


```r
add_trace(p, symbol = ~Species, linetype = ~Species)
```

<iframe src="https://plot.ly/~RPlotBot/3450.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Adding Color and Size Mapping


```r
d <- diamonds[sample(nrow(diamonds), 1000), ]
plot_ly(
  d, x = ~carat, y = ~price,
  text = ~paste("Clarity: ", clarity),
  color = ~carat, size = ~carat
)
```

<iframe src="https://plot.ly/~RPlotBot/3452.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Density Plot


```r
dens <- with(diamonds, tapply(price, INDEX = cut, density))
df <- data.frame(
  x = unlist(lapply(dens, "[[", "x")),
  y = unlist(lapply(dens, "[[", "y")),
  cut = rep(names(dens), each = length(dens[[1]]$x))
)
plot_ly(df, x = ~x, y = ~y, color = ~cut) %>%
  add_lines()
```

<iframe src="https://plot.ly/~RPlotBot/3454.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Line Interpolation Options


```r
x <- 1:5
y <- c(1, 3, 2, 3, 1)
plot_ly(x = ~x) %>%
  add_lines(y = ~y, name = "linear", line = list(shape = "linear")) %>%
  add_lines(y = y + 5, name = "spline", line = list(shape = "spline")) %>%
  add_lines(y = y + 10, name = "vhv", line = list(shape = "vhv")) %>%
  add_lines(y = y + 15, name = "hvh", line = list(shape = "hvh")) %>%
  add_lines(y = y + 20, name = "vh", line = list(shape = "vh")) %>%
  add_lines(y = y + 25, name = "hv", line = list(shape = "hv"))
```

<iframe src="https://plot.ly/~RPlotBot/3456.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
