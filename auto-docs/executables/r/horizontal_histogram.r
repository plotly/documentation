library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')
y = rnorm(500)

data <- list(
  list(
    y = y, 
    type = "histogram"
  )
)
response <- py$plotly(data, kwargs=list(filename="horizontal-histogram", fileopt="overwrite"))
url <- response$url