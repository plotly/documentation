library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

trace1 <- list(
  x = c(1, 2, 3, 4), 
  y = c(10, 11, 12, 13), 
  mode = "markers", 
  marker = list(
    color = c("hsl(0,100,40)", "hsl(33,100,40)", "hsl(66,100,40)", "hsl(99,100,40)"), 
    size = c(12, 22, 32, 42), 
    opacity = c(0.6, 0.7, 0.8, 0.9)
  ), 
  type = "scatter"
)
trace2 <- list(
  x = c(1, 2, 3, 4), 
  y = c(11, 12, 13, 14), 
  mode = "markers", 
  marker = list(
    color = "rgb(31, 119, 180)", 
    size = 18, 
    symbol = c("circle", "square", "diamond", "cross")
  ), 
  type = "scatter"
)
trace3 <- list(
  x = c(1, 2, 3, 4), 
  y = c(12, 13, 14, 15), 
  mode = "markers", 
  marker = list(
    size = 18, 
    line = list(
      color = c("rgb(120,120,120)", "rgb(120,120,120)", "red", "rgb(120,120,120)"), 
      width = c(2, 2, 6, 2)
    )
  ), 
  type = "scatter"
)
data <- list(trace1, trace2, trace3)
layout <- list(showlegend = FALSE)

response <- p$plotly(data, kwargs=list(layout=layout, filename="bubblechart", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename