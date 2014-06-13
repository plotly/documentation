library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

trace1 <- list(
  x = c(1, 2, 3, 4), 
  y = c(10, 15, 13, 17), 
  type = "scatter"
)
trace2 <- list(
  x = c(1, 2, 3, 4), 
  y = c(16, 5, 11, 9), 
  type = "scatter"
)
data <- list(trace1, trace2)

response <- p$plotly(data, kwargs=list(filename="basic-line", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename