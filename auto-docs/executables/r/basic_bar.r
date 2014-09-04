library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    x = c("giraffes", "orangutans", "monkeys"), 
    y = c(20, 14, 23), 
    type = "bar"
  )
)
response <- py$plotly(data, kwargs=list(auto_open=FALSE, fileopt="overwrite", filename="basic-bar"))
url <- response$url