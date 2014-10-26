library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')

data <- list(
  list(
    x = c("giraffes", "orangutans", "monkeys"), 
    y = c(20, 14, 23), 
    type = "bar"
  )
)
response <- py$plotly(data, kwargs=list(filename="basic-bar", fileopt="overwrite"))
url <- response$url
