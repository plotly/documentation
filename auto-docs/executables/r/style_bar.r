library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

trace1 <- list(
  x = c("giraffes", "orangutans", "monkeys"), 
  y = c(20, 14, 23), 
  name = "SF Zoo", 
  marker = list(
    line = list(color = "grey"), 
    color = "orange"
  ), 
  type = "bar"
)
trace2 <- list(
  x = c("giraffes", "orangutans", "monkeys"), 
  y = c(12, 18, 29), 
  name = "LA Zoo", 
  marker = list(
    line = list(
      color = "grey", 
      width = 3
    ), 
    color = "blue"
  ), 
  type = "bar"
)
data <- list(trace1, trace2)
layout <- list(
  title = "Animal Population", 
  xaxis = list(type = "category"), 
  yaxis = list(title = "# of animals (thousands)"), 
  categories = c("giraffes", "orangutans", "monkeys"), 
  barmode = "group", 
  bargap = 0.25, 
  bargroupgap = 0.3, 
  orientation = "v"
)

response <- p$plotly(data, kwargs=list(layout=layout, filename="style-bar", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename