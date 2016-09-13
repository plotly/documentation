---
title: Contour Plots in R | Examples | Plotly
name: Contour Plots
permalink: r/contour-plots/
description: How to make a contour plot in R. Two examples of contour plots of matrices and 2D distributions.
layout: base
thumbnail: thumbnail/contour.jpg
language: r
page_type: example_index
has_thumbnail: false
display_as: chart_type
order: 6
---


# Contour Plots

### Basic contour


```r
library(plotly)
plot_ly(z = ~volcano, type = "contour")
```

![plot of chunk unnamed-chunk-2](figure/unnamed-chunk-2-1.png)




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
```

```
## Warning: No trace type specified and no positional attributes specified
```

```r
layout(s, showlegend = FALSE)
```

![plot of chunk unnamed-chunk-4](figure/unnamed-chunk-4-1.png)



