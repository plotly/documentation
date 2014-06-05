library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  x = c(52698, 43117), 
  y = c(53, 31), 
  text = c("United States", "Canada"), 
  name = "North America", 
  mode = "markers", 
  marker = list(
    line = list(
      color = "white", 
      width = 0.5
    ), 
    size = 12, 
    color = "rgb(164, 194, 244)"
  ), 
  type = "scatter"
)
trace2 <- list(
  x = c(39317, 37236, 35650, 30066, 29570, 27159, 23557, 21046, 18007), 
  y = c(33, 20, 13, 19, 27, 19, 49, 44, 38), 
  text = c("Germany", "Britain", "France", "Spain", "Italy", "Czech Rep.", "Greece", "Poland"), 
  name = "Europe", 
  mode = "markers", 
  marker = list(
    line = list(
      color = "white", 
      width = 0.5
    ), 
    size = 12, 
    color = "rgb(255, 217, 102)"
  ), 
  type = "scatter"
)
trace3 <- list(
  x = c(42952, 37037, 33106, 17478, 9813, 5253, 4692, 3899), 
  y = c(23, 42, 54, 89, 14, 99, 93, 70), 
  text = c("Australia", "Japan", "South Korea", "Malaysia", "China", "Indonesia", "Philippines", "India"), 
  name = "Asia/Pacific", 
  mode = "markers", 
  marker = list(
    line = list(
      color = "white", 
      width = 0.5
    ), 
    size = 12, 
    color = "rgb(234, 153, 153)"
  ), 
  type = "scatter"
)
trace4 <- list(
  x = c(19097, 18601, 15595, 13546, 12026, 7434, 5419), 
  y = c(43, 47, 56, 80, 86, 93, 80), 
  text = c("Chile", "Argentina", "Mexico", "Venezuela", "Venezuela", "El Salvador", "Bolivia"), 
  name = "Latin America", 
  mode = "markers", 
  marker = list(
    line = list(
      color = "white", 
      width = 0.5
    ), 
    size = 12, 
    color = "rgb(142, 124, 195)"
  ), 
  type = "scatter"
)

layout <- list(
  title = "Quarter 1 Growth", 
  xaxis = list(
    title = "GDP per Capita", 
    showgrid = FALSE, 
    zeroline = FALSE
  ), 
  yaxis = list(
    title = "Percent", 
    showline = FALSE
  )
)



response <- p$plotly(trace0, trace1, trace2, trace3, kwargs=list(layout=layout, filename="line-style", fileopt="overwrite"))
url <- response$url
filename <- response$filename