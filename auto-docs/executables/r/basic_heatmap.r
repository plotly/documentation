library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    z = matrix(c(1, 20, 30, 20, 1, 60, 30, 60, 1), nrow=3, ncol=3), 
    type = "heatmap"
  )
)
response <- py$plotly(data, kwargs=list(auto_open=FALSE, fileopt="overwrite", filename="basic-heatmap"))
url <- response$url