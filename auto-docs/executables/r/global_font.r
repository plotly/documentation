library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')

data <- list(
  list(
    x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
    y = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
    type = "scatter"
  )
)
layout <- list(
  title = "Global Font", 
  font = list(
    family = "Courier New, monospace", 
    size = 18, 
    color = "#7f7f7f"
  )
)
response <- p$plotly(data, kwargs=list(layout=layout, fileopt="overwrite", filename="global-font"))
url <- response$url