library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

trace1 <- list(
  x = c("Trial 1", "Trial 2", "Trial 3"), 
  y = c(3, 6, 4), 
  name = "Control", 
  error_y = list(
    array = c(1, 0.5, 1.5), 
    type = "data", 
    visible = TRUE
  ), 
  type = "bar"
)
trace2 <- list(
  x = c("Trial 1", "Trial 2", "Trial 3"), 
  y = c(4, 7, 3), 
  name = "Experimental", 
  error_y = list(
    array = c(0.5, 1, 2), 
    type = "data", 
    visible = TRUE
  ), 
  type = "bar"
)
data <- list(trace1, trace2)
layout <- list(barmode = "group")

response <- p$plotly(data, kwargs=list(layout=layout, filename="error-bar-bar", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename