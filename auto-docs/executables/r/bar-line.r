library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

trace1 <- list(
  x = c(0, 1, 2, 3, 4, 5), 
  y = c(1.5, 1, 1.3, 0.7, 0.8, 0.9), 
  type = "scatter"
)
trace2 <- list(
  x = c(0, 1, 2, 3, 4, 5), 
  y = c(1, 0.5, 0.7, -1.2, 0.3, 0.4), 
  type = "bar"
)
data <- list(trace1, trace2)

response <- p$plotly(data, kwargs=list(filename="bar-line", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename