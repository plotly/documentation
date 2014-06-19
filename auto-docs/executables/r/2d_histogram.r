library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

x <- rnorm(500)
y <- rnorm(500)+1
data <- list(
  list(
    x = x, 
    y = y, 
    type = "histogram2d"
  )
)

response <- p$plotly(data, kwargs=list(filename="2d-histogram", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename