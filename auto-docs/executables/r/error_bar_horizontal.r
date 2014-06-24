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

response <- p$plotly(data, kwargs=list(filename="error-bar-horizontal", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename