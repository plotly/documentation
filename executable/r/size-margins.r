library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  y = c(0, 1, 2, 3, 4, 5, 6, 7, 8)
)

layout <- list(
  autosize = FALSE, 
  height = 500, 
  width = 500, 
  margin = list(
    t = 100, 
    b = 100, 
    r = 50, 
    l = 50, 
    pad = 4
  ), 
  plot_bgcolor = "#c7c7c7", 
  paper_bgcolor = "#7f7f7f"
)

response <- p$plotly(trace0, kwargs=list(layout=layout, filename="size-margins", fileopt="overwrite"))
url <- response$url
filename <- response$filename