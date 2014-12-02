# Learn about API authentication here: plot.ly/r/getting-started
# Find your api_key here: plot.ly/settings/api

library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')


trace1 <- list(
  x = c(1, 2, 3), 
  y = c(40, 50, 60), 
  name = "yaxis data", 
  type = "scatter"
)
trace2 <- list(
  x = c(2, 3, 4), 
  y = c(4, 5, 6), 
  name = "yaxis2 data", 
  yaxis = "y2", 
  type = "scatter"
)
data <- list(trace1, trace2)
layout <- list(
  title = "Double Y Axis Example", 
  yaxis = list(title = "yaxis title"), 
  yaxis2 = list(
    title = "yaxis2 title", 
    titlefont = list(color = "rgb(148, 103, 189)"), 
    tickfont = list(color = "rgb(148, 103, 189)"), 
    overlaying = "y", 
    side = "right"
  )
)
response <- py$plotly(data, kwargs=list(layout=layout, filename="multiple-axes-double", fileopt="overwrite"))
url <- response$url
