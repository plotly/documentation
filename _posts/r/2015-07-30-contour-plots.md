# Contour Plots in R | Examples | Plotly


# Contour Plots

### Basic contour


```r
library(plotly)
plot_ly(z = ~volcano, type = "contour")
```




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



