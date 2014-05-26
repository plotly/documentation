library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  y = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  name = "Name of Trace 1"
)
trace2 <- list(
  x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  y = c(1, 0, 3, 2, 5, 4, 7, 6, 8), 
  name = "Name of Trace 2"
)

layout <- list(
  title = "Plot Title", 
  xaxis = list(
    title = "x Axis", 
    titlefont = list(
      color = "#7f7f7f", 
      family = "Courier New, monospace", 
      size = 18
    )
  ), 
  yaxis = list(
    title = "y Axis", 
    titlefont = list(
      color = "#7f7f7f", 
      family = "Courier New, monospace", 
      size = 18
    )
  )
)

response <- p$plotly(trace0, trace1, kwargs=list(layout=layout, filename="styling-names", fileopt="overwrite"))
url <- response$url
filename <- response$filename