library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

y = rnorm(500)
data <- list(
  list(
    y = y, 
    type = "histogram"
  )
)

response <- p$plotly(data, kwargs=list(filename="horizontal-histogram", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename