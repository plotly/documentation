import numpy as np
x = np.random.randn(500)
library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    x = x, 
    type = "histogram"
  )
)
response <- p$plotly(data, kwargs=list(auto_open=FALSE, fileopt="overwrite", filename="basic-histogram"))
url <- response$url