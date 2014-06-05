library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

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
      text = "Annotation Text", 
      xref = "x", 
      yref = "y", 
      showarrow = TRUE, 
      arrowhead = 7, 
      ay = -40, 
      ax = 0
    ), 
    list(
      x = 4, 
      y = 4, 
      text = "Annotation Text 2", 
      xref = "x", 
      yref = "y", 
      showarrow = TRUE, 
      arrowhead = 7, 
      ay = -40, 
      ax = 0
    )
  )
)

response <- p$plotly(data, kwargs=list(layout=layout, filename="multiple-annotation", fileopt="overwrite"))
url <- response$url
filename <- response$filename