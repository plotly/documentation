library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

trace1 <- list(
  x = c(0, 1, 2, 3), 
  y = c(0, 2, 4, 6), 
  visible = TRUE, 
  type = "scatter"
)
trace2 <- list(
  x = c(0, 1, 2, 3), 
  y = c(8, 4, 2, 0), 
  visible = FALSE, 
  type = "scatter"
)
data <- list(trace1, trace2)

response <- p$plotly(data, kwargs=list(filename="data-visible", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename