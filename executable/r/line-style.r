library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(1, 2, 3), 
  y = c(4, 5, 6), 
  name = "Experiment", 
  marker = list(
    symbol = "square", 
    line = list(
      color = "darkblue", 
      width = 3
    ), 
    size = 12, 
    color = "rgb(54,144,192)", 
    opacity = 1.0
  ), 
  line = list(
    dash = "dot", 
    color = "rgb(3,78,123)", 
    width = 6
  ), 
  type = "scatter"
)
trace2 <- list(
  x = c(1, 2, 3), 
  y = c(2, 10, 12), 
  name = "Control", 
  marker = list(
    symbol = "cross", 
    line = list(
      color = "", 
      width = 0
    ), 
    size = 16, 
    color = "fuchsia", 
    opacity = 0.9
  ), 
  line = list(
    dash = "dashdot", 
    color = "purple", 
    width = 4
  ), 
  type = "scatter"
)


response <- p$plotly(trace0, trace1, kwargs=list(filename="line-style", fileopt="overwrite"))
url <- response$url
filename <- response$filename