library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

y0 = rnorm(50)
y1 = rnorm(50)+1

trace1 <- list(
  y = y0, 
  type = "box"
)
trace2 <- list(
  y = y1, 
  type = "box"
)
data <- list(trace1, trace2)

response <- p$plotly(data, kwargs=list(filename="basic-box-plot", fileopt="overwrite"))
url <- response$url
filename <- response$filename