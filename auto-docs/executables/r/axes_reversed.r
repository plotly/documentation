library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

data <- list(
  list(
    x = c(1, 2), 
    y = c(1, 2), 
    type = "scatter"
  )
)
layout <- list(xaxis = list(autorange = "reversed"))

response <- p$plotly(data, kwargs=list(layout=layout, filename="axes-reversed", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename