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

### WebGL for time series data

```r
library(plotly)

# Read some weather data
df <- read.csv('https://cdn.rawgit.com/plotly/documentation/source/_posts/r/scattergl/weather-data.csv')

# Convert to dates
df$Date <- zoo::as.Date(df$Date, format =  "%m/%d/%Y")

# Plot using plotly

plot_bgcolor <- "34495E"
paper_bgcolor <- "E4F1FE"

p <- plot_ly(df, x = Date, y = Mean_TemperatureC, name = "Mean Temp.", type = "scattergl", 
             marker = list(color = "F6FFD2")) %>% 
  layout(title = "Mean Temparature in Seattle (1948 - 2015)",
         yaxis = list(title = "Temperature (<sup>o</sup>C)"),
         plot_bgcolor = plot_bgcolor, 
         paper_bgcolor = paper_bgcolor)

p
```

<iframe src="https://plot.ly/~RPlotBot/2873/mean-temparature-in-seattle-1948-2015/" width="800px" height="600px" scrolling="no" seamless="seamless"></iframe>

# Reference
see [scattergl](https://plot.ly/r/reference/#scattergl) for more information. 




