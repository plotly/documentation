# Learn about API authentication here: plot.ly/r/getting-started
# Find your api_key here: plot.ly/settings/api

library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')


trace1 <- list(
  x = c(0, 1, 2), 
  y = c(1, 2, 3), 
  name = "First Trace", 
  showlegend = FALSE, 
  type = "scatter"
)
trace2 <- list(
  x = c(0, 1, 2, 3), 
  y = c(8, 4, 2, 0), 
  name = "Second Trace", 
  showlegend = TRUE, 
  type = "scatter"
)
data <- list(trace1, trace2)
response <- py$plotly(data, kwargs=list(filename="show-legend", fileopt="overwrite"))
url <- response$url
