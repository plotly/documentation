library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(1, 2, 3, 4), 
  y = c(0, 2, 3, 5), 
  fill = "tozeroy", 
  type = "scatter"
)
trace2 <- list(
  x = c(1, 2, 3, 4), 
  y = c(3, 5, 1, 7), 
  fill = "tonexty", 
  type = "scatter"
)


response <- p$plotly(trace0, trace1, kwargs=list(filename="basic-area", fileopt="overwrite"))
url <- response$url
filename <- response$filename