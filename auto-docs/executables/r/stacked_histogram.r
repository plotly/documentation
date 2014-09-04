import numpy as np
x0 = np.random.randn(500)
x1 = np.random.randn(500)+1
library(plotly)
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
layout <- list(barmode = "stacked")
response <- py$plotly(data, kwargs=list(layout=layout, auto_open=FALSE, fileopt="overwrite", filename="stacked-histogram"))
url <- response$url