library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')
x = rnorm(500)

data <- list(
  list(
    x = x, 
    type = "histogram"
  )
)
response <- py$plotly(data, kwargs=list(filename="basic-histogram", fileopt="overwrite"))
url <- response$url
