library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')

data <- list(
  list(
    x = c(0, 1, 2), 
    y = c(6, 10, 2), 
    error_y = list(
      type = "data", 
      array = c(1, 2, 3), 
      visible = TRUE
    ), 
    type = "scatter"
  )
)
response <- p$plotly(data, kwargs=list(fileopt="overwrite", filename="basic-error-bar"))
url <- response$url