# Learn about API authentication here: plot.ly/r/getting-started
# Find your api_key here: plot.ly/settings/api

library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')


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
response <- py$plotly(data, kwargs=list(layout=layout, filename="axes-range-mode", fileopt="overwrite"))
url <- response$url
