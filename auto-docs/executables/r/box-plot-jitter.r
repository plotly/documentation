library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

data <- list(
  list(
    y = c(0, 1, 1, 2, 3, 5, 8, 13, 21), 
    boxpoints = "all", 
    jitter = 0.3, 
    pointpos = -1.8, 
    type = "box"
  )
)

response <- p$plotly(data, kwargs=list(filename="box-plot-jitter", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename