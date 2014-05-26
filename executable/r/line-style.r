library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(1, 2, 3), 
  y = c(4, 5, 6), 
  type = "scatter", 
  name = "Experiment", 
  line = list(
    color = "rgb(3,78,123)", 
    width = 6, 
    dash = "dot"
  ), 
  marker = list(
    opacity = 1.0, 
    symbol = "square", 
    size = 12, 
    color = "rgb(54,144,192)", 
    line = list(
      width = 3, 
      color = "darkblue"
    )
  )
)
trace2 <- list(
  x = c(1, 2, 3), 
  y = c(2, 10, 12), 
  type = "scatter", 
  name = "Control", 
  line = list(
    color = "purple", 
    width = 4, 
    dash = "dashdot"
  ), 
  marker = list(
    opacity = 0.9, 
    symbol = "cross", 
    size = 16, 
    color = "fuchsia", 
    line = list(
      color = "", 
      width = 0
    )
  )
)
response <- p$plotly(trace0, trace1, kwargs=list(filename="line-style", fileopt="overwrite"))
url <- response$url
filename <- response$filename