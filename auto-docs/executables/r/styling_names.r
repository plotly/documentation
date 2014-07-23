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
    title = "x Axis", 
    titlefont = list(
      family = "Courier New, monospace", 
      size = 18, 
      color = "#7f7f7f"
    )
  ), 
  yaxis = list(
    title = "y Axis", 
    titlefont = list(
      family = "Courier New, monospace", 
      size = 18, 
      color = "#7f7f7f"
    )
  )
)

response <- p$plotly(data, kwargs=list(layout=layout, filename="styling-names", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename