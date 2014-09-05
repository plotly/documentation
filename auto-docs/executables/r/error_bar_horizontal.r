library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    x = c(1, 2, 3, 4), 
    y = c(2, 1, 3, 4), 
    error_x = list(
      type = "percent", 
      value = 10
    ), 
    type = "scatter"
  )
)
response <- p$plotly(data, kwargs=list(auto_open=FALSE, fileopt="overwrite", filename="error-bar-horizontal"))
url <- response$url