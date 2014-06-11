library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

data <- list(
  list(
    x = c(2, 4, 6), 
    y = c(-3, 0, 3), 
    type = "scatter"
  )
)
layout <- list(
  xaxis = list(
    autorange = TRUE, 
    rangemode = "tozero"
  ), 
  yaxis = list(
    autorange = TRUE, 
    rangemode = "nonnegative"
  ), 
  showlegend = FALSE
)

response <- p$plotly(data, kwargs=list(layout=layout, filename="axes-range-mode", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename