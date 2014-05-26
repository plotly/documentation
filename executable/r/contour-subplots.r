library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

t = seq(-1, 1.2, length=2000)
x = t^3+0.3*rnorm(2000)
y = t^6+0.3*rnorm(2000)

trace1 <- list(
  x = x, 
  y = y, 
  mode = "markers", 
  name = "points", 
  type = "scatter", 
  marker = list(
    color = "rgb(102,0,0)", 
    opacity = 0.4, 
    size = 2
  )
)
trace2 <- list(
  x = x, 
  y = y, 
  type = "histogram2dcontour", 
  name = "density", 
  scl = "Hot", 
  reversescl = TRUE, 
  showscale = FALSE, 
  ncontours = 20
)
trace3 <- list(
  x = x, 
  type = "histogram", 
  name = "x density", 
  yaxis = "y2", 
  marker = list(color = "rgb(102,0,0)")
)
trace4 <- list(
  y = y, 
  type = "histogram", 
  name = "y density", 
  xaxis = "x2", 
  marker = list(color = "rgb(102,0,0)")
)

layout <- list(
  hovermode = "closest", 
  width = 600, 
  height = 550, 
  autosize = FALSE, 
  showlegend = FALSE, 
  bargap = 0, 
  margin = list(t = 50), 
  xaxis = list(
    domain = c(0, 0.85), 
    showgrid = FALSE, 
    zeroline = FALSE
  ), 
  yaxis = list(
    domain = c(0, 0.85), 
    showgrid = FALSE, 
    zeroline = FALSE
  ), 
  xaxis2 = list(
    domain = c(0.85, 1), 
    showgrid = FALSE, 
    zeroline = FALSE
  ), 
  yaxis2 = list(
    domain = c(0.85, 1), 
    showgrid = FALSE, 
    zeroline = FALSE
  )
)

response <- p$plotly(trace0, trace1, trace2, trace3, kwargs=list(layout=layout, filename="contour-subplots", fileopt="overwrite"))
url <- response$url
filename <- response$filename