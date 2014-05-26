library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  y = c(0, 1, 1, 2, 3, 5, 8, 13, 21), 
  type = "box", 
  boxpoints = "all", 
  jitter = 0.3, 
  pointpos = -1.8
)
response <- p$plotly(trace0, kwargs=list(filename="box-plot-jitter", fileopt="overwrite"))
url <- response$url
filename <- response$filename