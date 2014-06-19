library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

data <- list(
  list(
    x = c("2013-10-04 22:23:00", "2013-11-04 22:23:00", "2013-12-04 22:23:00"), 
    y = c(1, 3, 6), 
    type = "scatter"
  )
)

response <- p$plotly(data, kwargs=list(filename="date-axes", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename