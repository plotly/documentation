library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

x0 &lt;- rnorm(100)/5. + 0.5
y0 &lt;- rnorm(100)/5. + 0.5
x1 &lt;- runif(50)
y1 &lt;- runif(50) + 1.0


x &lt;- c(x0, x1)
y &lt;- c(y0, y1)

trace1 <- list(
  x = x0, 
  y = y0, 
  type = "scatter", 
  mode = "markers", 
  marker = list(
    symbol = "circle", 
    opacity = 0.7
  )
)
trace2 <- list(
  x = x1, 
  y = y1, 
  type = "scatter", 
  mode = "markers", 
  marker = list(
    symbol = "square", 
    opacity = 0.7
  )
)
trace3 <- list(
  x = x, 
  y = y, 
  type = "histogram2d"
)
response <- p$plotly(trace0, trace1, trace2, kwargs=list(filename="2d-histogram-scatter", fileopt="overwrite"))
url <- response$url
filename <- response$filename