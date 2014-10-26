library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')

data <- list(
  list(
    z = matrix(c(1, 20, 30, 50, 1, 20, 1, 60, 80, 30, 30, 60, 1, -10, 20), nrow=3, ncol=5), 
    x = c("Monday", "Tuesday", "Wednesday", "Thursday", "Friday"), 
    y = c("Morning", "Afternoon", "Evening"), 
    type = "heatmap"
  )
)
response <- py$plotly(data, kwargs=list(filename="labelled-heatmap", fileopt="overwrite"))
url <- response$url
