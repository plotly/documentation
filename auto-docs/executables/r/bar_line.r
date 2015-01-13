# Learn about API authentication here: {{BASE_URL}}/r/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')
trace1 <- list(
  x = c(0, 1, 2, 3, 4, 5), 
  y = c(1.5, 1, 1.3, 0.7, 0.8, 0.9), 
  type = "scatter"
)
trace2 <- list(
  x = c(0, 1, 2, 3, 4, 5), 
  y = c(1, 0.5, 0.7, -1.2, 0.3, 0.4), 
  type = "bar"
)
data <- list(trace1, trace2)
response <- py$plotly(data, kwargs=list(filename="bar-line", fileopt="overwrite"))
url <- response$url
