# Learn about API authentication here: {BASE_URL}/r/getting-started
# Find your api_key here: {BASE_URL}/settings/api

library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    z = matrix(c(1, 20, 30, 20, 1, 60, 30, 60, 1), nrow=3, ncol=3), 
    type = "heatmap"
  )
)
response <- py$plotly(data, kwargs=list(filename="basic-heatmap", fileopt="overwrite"))
url <- response$url
