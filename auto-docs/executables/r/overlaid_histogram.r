# Learn about API authentication here: plot.ly/r/getting-started
# Find your api_key here: plot.ly/settings/api

library(plotly)

x0 = rnorm(500)
x1 = rnorm(500)+1

py <- plotly(username='TestBot', key='r1neazxo9w')
trace1 <- list(
  x = x0, 
  opacity = 0.75, 
  type = "histogram"
)
trace2 <- list(
  x = x1, 
  opacity = 0.75, 
  type = "histogram"
)
data <- list(trace1, trace2)
layout <- list(barmode = "overlay")
response <- py$plotly(data, kwargs=list(layout=layout, filename="overlaid-histogram", fileopt="overwrite"))
url <- response$url
