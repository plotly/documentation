library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

trace1 <- list(
  z = matrix(c(1, 20, 30, 50, 1, 20, 1, 60, 80, 30, 30, 60, 1, -10, 20), nrow=3, ncol=5), 
  x = c("Monday", "Tuesday", "Wednesday", "Thursday", "Friday"), 
  y = c("Morning", "Afternoon", "Evening"), 
  type = "heatmap"
)


response <- p$plotly(trace0, kwargs=list(filename="labelled-heatmap", fileopt="overwrite"))
url <- response$url
filename <- response$filename