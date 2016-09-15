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
order: 1
---


# Contour Plots


```r
### Basic contour
library(plotly)
plot_ly(z = volcano, type = "contour")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/209.embed" width="800" frameBorder="0"></iframe>

### 2D Density Contour Plot


```r
x <- rnorm(200)
y <- rnorm(200)
s <- subplot(
  plot_ly(x = x, type = "histogram", showlegend=FALSE),
  plotly_empty(),
  plot_ly(x = x, y = y, type = "histogram2dcontour", showlegend=FALSE),
  plot_ly(y = y, type = "histogram", showlegend=FALSE),
  nrows = 2, heights = c(0.2, 0.8), widths = c(0.8, 0.2),
  shareX = TRUE, shareY = TRUE, titleX = FALSE, titleY = FALSE
)
layout(s)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/3014.embed" width="800" frameBorder="0"></iframe>
