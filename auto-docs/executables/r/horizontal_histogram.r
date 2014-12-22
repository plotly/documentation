# Learn about API authentication here: plot.ly/r/getting-started
# Find your api_key here: plot.ly/settings/api

library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')

y = rnorm(500)

data <- list(
  list(
    y = y, 
    type = "histogram"
  )
)
response <- py$plotly(data, kwargs=list(filename="horizontal-histogram", fileopt="overwrite"))
url <- response$url
