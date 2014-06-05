library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(0, 1, 2), 
  y = c(6, 10, 2), 
  error_y = list(
    value = 50, 
    type = "percent", 
    visible = TRUE
  ), 
  type = "scatter"
)


response <- p$plotly(trace0, kwargs=list(filename="percent-error-bar", fileopt="overwrite"))
url <- response$url
filename <- response$filename