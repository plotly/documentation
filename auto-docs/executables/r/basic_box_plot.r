# Learn about API authentication here: plot.ly/r/getting-started
# Find your api_key here: plot.ly/settings/api

library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')

y0 = rnorm(50)
y1 = rnorm(50)+1

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
