library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

x &lt;- rnorm(500)
y &lt;- rnorm(500)+1

trace1 <- list(
  x = x, 
  y = y, 
  type = "histogram2d"
)


response <- p$plotly(trace0, kwargs=list(filename="2d-histogram", fileopt="overwrite"))
url <- response$url
filename <- response$filename