library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

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
data <- list(trace1, trace2)
layout <- list(
  xaxis = list(type = "category"), 
  barmode = "stack", 
  categories = c("giraffes", "orangutans", "monkeys")
)

response <- p$plotly(data, kwargs=list(layout=layout, filename="stacked-bar", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename