library(plotly)
p <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    x = c("2013-10-04 22:23:00", "2013-11-04 22:23:00", "2013-12-04 22:23:00"), 
    y = c(1, 3, 6), 
    type = "scatter"
  )
)
response <- p$plotly(data, kwargs=list(auto_open=FALSE, fileopt="overwrite", filename="date-axes"))
url <- response$url