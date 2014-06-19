library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

data <- list(
  list(
    x = c(0, 1, 2), 
    y = c(6, 10, 2), 
    error_y = list(
      value = 50, 
      type = "percent", 
      visible = TRUE
    ), 
    type = "scatter"
  )
)

response <- p$plotly(data, kwargs=list(filename="percent-error-bar", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename