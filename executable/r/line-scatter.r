library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(1, 2, 3, 4), 
  y = c(10, 15, 13, 17), 
  type = "scatter", 
  mode = "markers"
)
trace2 <- list(
  x = c(2, 3, 4, 5), 
  y = c(16, 5, 11, 9), 
  type = "scatter", 
  mode = "lines"
)
trace3 <- list(
  x = c(1, 2, 3, 4), 
  y = c(12, 9, 15, 12), 
  type = "scatter", 
  mode = "lines+markers"
)
response <- p$plotly(trace0, trace1, trace2, kwargs=list(filename="line-scatter", fileopt="overwrite"))
url <- response$url
filename <- response$filename