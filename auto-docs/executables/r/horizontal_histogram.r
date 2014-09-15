library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')
y = rnorm(500)

data <- list(
  list(
    y = y, 
    type = "histogram"
  )
)
response <- p$plotly(data, kwargs=list(fileopt="overwrite", filename="horizontal-histogram"))
url <- response$url