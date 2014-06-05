library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(2, 4, 6), 
  y = c(-3, 0, 3), 
  type = "scatter"
)

layout <- list(
  xaxis = list(
    autorange = TRUE, 
    rangemode = "tozero"
  ), 
  yaxis = list(
    autorange = TRUE, 
    rangemode = "nonnegative"
  ), 
  showlegend = FALSE
)



response <- p$plotly(trace0, kwargs=list(layout=layout, filename="axes-range-mode", fileopt="overwrite"))
url <- response$url
filename <- response$filename