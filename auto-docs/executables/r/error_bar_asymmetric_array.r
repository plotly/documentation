library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

data <- list(
  list(
    x = c(1, 2, 3, 4), 
    y = c(2, 1, 3, 4), 
    error_y = list(
      array = c(0.1, 0.2, 0.1, 0.1), 
      type = "data", 
      symmetric = FALSE, 
      arrayminus = c(0.2, 0.4, 1, 0.2)
    ), 
    type = "scatter"
  )
)

response <- p$plotly(data, kwargs=list(filename="error-bar-asymmetric-array", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename