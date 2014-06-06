library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

data <- list(
  list(
    x = c(0, 2, 4), 
    y = c(0, 4, 2), 
    type = "scatter"
  )
)

response <- p$plotly(data, kwargs=list(filename="privacy-true", fileopt="overwrite", world_readable="TRUE"))
url <- response$url
filename <- response$filename