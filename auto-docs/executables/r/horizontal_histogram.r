library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

y = rnorm(500)
data <- list(
  list(
    y = y, 
    type = "histogram"
  )
)

response <- p$plotly(data, kwargs=list(filename="horizontal-histogram", fileopt="overwrite", auto_open=FALSE))
url <- response$url
filename <- response$filename