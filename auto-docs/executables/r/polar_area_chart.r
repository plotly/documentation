# Learn about API authentication here: plot.ly/r/getting-started
# Find your api_key here: plot.ly/settings/api

library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')


trace1 <- list(
  r = c(77.5, 72.5, 70.0, 45.0, 22.5, 42.5, 40.0, 62.5), 
  t = c("North", "N-E", "East", "S-E", "South", "S-W", "West", "N-W"), 
  name = "11-14 m/s", 
  marker = list(color = "rgb(106,81,163)"), 
  type = "area"
)
trace2 <- list(
  r = c(57.5, 50.0, 45.0, 35.0, 20.0, 22.5, 37.5, 55.0), 
  t = c("North", "N-E", "East", "S-E", "South", "S-W", "West", "N-W"), 
  name = "8-11 m/s", 
  marker = list(color = "rgb(158,154,200)"), 
  type = "area"
)
trace3 <- list(
  r = c(40.0, 30.0, 30.0, 35.0, 7.5, 7.5, 32.5, 40.0), 
  t = c("North", "N-E", "East", "S-E", "South", "S-W", "West", "N-W"), 
  name = "5-8 m/s", 
  marker = list(color = "rgb(203,201,226)"), 
  type = "area"
)
trace4 <- list(
  r = c(20.0, 7.5, 15.0, 22.5, 2.5, 2.5, 12.5, 22.5), 
  t = c("North", "N-E", "East", "S-E", "South", "S-W", "West", "N-W"), 
  name = "< 5 m/s", 
  marker = list(color = "rgb(242,240,247)"), 
  type = "area"
)
data <- list(trace1, trace2, trace3, trace4)
layout <- list(
  title = "Wind Speed Distribution in Laurel, NE", 
  font = list(size = 16), 
  legend = list(font = list(size = 16)), 
  radialaxis = list(ticksuffix = "%"), 
  orientation = 270
)
response <- py$plotly(data, kwargs=list(layout=layout, filename="polar-area-chart", fileopt="overwrite"))
url <- response$url
