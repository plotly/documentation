# Learn about API authentication here: {BASE_URL}/r/getting-started
# Find your api_key here: {BASE_URL}/settings/api

library(plotly)

y = rnorm(500)

py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    y = y, 
    type = "histogram"
  )
)
response <- py$plotly(data, kwargs=list(filename="horizontal-histogram", fileopt="overwrite"))
url <- response$url
