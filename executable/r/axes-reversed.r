library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

data <- list(
  list(
    x = c(1, 2), 
    y = c(1, 2), 
    type = "scatter"
  )
)
layout <- list(xaxis = list(autorange = "reversed"))

response <- p$plotly(data, kwargs=list(layout=layout, filename="axes-reversed", fileopt="overwrite"))
url <- response$url
filename <- response$filename