library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

x = rnorm(500)

trace1 <- list(
  x = x, 
  type = "histogram"
)
response <- p$plotly(trace0, kwargs=list(filename="basic-histogram", fileopt="overwrite"))
url <- response$url
filename <- response$filename