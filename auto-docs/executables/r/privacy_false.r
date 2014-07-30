library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

data <- list(
  list(
    x = c(0, 2, 4), 
    y = c(0, 4, 2), 
    type = "scatter"
  )
)

response <- p$plotly(data, kwargs=list(filename="privacy-false", fileopt="overwrite", auto_open=FALSE, world_readable=FALSE))
url <- response$url
filename <- response$filename