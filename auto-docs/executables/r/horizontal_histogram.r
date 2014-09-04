import numpy as np
y = np.random.randn(500)
library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    y = y, 
    type = "histogram"
  )
)
response <- py$plotly(data, kwargs=list(auto_open=FALSE, fileopt="overwrite", filename="horizontal-histogram"))
url <- response$url