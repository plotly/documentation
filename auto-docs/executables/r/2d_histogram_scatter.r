import numpy as np


x0 = np.random.randn(100)/5. + 0.5  # 5. enforces float division
y0 = np.random.randn(100)/5. + 0.5
x1 = np.random.rand(50)
y1 = np.random.rand(50) + 1.0


x = np.concatenate([x0, x1])
y = np.concatenate([y0, y1])
library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')
trace1 <- list(
  x = x0, 
  y = y0, 
  mode = "markers", 
  marker = list(
    symbol = "circle", 
    opacity = 0.7
  ), 
  type = "scatter"
)
trace2 <- list(
  x = x1, 
  y = y1, 
  mode = "markers", 
  marker = list(
    symbol = "square", 
    opacity = 0.7
  ), 
  type = "scatter"
)
trace3 <- list(
  x = x, 
  y = y, 
  type = "histogram2d"
)
data <- list(trace1, trace2, trace3)
response <- py$plotly(data, kwargs=list(auto_open=FALSE, fileopt="overwrite", filename="2d-histogram-scatter"))
url <- response$url