library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

y = rnorm(500)

data <- list(
  list(
    y = y, 
    type = "histogram"
  )
)

response <- p$plotly(data, kwargs=list(filename="horizontal-histogram", fileopt="overwrite"))
url <- response$url
filename <- response$filename