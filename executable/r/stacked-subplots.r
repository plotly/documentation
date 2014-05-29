library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(0, 1, 2), 
  y = c(10, 11, 12), 
  type = "scatter"
)
trace2 <- list(
  x = c(2, 3, 4), 
  y = c(100, 110, 120), 
  xaxis = "x2", 
  yaxis = "y2", 
  type = "scatter"
)
trace3 <- list(
  x = c(3, 4, 5), 
  y = c(1000, 1100, 1200), 
  xaxis = "x3", 
  yaxis = "y3", 
  type = "scatter"
)

layout <- list(
  yaxis = list(domain = c(0, 0.266)), 
  legend = list(traceorder = "reversed"), 
  xaxis3 = list(anchor = "y3"), 
  xaxis2 = list(anchor = "y2"), 
  yaxis2 = list(domain = c(0.366, 0.633)), 
  yaxis3 = list(domain = c(0.733, 1))
)



response <- p$plotly(trace0, trace1, trace2, kwargs=list(layout=layout, filename="stacked-subplots", fileopt="overwrite"))
url <- response$url
filename <- response$filename