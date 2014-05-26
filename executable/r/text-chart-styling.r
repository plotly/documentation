library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(0, 1, 2), 
  y = c(1, 1, 1), 
  name = "Lines, Markers and Text", 
  text = c("Text A", "Text B", "Text C"), 
  type = "scatter", 
  mode = "lines+markers+text", 
  textposition = "top right", 
  textfont = list(
    color = "#1f77b4", 
    family = "sans serif", 
    size = 18
  )
)
trace2 <- list(
  x = c(0, 1, 2), 
  y = c(2, 2, 2), 
  name = "Lines and Text", 
  text = c("Text G", "Text H", "Text I"), 
  type = "scatter", 
  mode = "lines+markers+text", 
  textposition = "bottom", 
  textfont = list(
    color = "#ff7f0e", 
    family = "sans serif", 
    size = 18
  )
)

layout <- list(showlegend = FALSE)

response <- p$plotly(trace0, trace1, kwargs=list(layout=layout, filename="text-chart-styling", fileopt="overwrite"))
url <- response$url
filename <- response$filename