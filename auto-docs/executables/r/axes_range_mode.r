library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

data <- list(
  list(
    x = c(2, 4, 6), 
    y = c(-3, 0, 3), 
    type = "scatter"
  )
)
layout <- list(
  showlegend = FALSE, 
  xaxis = list(
    rangemode = "tozero", 
    autorange = TRUE
  ), 
  yaxis = list(
    rangemode = "nonnegative", 
    autorange = TRUE
  )
)

response <- p$plotly(data, kwargs=list(layout=layout, filename="axes-range-mode", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename