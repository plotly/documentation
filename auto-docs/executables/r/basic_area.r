library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')

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
response <- p$plotly(data, kwargs=list(fileopt="overwrite", filename="basic-area"))
url <- response$url