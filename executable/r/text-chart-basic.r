library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

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

layout <- list(showlegend = FALSE)



response <- p$plotly(trace0, trace1, trace2, kwargs=list(layout=layout, filename="text-chart-basic", fileopt="overwrite"))
url <- response$url
filename <- response$filename