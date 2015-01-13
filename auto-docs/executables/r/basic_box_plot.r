# Learn about API authentication here: {BASE_URL}/r/getting-started
# Find your api_key here: {BASE_URL}/settings/api

library(plotly)

y0 = rnorm(50)
y1 = rnorm(50)+1

py <- plotly(username='TestBot', key='r1neazxo9w')
trace1 <- list(
  y = y0, 
  type = "box"
)
trace2 <- list(
  y = y1, 
  type = "box"
)
data <- list(trace1, trace2)
response <- py$plotly(data, kwargs=list(filename="basic-box-plot", fileopt="overwrite"))
url <- response$url
