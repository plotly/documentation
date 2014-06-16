library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

trace1 <- list(
  x = c(1, 2, 3), 
  y = c(4, 5, 6), 
  type = "scatter"
)
trace2 <- list(
  x = c(20, 30, 40), 
  y = c(50, 60, 70), 
  xaxis = "x2", 
  yaxis = "y2", 
  type = "scatter"
)
data <- list(trace1, trace2)
layout <- list(
  xaxis = list(domain = c(0, 0.45)), 
  yaxis2 = list(anchor = "x2"), 
  xaxis2 = list(domain = c(0.55, 1))
)

response <- p$plotly(data, kwargs=list(layout=layout, filename="simple-subplot", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename