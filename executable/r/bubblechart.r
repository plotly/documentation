library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(1, 2, 3, 4), 
  y = c(10, 11, 12, 13), 
  mode = "markers", 
  marker = list(
    size = c(12, 22, 32, 42), 
    color = c("hsl(0,100,40)", "hsl(33,100,40)", "hsl(66,100,40)", "hsl(99,100,40)"), 
    opacity = c(0.6, 0.7, 0.8, 0.9)
  ), 
  type = "scatter"
)
trace2 <- list(
  x = c(1, 2, 3, 4), 
  y = c(11, 12, 13, 14), 
  mode = "markers", 
  marker = list(
    symbol = c("circle", "square", "diamond", "cross"), 
    size = 18, 
    color = "rgb(31, 119, 180)"
  ), 
  type = "scatter"
)
trace3 <- list(
  x = c(1, 2, 3, 4), 
  y = c(12, 13, 14, 15), 
  mode = "markers", 
  marker = list(
    line = list(
      color = c("rgb(120,120,120)", "rgb(120,120,120)", "red", "rgb(120,120,120)"), 
      width = c(2, 2, 6, 2)
    ), 
    size = 18
  ), 
  type = "scatter"
)

layout <- list(showlegend = FALSE)



response <- p$plotly(trace0, trace1, trace2, kwargs=list(layout=layout, filename="bubblechart", fileopt="overwrite"))
url <- response$url
filename <- response$filename