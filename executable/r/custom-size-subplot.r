library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(1, 2, 3), 
  y = c(4, 5, 6), 
  type = "scatter"
)
trace2 <- list(
  x = c(20, 30, 40), 
  y = c(50, 60, 70), 
  xaxis = "x2", 
  yaxis = "y2", 
  type = "scatter"
)

layout <- list(
  xaxis = list(domain = c(0, 0.7)), 
  yaxis2 = list(anchor = "x2"), 
  xaxis2 = list(domain = c(0.8, 1))
)



response <- p$plotly(trace0, trace1, kwargs=list(layout=layout, filename="custom-size-subplot", fileopt="overwrite"))
url <- response$url
filename <- response$filename