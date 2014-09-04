library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    x = c(1, 2), 
    y = c(1, 2), 
    type = "scatter"
  )
)
layout <- list(xaxis = list(autorange = "reversed"))
response <- py$plotly(data, kwargs=list(layout=layout, auto_open=FALSE, fileopt="overwrite", filename="axes-reversed"))
url <- response$url