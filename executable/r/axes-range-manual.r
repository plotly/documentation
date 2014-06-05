library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  y = c(8, 7, 6, 5, 4, 3, 2, 1, 0), 
  type = "scatter"
)
trace2 <- list(
  x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  y = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  type = "scatter"
)

layout <- list(
  xaxis = list(range = c(2, 5)), 
  yaxis = list(range = c(2, 5))
)



response <- p$plotly(trace0, trace1, kwargs=list(layout=layout, filename="axes-range-manual", fileopt="overwrite"))
url <- response$url
filename <- response$filename