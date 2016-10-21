---
title: 2D Histograms in R | Examples | Plotly
name: 2D Histograms
permalink: r/2D-Histogram/
description: How to make a 2D histogram in R. A 2D histogram is a visualization of a bivariate distribution.
layout: base
thumbnail: thumbnail/histogram2d.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: statistical
order: 3
output:
  html_document:
    keep_md: true
---



#### Basic 2D Histogram

2D histograms require `x`/`y`, but in contrast to heatmaps, `z` is optional. If `z` is not provided, binning occurs in the browser (see [here](https://plot.ly/r/reference/#histogram2d-histnorm) for a list of binning options).


```r
# install.packages('mvtnorm')
library(plotly)

s <- matrix(c(1, -.75, -.75, 1), ncol = 2)
obs <- mvtnorm::rmvnorm(500, sigma = s)
p <- plot_ly(x = obs[,1], y = obs[,2])
subplot(
  p %>% add_markers(alpha = 0.2),
  p %>% add_histogram2d()
)
```

```
## Error in loadNamespace(name): there is no package called 'webshot'
```

```r
p
```

```
## Error in loadNamespace(name): there is no package called 'webshot'
```

```r
# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="histogram2d/basic")
```

<iframe src="https://plot.ly/~RPlotBot/3430.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Colorscale
If `z` is not provided, the only way to control coloring is through the [colorscale attribute](https://plot.ly/r/reference/#histogram2d-colorscale)


```r
p %>% add_histogram2d(colorscale = "Blues")
```

```
## Error in loadNamespace(name): there is no package called 'webshot'
```

```r
p
```

```
## Error in loadNamespace(name): there is no package called 'webshot'
```

```r
# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="histogram2d/colorscale")
```

<iframe src="https://plot.ly/~RPlotBot/3045.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Z Matrix
If you want more control for the binning algorithm, you can supply a 2D table or matrix to `z`. In this case, the R package will impose it's colorscale default (and the `colors` argument can be used to control the colorscale from R):


```r
cnt <- with(diamonds, table(cut, clarity))
p <- plot_ly(diamonds, x = ~cut, y = ~clarity, z = ~cnt) %>%
  add_histogram2d()
p
```

```
## Error in loadNamespace(name): there is no package called 'webshot'
```

```r
# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="histogram2d/no-binning")
```

<iframe src="https://plot.ly/~RPlotBot/3047.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
