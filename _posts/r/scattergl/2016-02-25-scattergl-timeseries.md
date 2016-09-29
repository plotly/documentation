---
title: WebGL in Plotly and R| Examples | Plotly
name: WebGL in Plotly and R
permalink: r/webgl-vs-svg-time-series/
description: How to create plots using WebGL and Plotly
layout: user-guide
language: r
page_type: example_index
---



# WebGL for time series data (24381 points)


```r
library(plotly)

# Read some weather data
df <- readr::read_csv(
  'https://cdn.rawgit.com/plotly/documentation/source/_posts/r/scattergl/weather-data.csv'
)

# Convert to dates
df$Date <- as.Date(df$Date, format =  "%m/%d/%Y")

plot_ly(df, x = ~Date, y = ~Mean_TemperatureC) %>% 
  add_lines(color = I("purple")) %>%
  toWebGL() %>%
  layout(title = "Mean Temparature in Seattle (1948 - 2015)",
         yaxis = list(title = "Temperature (<sup>o</sup>C)"))
```


