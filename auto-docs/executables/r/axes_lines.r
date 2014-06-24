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
    zerolinewidth = 4, 
    gridwidth = 2, 
    showgrid = TRUE, 
    zerolinecolor = "#969696", 
    gridcolor = "#bdbdbd", 
    linecolor = "#636363", 
    mirror = "ticks", 
    zeroline = TRUE, 
    showline = TRUE, 
    linewidth = 6
  ), 
  yaxis = list(
    zerolinewidth = 4, 
    gridwidth = 2, 
    showgrid = TRUE, 
    zerolinecolor = "#969696", 
    gridcolor = "#bdbdbd", 
    linecolor = "#636363", 
    mirror = "ticks", 
    zeroline = TRUE, 
    showline = TRUE, 
    linewidth = 6
  )
)

response <- p$plotly(data, kwargs=list(layout=layout, filename="axes-lines", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename