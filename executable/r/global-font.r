library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
  y = c(0, 1, 2, 3, 4, 5, 6, 7, 8)
)

layout <- list(
  title = "Global Font", 
  font = list(
    color = "#7f7f7f", 
    family = "Courier New, monospace", 
    size = 18
  )
)

response <- p$plotly(trace0, kwargs=list(layout=layout, filename="global-font", fileopt="overwrite"))
url <- response$url
filename <- response$filename