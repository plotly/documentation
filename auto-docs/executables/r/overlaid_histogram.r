import numpy as np
x0 = np.random.randn(500)
x1 = np.random.randn(500)+1
library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')
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
response <- p$plotly(data, kwargs=list(layout=layout, auto_open=FALSE, fileopt="overwrite", filename="overlaid-histogram"))
url <- response$url