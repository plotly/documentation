# Learn about API authentication here: plot.ly/r/getting-started
# Find your api_key here: plot.ly/settings/api

library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')


trace1 <- list(
  x = c(1, 2, 3, 4), 
  y = c(10, 15, 13, 17), 
  type = "scatter"
)
trace2 <- list(
  x = c(1, 2, 3, 4), 
  y = c(16, 5, 11, 9), 
  type = "scatter"
)
data <- list(trace1, trace2)
response <- py$plotly(data, kwargs=list(filename="get-requests-example", fileopt="overwrite"))
url <- response$url
