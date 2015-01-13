# Learn about API authentication here: {{BASE_URL}}/r/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    y = c(0, 1, 1, 2, 3, 5, 8, 13, 21), 
    boxpoints = "all", 
    jitter = 0.3, 
    pointpos = -1.8, 
    type = "box"
  )
)
response <- py$plotly(data, kwargs=list(filename="box-plot-jitter", fileopt="overwrite"))
url <- response$url
