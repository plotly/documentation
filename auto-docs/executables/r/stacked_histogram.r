# Learn about API authentication here: {BASE_URL}/r/getting-started
# Find your api_key here: {BASE_URL}/settings/api

library(plotly)

x0 = rnorm(500)
x1 = rnorm(500)+1

py <- plotly(username='TestBot', key='r1neazxo9w')
trace1 <- list(
  x = x0, 
  type = "histogram"
)
trace2 <- list(
  x = x1, 
  type = "histogram"
)
data <- list(trace1, trace2)
layout <- list(barmode = "stack")
response <- py$plotly(data, kwargs=list(layout=layout, filename="stacked-histogram", fileopt="overwrite"))
url <- response$url
