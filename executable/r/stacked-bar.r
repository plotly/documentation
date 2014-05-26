library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  name = "SF Zoo", 
  x = c("giraffes", "orangutans", "monkeys"), 
  y = c(20, 14, 23), 
  type = "bar"
)
trace2 <- list(
  name = "LA Zoo", 
  x = c("giraffes", "orangutans", "monkeys"), 
  y = c(12, 18, 29), 
  type = "bar"
)

layout <- list(
  barmode = "stack", 
  xaxis = list(type = "category"), 
  categories = c("giraffes", "orangutans", "monkeys")
)

response <- p$plotly(trace0, trace1, kwargs=list(layout=layout, filename="stacked-bar", fileopt="overwrite"))
url <- response$url
filename <- response$filename