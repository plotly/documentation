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
  title = "Global Font", 
  font = list(
    family = "Courier New, monospace", 
    size = 18, 
    color = "#7f7f7f"
  )
)

response <- p$plotly(data, kwargs=list(layout=layout, filename="global-font", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename