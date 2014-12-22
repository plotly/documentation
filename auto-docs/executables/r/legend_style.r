# Learn about API authentication here: plot.ly/r/getting-started
# Find your api_key here: plot.ly/settings/api

library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')


trace1 <- list(
  x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  y = c(0, 3, 6, 4, 5, 2, 3, 5, 4), 
  type = "scatter"
)
trace2 <- list(
  x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  y = c(0, 4, 7, 8, 3, 6, 3, 3, 4), 
  type = "scatter"
)
data <- list(trace1, trace2)
layout <- list(legend = list(
    x = 0, 
    y = 1, 
    traceorder = "normal", 
    font = list(
      family = "sans-serif", 
      size = 12, 
      color = "#000"
    ), 
    bgcolor = "#E2E2E2", 
    bordercolor = "#FFFFFF", 
    borderwidth = 2
  ))
response <- py$plotly(data, kwargs=list(layout=layout, filename="legend-style", fileopt="overwrite"))
url <- response$url
