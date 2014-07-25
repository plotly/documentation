library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

x0 <- rnorm(100)/5. + 0.5
y0 <- rnorm(100)/5. + 0.5
x1 <- runif(50)
y1 <- runif(50) + 1.0


x <- c(x0, x1)
y <- c(y0, y1)
trace1 <- list(
  x = x0, 
  y = y0, 
  mode = "markers", 
  marker = list(
    symbol = "circle", 
    opacity = 0.7
  ), 
  type = "scatter"
)
trace2 <- list(
  x = x1, 
  y = y1, 
  mode = "markers", 
  marker = list(
    symbol = "square", 
    opacity = 0.7
  ), 
  type = "scatter"
)
trace3 <- list(
  x = x, 
  y = y, 
  type = "histogram2d"
)
data <- list(trace1, trace2, trace3)

response <- p$plotly(data, kwargs=list(filename="2d-histogram-scatter", fileopt="overwrite", auto_open=FALSE))
url <- response$url
filename <- response$filename