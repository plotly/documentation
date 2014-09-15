library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')
x = rnorm(500)

data <- list(
  list(
    x = x, 
    type = "histogram"
  )
)
response <- p$plotly(data, kwargs=list(fileopt="overwrite", filename="basic-histogram"))
url <- response$url