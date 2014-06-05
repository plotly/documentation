library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(0, 2, 4), 
  y = c(0, 4, 2), 
  type = "scatter"
)


response <- p$plotly(trace0, kwargs=list(filename="privacy-true", fileopt="overwrite"))
url <- response$url
filename <- response$filename