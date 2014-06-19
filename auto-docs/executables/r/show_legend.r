library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

trace1 <- list(
  x = c(0, 1, 2), 
  y = c(1, 2, 3), 
  name = "First Trace", 
  showlegend = FALSE, 
  type = "scatter"
)
trace2 <- list(
  x = c(0, 1, 2, 3), 
  y = c(8, 4, 2, 0), 
  name = "Second Trace", 
  showlegend = TRUE, 
  type = "scatter"
)
data <- list(trace1, trace2)

response <- p$plotly(data, kwargs=list(filename="show-legend", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename