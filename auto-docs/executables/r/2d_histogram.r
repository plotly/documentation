import numpy as np

x = np.random.randn(500)
y = np.random.randn(500)+1
library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    x = x, 
    y = y, 
    type = "histogram2d"
  )
)
response <- p$plotly(data, kwargs=list(auto_open=FALSE, fileopt="overwrite", filename="2d-histogram"))
url <- response$url