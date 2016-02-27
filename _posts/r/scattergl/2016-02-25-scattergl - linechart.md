---
title: WebGL in Plotly and R| Examples | Plotly
name: WebGL in Plotly and R
permalink: r/webgl-vs-svg-line-chart/
description: How to create plots using WebGL and Plotly
layout: user-guide
language: r
page_type: example_index
---
# WebGL in Plotly and R

Now in Ploty you can implement WebGL with `type = "scattergl"` in place of `scatter` for increased speed, improved interactivity, and the ability to plot even more data!


### Compare WebGL and SVG

Checkout this [post](/r/compare-webgl-svg/) for a comparison of WebGL and SVG scatter plots with 75000 data points.

### WebGL with many traces

```r
library(plotly)

# Random Walk function
randWalk <- function(n = 1000, mu = 0, std = 1){
  y <- rep(0, n)
  for(i in 2:n){
    y[i] <- y[i-1] + rnorm(1, mu, std)
  }
  
  return(y)
}

# Create a lot of random walks
nRand <- 10000
nPlot <- 25
p <- plot_ly(x = 1:nRand, y = randWalk(n = nRand), type = "scattergl", mode = "lines", 
             line = list(width = 3, smoothing = 0.5)) %>% 
  layout(showlegend = F)

for(i in 1:nPlot){
  p <- add_trace(p, x = 1:nRand, y = randWalk(n = nRand), type = "scattergl", mode = "lines")
}

p
```

<iframe src="https://plot.ly/~RPlotBot/2867/randwalkn-nrand-vs-1nrand/"width="900px" height="600px" scrolling="no" seamless="seamless"></iframe>

# Reference
see [scattergl](https://plot.ly/r/reference/#scattergl) for more information. 




