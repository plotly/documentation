library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

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
  legend = list(font = list(size = 16)), 
  font = list(size = 16), 
  orientation = 270, 
  radialaxis = list(ticksuffix = "%")
)

response <- p$plotly(data, kwargs=list(layout=layout, filename="polar-area-chart", fileopt="overwrite"))
url <- response$url
filename <- response$filename