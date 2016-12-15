---
title: Contour Plots in R | Examples | Plotly
name: Contour Plots
permalink: r/contour-plots/
description: How to make a contour plot in R. Two examples of contour plots of matrices and 2D distributions.
layout: base
thumbnail: thumbnail/contour.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: scientific
order: 6
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

### Basic Contour


```r
library(plotly)

p <- plot_ly(z = ~volcano, type = "contour")

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="contour/basic")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3115.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Create Matrix and Plot Contour
This example is based on (this)[https://www.r-statistics.com/2016/07/using-2d-contour-plots-within-ggplot2-to-visualize-relationships-between-three-variables/] r-statistics post.


```r
library(plotly)
library(stringr)
library(reshape2)

data.loess <- loess(qsec ~ wt * hp, data = mtcars)

# Create a sequence of incrementally increasing (by 0.3 units) values for both wt and hp
xgrid <-  seq(min(mtcars$wt), max(mtcars$wt), 0.3)
ygrid <-  seq(min(mtcars$hp), max(mtcars$hp), 0.3)
# Generate a dataframe with every possible combination of wt and hp
data.fit <-  expand.grid(wt = xgrid, hp = ygrid)
# Feed the dataframe into the loess model and receive a matrix output with estimates of
# acceleration for each combination of wt and hp
mtrx3d <-  predict(data.loess, newdata = data.fit)
# Abbreviated display of final matrix
mtrx3d[1:4, 1:4]

# Transform data to long form
mtrx.melt <- melt(mtrx3d, id.vars = c('wt', 'hp'), measure.vars = 'qsec')
names(mtrx.melt) <- c('wt', 'hp', 'qsec')
# Return data to numeric form
mtrx.melt$wt <- as.numeric(str_sub(mtrx.melt$wt, str_locate(mtrx.melt$wt, '=')[1,1] + 1))
mtrx.melt$hp <- as.numeric(str_sub(mtrx.melt$hp, str_locate(mtrx.melt$hp, '=')[1,1] + 1))

p <- plot_ly(mtrx.melt, x = ~wt, y = ~hp, z = ~qsec, type = "contour") %>% layout(autosize = F, width = 600, height = 500)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="contour/advanced")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3469.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### 2D Density Contour Plot


```r
x <- rnorm(200)
y <- rnorm(200)
s <- subplot(
  plot_ly(x = x, type = "histogram"),
  plotly_empty(),
  plot_ly(x = x, y = y, type = "histogram2dcontour"),
  plot_ly(y = y, type = "histogram"),
  nrows = 2, heights = c(0.2, 0.8), widths = c(0.8, 0.2), margin = 0,
  shareX = TRUE, shareY = TRUE, titleX = FALSE, titleY = FALSE
)
p <- layout(s, showlegend = FALSE)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="contour/joint")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3117.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Reference
See [https://plot.ly/python/reference/#contour](https://plot.ly/python/reference/#contour) for more information and chart attribute options!
