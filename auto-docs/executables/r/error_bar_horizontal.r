library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

data <- list(
  list(
    x = c(1, 2, 3, 4), 
    y = c(2, 1, 3, 4), 
    error_x = list(
      value = 10, 
      type = "percent"
    ), 
    type = "scatter"
  )
)

response <- p$plotly(data, kwargs=list(filename="error-bar-horizontal", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename