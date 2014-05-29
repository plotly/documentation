library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

x &lt;- rnorm(500)
y &lt;- rnorm(500)+1

trace1 <- list(
  x = x, 
  y = y, 
  scl = list(c(0, "rgb(12,51,131)"),list(0.25, "rgb(10,136,186)"),list(0.5, "rgb(242,211,56)"),list(0.75, "rgb(242,143,56)"),list(1, "rgb(217,30,30)")), 
  autobinx = FALSE, 
  autobiny = FALSE, 
  xbins = list(
    start = -3, 
    end = 3, 
    size = 0.1
  ), 
  ybins = list(
    start = -2.5, 
    end = 4, 
    size = 0.1
  ), 
  histnorm = "probability", 
  type = "histogram2d"
)


response <- p$plotly(trace0, kwargs=list(filename="2d-histogram-options", fileopt="overwrite"))
url <- response$url
filename <- response$filename