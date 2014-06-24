library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

trace1 <- list(
  x = c(0, 1, 2), 
  y = c(1, 1, 1), 
  mode = "lines+markers+text", 
  name = "Lines, Markers and Text", 
  text = c("Text A", "Text B", "Text C"), 
  textfont = list(
    family = "sans serif", 
    size = 18, 
    color = "#1f77b4"
  ), 
  textposition = "top right", 
  type = "scatter"
)
trace2 <- list(
  x = c(0, 1, 2), 
  y = c(2, 2, 2), 
  mode = "lines+markers+text", 
  name = "Lines and Text", 
  text = c("Text G", "Text H", "Text I"), 
  textfont = list(
    family = "sans serif", 
    size = 18, 
    color = "#ff7f0e"
  ), 
  textposition = "bottom", 
  type = "scatter"
)
data <- list(trace1, trace2)
layout <- list(showlegend = FALSE)

response <- p$plotly(data, kwargs=list(layout=layout, filename="text-chart-styling", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename