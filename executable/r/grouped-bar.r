library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c("giraffes", "orangutans", "monkeys"), 
  y = c(20, 14, 23), 
  name = "SF Zoo", 
  type = "bar"
)
trace2 <- list(
  x = c("giraffes", "orangutans", "monkeys"), 
  y = c(12, 18, 29), 
  name = "LA Zoo", 
  type = "bar"
)

layout <- list(
  xaxis = list(type = "category"), 
  categories = c("giraffes", "orangutans", "monkeys"), 
  barmode = "group"
)



response <- p$plotly(trace0, trace1, kwargs=list(layout=layout, filename="grouped-bar", fileopt="overwrite"))
url <- response$url
filename <- response$filename