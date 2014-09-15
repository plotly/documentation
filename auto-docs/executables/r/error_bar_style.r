library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')
x_theo <- seq(-4,4,length=100)
sinc <- function(x) {
    y <- sin(x) / x
    y[x == 0] <- 1
    y
}
sincx <- sinc(x_theo)
x <- c(-3.8, -3.03, -1.91, -1.46, -0.89, -0.24, -0.0, 0.41, 0.89, 1.01, 1.91, 2.28, 2.79, 3.56)
y <- c(-0.02, 0.04, -0.01, -0.27, 0.36, 0.75, 1.03, 0.65, 0.28, 0.02, -0.11, 0.16, 0.04, -0.15)

trace1 <- list(
  x = x_theo, 
  y = sincx, 
  name = "sinc(x)", 
  type = "scatter"
)
trace2 <- list(
  x = x, 
  y = y, 
  mode = "markers", 
  name = "measured", 
  error_y = list(
    type = "constant", 
    value = 0.1, 
    color = "#85144B", 
    thickness = 1.5, 
    width = 3, 
    opacity = 1
  ), 
  error_x = list(
    type = "constant", 
    value = 0.2, 
    color = "#85144B", 
    thickness = 1.5, 
    width = 3, 
    opacity = 1
  ), 
  marker = list(
    color = "#85144B", 
    size = 8
  ), 
  type = "scatter"
)
data <- list(trace1, trace2)
response <- p$plotly(data, kwargs=list(fileopt="overwrite", filename="error-bar-style"))
url <- response$url