library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')

trace1 <- list(
  x = c(0, 1, 2), 
  y = c(1, 1, 1), 
  mode = "lines+markers+text", 
  name = "Lines, Markers and Text", 
  text = c("Text A", "Text B", "Text C"), 
  textposition = "top right", 
  textfont = list(
    family = "sans serif", 
    size = 18, 
    color = "#1f77b4"
  ), 
  type = "scatter"
)
trace2 <- list(
  x = c(0, 1, 2), 
  y = c(2, 2, 2), 
  mode = "lines+markers+text", 
  name = "Lines and Text", 
  text = c("Text G", "Text H", "Text I"), 
  textposition = "bottom", 
  textfont = list(
    family = "sans serif", 
    size = 18, 
    color = "#ff7f0e"
  ), 
  type = "scatter"
)
data <- list(trace1, trace2)
layout <- list(showlegend = FALSE)
response <- py$plotly(data, kwargs=list(layout=layout, filename="text-chart-styling", fileopt="overwrite"))
url <- response$url
