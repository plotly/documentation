library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')
x <- c('day 1', 'day 1', 'day 1', 'day 1', 'day 1', 'day 1', 
       'day 2', 'day 2', 'day 2', 'day 2', 'day 2', 'day 2')

trace1 <- list(
  y = c(0.2, 0.2, 0.6, 1.0, 0.5, 0.4, 0.2, 0.7, 0.9, 0.1, 0.5, 0.3), 
  x = x, 
  name = "kale", 
  marker = list(color = "#3D9970"), 
  type = "box"
)
trace2 <- list(
  y = c(0.6, 0.7, 0.3, 0.6, 0.0, 0.5, 0.7, 0.9, 0.5, 0.8, 0.7, 0.2), 
  x = x, 
  name = "radishes", 
  marker = list(color = "#FF4136"), 
  type = "box"
)
trace3 <- list(
  y = c(0.1, 0.3, 0.1, 0.9, 0.6, 0.6, 0.9, 1.0, 0.3, 0.6, 0.8, 0.5), 
  x = x, 
  name = "carrots", 
  marker = list(color = "#FF851B"), 
  type = "box"
)
data <- list(trace1, trace2, trace3)
layout <- list(
  yaxis = list(
    title = "normalized moisture", 
    zeroline = FALSE
  ), 
  boxmode = "group"
)
response <- p$plotly(data, kwargs=list(layout=layout, fileopt="overwrite", filename="box-grouped"))
url <- response$url