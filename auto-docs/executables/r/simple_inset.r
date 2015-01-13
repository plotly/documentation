# Learn about API authentication here: {{BASE_URL}}/r/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')
trace1 <- list(
  x = c(1, 2, 3), 
  y = c(4, 3, 2), 
  type = "scatter"
)
trace2 <- list(
  x = c(20, 30, 40), 
  y = c(30, 40, 50), 
  xaxis = "x2", 
  yaxis = "y2", 
  type = "scatter"
)
data <- list(trace1, trace2)
layout <- list(
  yaxis2 = list(
    domain = c(0.6, 0.95), 
    anchor = "x2"
  ), 
  xaxis2 = list(
    domain = c(0.6, 0.95), 
    anchor = "y2"
  )
)
response <- py$plotly(data, kwargs=list(layout=layout, filename="simple-inset", fileopt="overwrite"))
url <- response$url
