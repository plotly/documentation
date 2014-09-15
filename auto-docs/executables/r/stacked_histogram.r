library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')
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
data <- list(trace1, trace2)
layout <- list(barmode = "stacked")
response <- p$plotly(data, kwargs=list(layout=layout, fileopt="overwrite", filename="stacked-histogram"))
url <- response$url