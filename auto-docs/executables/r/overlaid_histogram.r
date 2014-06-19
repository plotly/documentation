library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

x0 = rnorm(500)
x1 = rnorm(500)+1
trace1 <- list(
  x = x0, 
  opacity = 0.75, 
  type = "histogram"
)
trace2 <- list(
  x = x1, 
  opacity = 0.75, 
  type = "histogram"
)
data <- list(trace1, trace2)
layout <- list(barmode = "overlay")

response <- p$plotly(data, kwargs=list(layout=layout, filename="overlaid-histogram", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename