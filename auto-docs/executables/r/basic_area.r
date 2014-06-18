library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

trace1 <- list(
  x = c(1, 2, 3, 4), 
  y = c(0, 2, 3, 5), 
  fill = "tozeroy", 
  type = "scatter"
)
trace2 <- list(
  x = c(1, 2, 3, 4), 
  y = c(3, 5, 1, 7), 
  fill = "tonexty", 
  type = "scatter"
)
data <- list(trace1, trace2)

response <- p$plotly(data, kwargs=list(filename="basic-area", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename