library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  z = list(c(1, 20, 30),list(20, 1, 60),list(30, 60, 1)), 
  type = "heatmap"
)


response <- p$plotly(trace0, kwargs=list(filename="basic-heatmap", fileopt="overwrite"))
url <- response$url
filename <- response$filename