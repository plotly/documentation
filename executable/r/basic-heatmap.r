library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  z = matrix(c(1, 20, 30, 20, 1, 60, 30, 60, 1), nrow=3, ncol=3), 
  type = "heatmap"
)


response <- p$plotly(trace0, kwargs=list(filename="basic-heatmap", fileopt="overwrite"))
url <- response$url
filename <- response$filename