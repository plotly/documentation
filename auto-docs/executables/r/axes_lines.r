library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')

trace1 <- list(
  x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  y = c(8, 7, 6, 5, 4, 3, 2, 1, 0), 
  type = "scatter"
)
trace2 <- list(
  x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  y = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  type = "scatter"
)
data <- list(trace1, trace2)
layout <- list(
  xaxis = list(
    showgrid = TRUE, 
    zeroline = TRUE, 
    showline = TRUE, 
    mirror = "ticks", 
    gridcolor = "#bdbdbd", 
    gridwidth = 2, 
    zerolinecolor = "#969696", 
    zerolinewidth = 4, 
    linecolor = "#636363", 
    linewidth = 6
  ), 
  yaxis = list(
    showgrid = TRUE, 
    zeroline = TRUE, 
    showline = TRUE, 
    mirror = "ticks", 
    gridcolor = "#bdbdbd", 
    gridwidth = 2, 
    zerolinecolor = "#969696", 
    zerolinewidth = 4, 
    linecolor = "#636363", 
    linewidth = 6
  )
)
response <- p$plotly(data, kwargs=list(layout=layout, fileopt="overwrite", filename="axes-lines"))
url <- response$url