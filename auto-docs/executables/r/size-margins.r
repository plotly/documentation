library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

data <- list(
  list(
    x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
    y = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
    type = "scatter"
  )
)
layout <- list(
  width = 500, 
  height = 500, 
  autosize = FALSE, 
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

response <- p$plotly(data, kwargs=list(layout=layout, filename="size-margins", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename