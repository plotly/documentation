library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  y = c(0, 3, 6, 4, 5, 2, 3, 5, 4), 
  type = "scatter"
)
trace2 <- list(
  x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  y = c(0, 4, 7, 8, 3, 6, 3, 3, 4), 
  type = "scatter"
)

layout <- list(
  legend = list(
    x = 100, 
    y = 1
  ), 
  showlegend = TRUE
)



response <- p$plotly(trace0, trace1, kwargs=list(layout=layout, filename="legend-outside", fileopt="overwrite"))
url <- response$url
filename <- response$filename