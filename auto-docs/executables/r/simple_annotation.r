# Learn about API authentication here: {{BASE_URL}}/r/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')
trace1 <- list(
  x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  y = c(0, 1, 3, 2, 4, 3, 4, 6, 5), 
  type = "scatter"
)
trace2 <- list(
  x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  y = c(0, 4, 5, 1, 2, 2, 3, 4, 2), 
  type = "scatter"
)
data <- list(trace1, trace2)
layout <- list(
  showlegend = FALSE, 
  annotations = list(
    list(
      x = 2, 
      y = 5, 
      xref = "x", 
      yref = "y", 
      text = "Annotation Text", 
      showarrow = TRUE, 
      arrowhead = 7, 
      ax = 0, 
      ay = -40
    )
  )
)
response <- py$plotly(data, kwargs=list(layout=layout, filename="simple-annotation", fileopt="overwrite"))
url <- response$url
