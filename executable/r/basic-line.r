library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(1, 2, 3, 4), 
  y = c(10, 15, 13, 17), 
  type = "scatter"
)
trace2 <- list(
  x = c(1, 2, 3, 4), 
  y = c(16, 5, 11, 9), 
  type = "scatter"
)


response <- p$plotly(trace0, trace1, kwargs=list(filename="basic-line", fileopt="overwrite"))
url <- response$url
filename <- response$filename