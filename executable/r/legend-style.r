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

layout <- list(legend = list(
    x = 0, 
    y = 1, 
    bgcolor = "#E2E2E2", 
    bordercolor = "#FFFFFF", 
    borderwidth = 2, 
    font = list(
      family = "sans-serif", 
      size = 12, 
      color = "#000"
    ), 
    showlegend = TRUE, 
    traceorder = "normal"
  ))



response <- p$plotly(trace0, trace1, kwargs=list(layout=layout, filename="legend-style", fileopt="overwrite"))
url <- response$url
filename <- response$filename