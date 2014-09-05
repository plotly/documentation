import numpy as np
y0 = np.random.randn(50)
y1 = np.random.randn(50)+1
library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')
trace1 <- list(
  y = y0, 
  type = "box"
)
trace2 <- list(
  y = y1, 
  type = "box"
)
data <- list(trace1, trace2)
response <- p$plotly(data, kwargs=list(auto_open=FALSE, fileopt="overwrite", filename="basic-box-plot"))
url <- response$url