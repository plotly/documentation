library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

trace1 <- list(
  x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  y = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  name = "Name of Trace 1", 
  type = "scatter"
)
trace2 <- list(
  x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  y = c(1, 0, 3, 2, 5, 4, 7, 6, 8), 
  name = "Name of Trace 2", 
  type = "scatter"
)
data <- list(trace1, trace2)
layout <- list(
  title = "Plot Title", 
  xaxis = list(
    titlefont = list(
      color = "#7f7f7f", 
      family = "Courier New, monospace", 
      size = 18
    ), 
    title = "x Axis"
  ), 
  yaxis = list(
    titlefont = list(
      color = "#7f7f7f", 
      family = "Courier New, monospace", 
      size = 18
    ), 
    title = "y Axis"
  )
)

response <- p$plotly(data, kwargs=list(layout=layout, filename="styling-names", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename