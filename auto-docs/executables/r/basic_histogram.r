library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

x = rnorm(500)
data <- list(
  list(
    x = x, 
    type = "histogram"
  )
)

response <- p$plotly(data, kwargs=list(filename="basic-histogram", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename