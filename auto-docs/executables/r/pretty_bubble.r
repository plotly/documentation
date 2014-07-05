library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

trace1 <- list(
  x = c(974, 29796, 1391, 1713, 4959), 
  y = c(43, 75, 64, 59, 72), 
  mode = "markers", 
  name = "Europe", 
  text = c("Afghanistan", "Bahrain", "Bangladesh", "Cambodia", "China"), 
  marker = list(
    color = "#0074D9", 
    size = c(5.647, 0.841, 12.265, 3.759, 36.313), 
    sizemode = "area", 
    sizeref = 0.01
  ), 
  type = "scatter"
)
trace2 <- list(
  x = c(6223, 4797, 1441, 12569, 430), 
  y = c(72, 42, 56, 50, 49), 
  mode = "markers", 
  name = "Africa", 
  text = c("Algeria", "Angola", "Benin", "Botswana", "Burundi"), 
  marker = list(
    color = "#FF851B", 
    size = c(5.773, 3.524, 2.842, 1.28, 2.896), 
    sizemode = "area", 
    sizeref = 0.1
  ), 
  type = "scatter"
)
trace3 <- list(
  x = c(12779, 3822, 9065, 36319, 13171), 
  y = c(75, 65, 72, 80, 78), 
  mode = "markers", 
  name = "Americas", 
  text = c("Argentina", "Bolivia", "Brazil", "Canada", "Chile"), 
  marker = list(
    color = "#3D9970", 
    size = c(6.348, 3.019, 13.784, 5.778, 4.035), 
    sizemode = "area", 
    sizeref = 0.1
  ), 
  type = "scatter"
)
data <- list(trace1, trace2, trace3)
layout <- list(
  xaxis = list(
    title = "GDP per Capita", 
    type = "log"
  ), 
  yaxis = list(title = "Life Expectancy"), 
  annotations = list(
    list(
      x = -0.15, 
      y = -0.15, 
      xref = "paper", 
      yref = "paper", 
      text = "Points are sized by<br>country population", 
      showarrow = FALSE, 
      xanchor = "left"
    )
  ), 
  hovermode = "closest"
)

response <- p$plotly(data, kwargs=list(layout=layout, filename="pretty-bubble", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename