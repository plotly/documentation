library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(1, 2, 3), 
  y = c(40, 50, 60), 
  name = "yaxis data"
)
trace2 <- list(
  x = c(2, 3, 4), 
  y = c(4, 5, 6), 
  yaxis = "y2", 
  name = "yaxis2 data"
)

layout <- list(
  title = "Double Y Axis Example", 
  yaxis = list(title = "yaxis title"), 
  yaxis2 = list(
    title = "yaxis2 title", 
    titlefont = list(color = "rgb(148, 103, 189)"), 
    tickfont = list(color = "rgb(148, 103, 189)"), 
    overlaying = "y", 
    side = "right"
  )
)

response <- p$plotly(trace0, trace1, kwargs=list(layout=layout, filename="multiple-axes-double", fileopt="overwrite"))
url <- response$url
filename <- response$filename