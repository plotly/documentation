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
  autosize = FALSE, 
  width = 500, 
  height = 500, 
  margin = list(
    l = 50, 
    r = 50, 
    b = 100, 
    t = 100, 
    pad = 4
  ), 
  paper_bgcolor = "#7f7f7f", 
  plot_bgcolor = "#c7c7c7"
)
response <- p$plotly(data, kwargs=list(layout=layout, fileopt="overwrite", filename="size-margins"))
url <- response$url