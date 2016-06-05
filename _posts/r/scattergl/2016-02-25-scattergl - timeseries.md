---
title: WebGL in Plotly and R| Examples | Plotly
name: WebGL in Plotly and R
permalink: r/webgl-vs-svg-time-series/
description: How to create plots using WebGL and Plotly
layout: user-guide
language: r
page_type: example_index
---
# WebGL in Plotly and R

Now in Ploty you can implement WebGL with `type = "scattergl"` in place of `scatter` for increased speed, improved interactivity, and the ability to plot even more data!


### Compare WebGL and SVG

Checkout this [post](/r/compare-webgl-svg/) for a comparison of WebGL and SVG scatter plots with 75000 data points.

### WebGL for time series data (24381 points)

```r
library(plotly)

# Read some weather data
df <- read.csv('https://cdn.rawgit.com/plotly/documentation/source/_posts/r/scattergl/weather-data.csv')

# Convert to dates
df$Date <- zoo::as.Date(df$Date, format =  "%m/%d/%Y")

p <- plot_ly(df, x = Date, y = Mean_TemperatureC, name = "Mean Temp.", type = "scattergl", 
             marker = list(color = "#3b3b9e")) %>% 
  layout(title = "Mean Temparature in Seattle (1948 - 2015)",
         yaxis = list(title = "Temperature (<sup>o</sup>C)"))
p
```

<iframe src="https://plot.ly/~RPlotBot/2879/mean-temparature-in-seattle-1948-2015/" width="950" height="600px" scrolling="no" seamless="seamless" align="left" display = "inline-block"></iframe>

# Reference
see [scattergl](https://plot.ly/r/reference/#scattergl) for more information. 




