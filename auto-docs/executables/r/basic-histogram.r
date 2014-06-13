library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

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