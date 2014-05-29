library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(0, 1, 2, 3), 
  y = c(0, 2, 4, 6), 
  visible = TRUE, 
  type = "scatter"
)
trace2 <- list(
  x = c(0, 1, 2, 3), 
  y = c(8, 4, 2, 0), 
  visible = FALSE, 
  type = "scatter"
)


response <- p$plotly(trace0, trace1, kwargs=list(filename="data-visible", fileopt="overwrite"))
url <- response$url
filename <- response$filename