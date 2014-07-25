library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

x <- rnorm(500)
y <- rnorm(500)+1
data <- list(
  list(
    x = x, 
    y = y, 
    histnorm = "probability", 
    autobinx = FALSE, 
    xbins = list(
      start = -3, 
      end = 3, 
      size = 0.1
    ), 
    autobiny = FALSE, 
    ybins = list(
      start = -2.5, 
      end = 4, 
      size = 0.1
    ), 
    colorscale = list(c(0, "rgb(12,51,131)"),list(0.25, "rgb(10,136,186)"),list(0.5, "rgb(242,211,56)"),list(0.75, "rgb(242,143,56)"),list(1, "rgb(217,30,30)")), 
    type = "histogram2d"
  )
)

response <- p$plotly(data, kwargs=list(filename="2d-histogram-options", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename