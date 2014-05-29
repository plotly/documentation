library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

x0 = rnorm(500)
x1 = rnorm(500)+1

trace1 <- list(
  x = x0, 
  type = "histogram"
)
trace2 <- list(
  x = x1, 
  type = "histogram"
)

layout <- list(barmode = "stacked")



response <- p$plotly(trace0, trace1, kwargs=list(layout=layout, filename="stacked-histogram", fileopt="overwrite"))
url <- response$url
filename <- response$filename