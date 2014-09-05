library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')
trace1 <- list(
  x = c(1, 2, 3, 4), 
  y = c(10, 15, 13, 17), 
  mode = "markers", 
  type = "scatter"
)
trace2 <- list(
  x = c(2, 3, 4, 5), 
  y = c(16, 5, 11, 9), 
  mode = "lines", 
  type = "scatter"
)
trace3 <- list(
  x = c(1, 2, 3, 4), 
  y = c(12, 9, 15, 12), 
  mode = "lines+markers", 
  type = "scatter"
)
data <- list(trace1, trace2, trace3)
response <- p$plotly(data, kwargs=list(auto_open=FALSE, fileopt="overwrite", filename="line-scatter"))
url <- response$url