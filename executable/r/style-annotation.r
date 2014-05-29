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

layout <- list(
  showlegend = FALSE, 
  annotations = list(
    list(
      x = 2, 
      y = 5, 
      text = "max=5", 
      bordercolor = "#c7c7c7", 
      borderwidth = 2, 
      borderpad = 4, 
      bgcolor = "#ff7f0e", 
      xref = "x", 
      yref = "y", 
      showarrow = TRUE, 
      arrowwidth = 2, 
      arrowcolor = "#636363", 
      arrowhead = 2, 
      arrowsize = 1, 
      font = list(
        family = "Courier New, monospace", 
        size = 16, 
        color = "#ffffff"
      ), 
      opacity = 0.8, 
      align = "center", 
      ay = -30, 
      ax = 20
    )
  )
)



response <- p$plotly(trace0, trace1, kwargs=list(layout=layout, filename="style-annotation", fileopt="overwrite"))
url <- response$url
filename <- response$filename