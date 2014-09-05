library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')
trace1 <- list(
  x = c(0, 1, 2), 
  y = c(1, 1, 1), 
  mode = "lines+markers+text", 
  name = "Lines, Markers and Text", 
  text = c("Text A", "Text B", "Text C"), 
  textposition = "top", 
  type = "scatter"
)
trace2 <- list(
  x = c(0, 1, 2), 
  y = c(2, 2, 2), 
  mode = "markers+text", 
  name = "Markers and Text", 
  text = c("Text D", "Text E", "Text F"), 
  textposition = "bottom", 
  type = "scatter"
)
trace3 <- list(
  x = c(0, 1, 2), 
  y = c(3, 3, 3), 
  mode = "lines+text", 
  name = "Lines and Text", 
  text = c("Text G", "Text H", "Text I"), 
  textposition = "bottom", 
  type = "scatter"
)
data <- list(trace1, trace2, trace3)
layout <- list(showlegend = FALSE)
response <- p$plotly(data, kwargs=list(layout=layout, auto_open=FALSE, fileopt="overwrite", filename="text-chart-basic"))
url <- response$url