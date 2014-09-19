library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')

data <- list(
  list(
    x = c(0, 1, 2), 
    y = c(6, 10, 2), 
    error_y = list(
      type = "percent", 
      value = 50, 
      visible = TRUE
    ), 
    type = "scatter"
  )
)
response <- py$plotly(data, kwargs=list(filename="percent-error-bar", fileopt="overwrite"))
url <- response$url