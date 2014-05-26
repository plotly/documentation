library(plotly)
p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  name = "SF Zoo", 
  x = c("giraffes", "orangutans", "monkeys"), 
  y = c(20, 14, 23), 
  type = "bar", 
  marker = list(
    color = "orange", 
    line = list(color = "grey")
  )
)
trace2 <- list(
  name = "LA Zoo", 
  x = c("giraffes", "orangutans", "monkeys"), 
  y = c(12, 18, 29), 
  type = "bar", 
  marker = list(
    color = "blue", 
    line = list(
      color = "grey", 
      width = 3
    )
  )
)

layout <- list(
  title = "Animal Population", 
  barmode = "group", 
  yaxis = list(title = "# of animals (thousands)"), 
  xaxis = list(type = "category"), 
  categories = c("giraffes", "orangutans", "monkeys"), 
  bargap = 0.25, 
  bargroupgap = 0.3, 
  orientation = "v"
)

response <- p$plotly(trace0, trace1, kwargs=list(layout=layout, filename="style-bar", fileopt="overwrite"))
url <- response$url
filename <- response$filename