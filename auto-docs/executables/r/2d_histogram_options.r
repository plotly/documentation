import numpy as np

x = np.random.randn(500)
y = np.random.randn(500)+1
library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    x = x, 
    y = y, 
    histnorm = "probability", 
    autobinx = FALSE, 
    xbins = list(
      start = -3, 
      end = 3, 
      size = 0.1
    ), 
    autobiny = FALSE, 
    ybins = list(
      start = -2.5, 
      end = 4, 
      size = 0.1
    ), 
    colorscale = list(c(0, "rgb(12,51,131)"),list(0.25, "rgb(10,136,186)"),list(0.5, "rgb(242,211,56)"),list(0.75, "rgb(242,143,56)"),list(1, "rgb(217,30,30)")), 
    type = "histogram2d"
  )
)
response <- py$plotly(data, kwargs=list(auto_open=FALSE, fileopt="overwrite", filename="2d-histogram-options"))
url <- response$url