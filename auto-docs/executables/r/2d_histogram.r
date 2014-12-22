# Learn about API authentication here: plot.ly/r/getting-started
# Find your api_key here: plot.ly/settings/api

library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')

x <- rnorm(500)
y <- rnorm(500)+1

data <- list(
  list(
    x = x, 
    y = y, 
    type = "histogram2d"
  )
)
response <- py$plotly(data, kwargs=list(filename="2d-histogram", fileopt="overwrite"))
url <- response$url
