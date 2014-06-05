library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(1, 2, 3), 
  y = c(4, 3, 2), 
  type = "scatter"
)
trace2 <- list(
  x = c(20, 30, 40), 
  y = c(30, 40, 50), 
  xaxis = "x2", 
  yaxis = "y2", 
  type = "scatter"
)
data <- list(trace1, trace2)
layout <- list(
  yaxis2 = list(
    domain = c(0.6, 0.95), 
    anchor = "x2"
  ), 
  xaxis2 = list(
    domain = c(0.6, 0.95), 
    anchor = "y2"
  )
)

response <- p$plotly(data, kwargs=list(layout=layout, filename="simple-inset", fileopt="overwrite"))
url <- response$url
filename <- response$filename