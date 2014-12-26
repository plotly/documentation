# Learn about API authentication here: plot.ly/r/getting-started
# Find your api_key here: plot.ly/settings/api

library(plotly)

x = rnorm(500)

py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    x = x, 
    type = "histogram"
  )
)
response <- py$plotly(data, kwargs=list(filename="basic-histogram", fileopt="overwrite"))
url <- response$url
