# Learn about API authentication here: {BASE_URL}/r/getting-started
# Find your api_key here: {BASE_URL}/settings/api

library(plotly)

x <- rnorm(500)
y <- rnorm(500)+1

py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    x = x, 
    y = y, 
    type = "histogram2d"
  )
)
response <- py$plotly(data, kwargs=list(filename="2d-histogram", fileopt="overwrite"))
url <- response$url
