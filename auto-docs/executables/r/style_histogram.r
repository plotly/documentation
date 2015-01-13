# Learn about API authentication here: {{BASE_URL}}/r/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

library(plotly)

x0 = rnorm(500)
x1 = rnorm(500)+1

py <- plotly(username='TestBot', key='r1neazxo9w')
trace1 <- list(
  x = x0, 
  histnorm = "count", 
  name = "control", 
  autobinx = FALSE, 
  xbins = list(
    start = -3.2, 
    end = 2.8, 
    size = 0.2
  ), 
  marker = list(
    color = "fuchsia", 
    line = list(
      color = "grey", 
      width = 0
    ), 
    opacity = 0.75
  ), 
  type = "histogram"
)
trace2 <- list(
  x = x1, 
  name = "experimental", 
  autobinx = FALSE, 
  xbins = list(
    start = -1.8, 
    end = 4.2, 
    size = 0.2
  ), 
  marker = list(color = "rgb(255, 217, 102)"), 
  opacity = 0.75, 
  type = "histogram"
)
data <- list(trace1, trace2)
layout <- list(
  title = "Sampled Results", 
  xaxis = list(title = "Value"), 
  yaxis = list(title = "Count"), 
  barmode = "overlay", 
  bargap = 0.25, 
  bargroupgap = 0.3
)
response <- py$plotly(data, kwargs=list(layout=layout, filename="style-histogram", fileopt="overwrite"))
url <- response$url
