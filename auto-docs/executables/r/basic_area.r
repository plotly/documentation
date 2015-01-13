# Learn about API authentication here: {BASE_URL}/r/getting-started
# Find your api_key here: {BASE_URL}/settings/api

library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')
trace1 <- list(
  x = c(1, 2, 3, 4), 
  y = c(0, 2, 3, 5), 
  fill = "tozeroy", 
  type = "scatter"
)
trace2 <- list(
  x = c(1, 2, 3, 4), 
  y = c(3, 5, 1, 7), 
  fill = "tonexty", 
  type = "scatter"
)
data <- list(trace1, trace2)
response <- py$plotly(data, kwargs=list(filename="basic-area", fileopt="overwrite"))
url <- response$url
