library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    x = c(0, 2, 4), 
    y = c(0, 4, 2), 
    type = "scatter"
  )
)
response <- py$plotly(data, kwargs=list(auto_open=FALSE, fileopt="overwrite", world_readable=TRUE, filename="privacy-true"))
url <- response$url