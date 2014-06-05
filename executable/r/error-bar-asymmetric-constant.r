library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

data <- list(
  list(
    x = c(1, 2, 3, 4), 
    y = c(2, 1, 3, 4), 
    error_y = list(
      value = 15, 
      type = "percent", 
      symmetric = FALSE, 
      valueminus = 25
    ), 
    type = "scatter"
  )
)

response <- p$plotly(data, kwargs=list(filename="error-bar-asymmetric-constant", fileopt="overwrite"))
url <- response$url
filename <- response$filename