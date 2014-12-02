# Learn about API authentication here: plot.ly/r/getting-started
# Find your api_key here: plot.ly/settings/api

library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')

x0 = rnorm(500)
x1 = rnorm(500)+1

trace1 <- list(
  x = x0, 
  type = "histogram"
)
trace2 <- list(
  x = x1, 
  type = "histogram"
)
data <- list(trace1, trace2)
layout <- list(barmode = "stacked")
response <- py$plotly(data, kwargs=list(layout=layout, filename="stacked-histogram", fileopt="overwrite"))
url <- response$url
