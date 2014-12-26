# Learn about API authentication here: plot.ly/r/getting-started
# Find your api_key here: plot.ly/settings/api

library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    x = c(1, 2, 3, 4), 
    y = c(2, 1, 3, 4), 
    error_x = list(
      type = "percent", 
      value = 10
    ), 
    type = "scatter"
  )
)
response <- py$plotly(data, kwargs=list(filename="error-bar-horizontal", fileopt="overwrite"))
url <- response$url
