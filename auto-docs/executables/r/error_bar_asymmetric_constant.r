library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

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

response <- p$plotly(data, kwargs=list(filename="error-bar-asymmetric-constant", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename