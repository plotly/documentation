library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

trace1 <- list(
  x = c(0, 1, 2), 
  y = c(1, 1, 1), 
  text = c("Text A", "Text B", "Text C"), 
  textposition = "top", 
  name = "Lines, Markers and Text", 
  mode = "lines+markers+text", 
  type = "scatter"
)
trace2 <- list(
  x = c(0, 1, 2), 
  y = c(2, 2, 2), 
  text = c("Text D", "Text E", "Text F"), 
  textposition = "bottom", 
  name = "Markers and Text", 
  mode = "markers+text", 
  type = "scatter"
)
trace3 <- list(
  x = c(0, 1, 2), 
  y = c(3, 3, 3), 
  text = c("Text G", "Text H", "Text I"), 
  textposition = "bottom", 
  name = "Lines and Text", 
  mode = "lines+text", 
  type = "scatter"
)
data <- list(trace1, trace2, trace3)
layout <- list(showlegend = FALSE)

response <- p$plotly(data, kwargs=list(layout=layout, filename="text-chart-basic", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename