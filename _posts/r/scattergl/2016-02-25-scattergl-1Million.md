---
title: WebGL in Plotly and R| Examples | Plotly
name: WebGL in Plotly and R
permalink: r/webgl-vs-svg-million-points/
description: How to create plots using WebGL and Plotly
layout: user-guide
language: r
page_type: example_index
---



# WebGL with 1 Million points 


```r
library(plotly)

n <- 1e6
x <- rnorm(n)
y <- 2*x + rnorm(n, sd = 5)

plot_ly(x = x, y = y, alpha  = 0.01) %>% toWebGL()
```

![plot of chunk unnamed-chunk-16](figure/unnamed-chunk-16-1.png)


```
## Warning in verify_webgl(p): The following traces don't have a WebGL
## equivalent: 1
```

# Reference

See [scattergl](https://plot.ly/r/reference/#scattergl) for more information. 
