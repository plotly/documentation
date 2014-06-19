library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

data <- list(
  list(
    x = c(0, 2, 4), 
    y = c(0, 4, 2), 
    type = "scatter"
  )
)

response <- p$plotly(data, kwargs=list(filename="privacy-true", fileopt="overwrite", auto_open="FALSE", world_readable="TRUE"))
url <- response$url
filename <- response$filename