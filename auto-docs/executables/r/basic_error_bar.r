# Learn about API authentication here: plot.ly/r/getting-started
# Find your api_key here: plot.ly/settings/api

library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')


data <- list(
  list(
    x = c(0, 1, 2), 
    y = c(6, 10, 2), 
    error_y = list(
      type = "data", 
      array = c(1, 2, 3), 
      visible = TRUE
    ), 
    type = "scatter"
  )
)
response <- py$plotly(data, kwargs=list(filename="basic-error-bar", fileopt="overwrite"))
url <- response$url
