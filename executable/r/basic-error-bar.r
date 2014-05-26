library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(0, 1, 2), 
  y = c(6, 10, 2), 
  error_y = list(
    type = "data", 
    array = c(1, 2, 3), 
    visible = TRUE
  )
)
response <- p$plotly(trace0, kwargs=list(filename="basic-error-bar", fileopt="overwrite"))
url <- response$url
filename <- response$filename