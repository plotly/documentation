import numpy as np
x0 = np.random.randn(500)
x1 = np.random.randn(500)+1
library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')
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
response <- p$plotly(data, kwargs=list(layout=layout, auto_open=FALSE, fileopt="overwrite", filename="style-histogram"))
url <- response$url