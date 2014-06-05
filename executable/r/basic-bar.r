library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

data <- list(
  list(
    x = c("giraffes", "orangutans", "monkeys"), 
    y = c(20, 14, 23), 
    type = "bar"
  )
)

response <- p$plotly(data, kwargs=list(filename="basic-bar", fileopt="overwrite"))
url <- response$url
filename <- response$filename