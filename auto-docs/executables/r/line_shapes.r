library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

trace1 <- list(
  x = c(1, 2, 3, 4, 5), 
  y = c(1, 3, 2, 3, 1), 
  mode = "lines+markers", 
  name = "linear", 
  line = list(shape = "linear"), 
  type = "scatter"
)
trace2 <- list(
  x = c(1, 2, 3, 4, 5), 
  y = c(6, 8, 7, 8, 6), 
  mode = "lines+markers", 
  name = "spline", 
  text = c("tweak line smoothness<br>with 'smoothing in line object'", "tweak line smoothness<br>with 'smoothing in line object'", "tweak line smoothness<br>with 'smoothing in line object'", "tweak line smoothness<br>with 'smoothing in line object'", "tweak line smoothness<br>with 'smoothing in line object'", "tweak line smoothness<br>with 'smoothing in line object'"), 
  line = list(shape = "spline"), 
  type = "scatter"
)
trace3 <- list(
  x = c(1, 2, 3, 4, 5), 
  y = c(11, 13, 12, 13, 11), 
  mode = "lines+markers", 
  name = "vhv", 
  line = list(shape = "vhv"), 
  type = "scatter"
)
trace4 <- list(
  x = c(1, 2, 3, 4, 5), 
  y = c(16, 18, 17, 18, 16), 
  mode = "lines+markers", 
  name = "hvh", 
  line = list(shape = "hvh"), 
  type = "scatter"
)
trace5 <- list(
  x = c(1, 2, 3, 4, 5), 
  y = c(21, 23, 22, 23, 21), 
  mode = "lines+markers", 
  name = "vh", 
  line = list(shape = "vh"), 
  type = "scatter"
)
trace6 <- list(
  x = c(1, 2, 3, 4, 5), 
  y = c(26, 28, 27, 28, 26), 
  mode = "lines+markers", 
  name = "hv", 
  line = list(shape = "hv"), 
  type = "scatter"
)
data <- list(trace1, trace2, trace3, trace4, trace5, trace6)
layout <- list(legend = list(
    y = 0.5, 
    traceorder = "reversed", 
    yref = "paper"
  ))

response <- p$plotly(data, kwargs=list(layout=layout, filename="line-shapes", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename