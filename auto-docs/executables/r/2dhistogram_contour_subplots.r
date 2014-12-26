# Learn about API authentication here: plot.ly/r/getting-started
# Find your api_key here: plot.ly/settings/api

library(plotly)

t = seq(-1, 1.2, length=2000)
x = t^3+0.3*rnorm(2000)
y = t^6+0.3*rnorm(2000)

py <- plotly(username='TestBot', key='r1neazxo9w')
trace1 <- list(
  x = x, 
  y = y, 
  mode = "markers", 
  name = "points", 
  marker = list(
    color = "rgb(102,0,0)", 
    size = 2, 
    opacity = 0.4
  ), 
  type = "scatter"
)
trace2 <- list(
  x = x, 
  y = y, 
  name = "density", 
  ncontours = 20, 
  colorscale = "Hot", 
  reversescale = TRUE, 
  showscale = FALSE, 
  type = "histogram2dcontour"
)
trace3 <- list(
  x = x, 
  name = "x density", 
  marker = list(color = "rgb(102,0,0)"), 
  yaxis = "y2", 
  type = "histogram"
)
trace4 <- list(
  y = y, 
  name = "y density", 
  marker = list(color = "rgb(102,0,0)"), 
  xaxis = "x2", 
  type = "histogram"
)
data <- list(trace1, trace2, trace3, trace4)
layout <- list(
  showlegend = FALSE, 
  autosize = FALSE, 
  width = 600, 
  height = 550, 
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
  margin = list(t = 50), 
  hovermode = "closest", 
  bargap = 0, 
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
response <- py$plotly(data, kwargs=list(layout=layout, filename="2dhistogram-contour-subplots", fileopt="overwrite"))
url <- response$url
