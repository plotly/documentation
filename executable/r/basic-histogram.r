library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

x = rnorm(500)

data <- list(
  list(
    x = x, 
    type = "histogram"
  )
)

response <- p$plotly(data, kwargs=list(filename="basic-histogram", fileopt="overwrite"))
url <- response$url
filename <- response$filename