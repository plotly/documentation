---
title: Line and Scatter Plots in R | Examples | Plotly
name: Line and Scatter Plots
permalink: r/line-and-scatter/
description: How to create line and scatter plots in R. Seven examples of basic and advanced scatter plots, time series line plots, colored charts, and density plots.
layout: base
thumbnail: /images/line-and-scatter.png
language: r
page_type: example_index
has_thumbnail: true
display_as: chart_type
order: 1
---


# Line and Scatter Plots in R


```r
# Simple scatterplot
library(plotly)
plot_ly(data = iris, x = Sepal.Length, y = Petal.Length, mode = "markers")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/259.embed" width="800" frameBorder="0"></iframe>

### Scatter Plot with Qualitative Colorscale

```r
plot_ly(data = iris, x = Sepal.Length, y = Petal.Length, mode = "markers",
        color = Species,
        filename="r-docs/scatter-with-qualitative-colorscale")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/271.embed" width="800" frameBorder="0"></iframe>

### ColorBrewer Palette Names

```r
# By default, colors will 'span the gamut'
# scales::show_col(RColorBrewer::brewer.pal("Set1"))
plot_ly(data = iris, x = Sepal.Length, y = Petal.Length, mode = "markers",
        color = Species, colors = "Set1",
        filename="r-docs/scatter-colorbrewer")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/273.embed" width="800" frameBorder="0"></iframe>

### Custom Color Scales

```r
# pass RGB or hex color codes directly to colors for finer control
pal <- RColorBrewer::brewer.pal(nlevels(iris$Species), "Set1")
plot_ly(data = iris, x = Sepal.Length, y = Petal.Length, color = Species,
        colors = pal, mode = "markers",
        filename="r-docs/scatter-custom-color-scale")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/263.embed" width="800" frameBorder="0"></iframe>

### Adding Color and Size Mapping

```r
library(plotly)
d <- diamonds[sample(nrow(diamonds), 1000), ]
# note how size is automatically scaled and added as hover text
plot_ly(d, x = carat, y = price, size = carat, mode = "markers", filename="r-docs/basic-bubble")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/205.embed" width="800" frameBorder="0"></iframe>

```r
plot_ly(d, x = carat, y = price, text = paste("Clarity: ", clarity),
        mode = "markers", color = carat, size = carat, opacity = carat,
        filename="r-docs/custom-bubble-text")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/207.embed" width="800" frameBorder="0"></iframe>

### Basic Time Series Plot with Loess Smooth

```r
p <- plot_ly(economics, x = date, y = uempmed, name = "unemployment", filename="r-docs/basic-time-series")
p %>% add_trace(y = fitted(loess(uempmed ~ as.numeric(date))), filename="r-docs/time-series-with-fit")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/275.embed" width="800" frameBorder="0"></iframe>

### Density Plot

```r
dens <- with(diamonds, tapply(price, INDEX = cut, density))
df <- data.frame(
  x = unlist(lapply(dens, "[[", "x")),
  y = unlist(lapply(dens, "[[", "y")),
  cut = rep(names(dens), each = length(dens[[1]]$x))
)
plot_ly(df, x = x, y = y, color = cut, filename="r-docs/density-plot")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/267.embed" width="800" frameBorder="0"></iframe>

### Line Interpolation Options

```r
x <- 1:5
y <- c(1, 3, 2, 3, 1)
plot_ly(x = x, y = y, name = "linear", line = list(shape = "linear"), filename="r-docs/line-shape-options") %>%
  add_trace(y = y + 5, name = "spline", line = list(shape = "spline")) %>%
  add_trace(y = y + 10, name = "vhv", line = list(shape = "vhv")) %>%
  add_trace(y = y + 15, name = "hvh", line = list(shape = "hvh")) %>%
  add_trace(y = y + 20, name = "vh", line = list(shape = "vh")) %>%
  add_trace(y = y + 25, name = "hv", line = list(shape = "hv"))
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/269.embed" width="800" frameBorder="0"></iframe>
