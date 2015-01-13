# Learn about API authentication here: {BASE_URL}/r/getting-started
# Find your api_key here: {BASE_URL}/settings/api

library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')
trace1 <- list(
  x = c("Trial 1", "Trial 2", "Trial 3"), 
  y = c(3, 6, 4), 
  name = "Control", 
  error_y = list(
    type = "data", 
    array = c(1, 0.5, 1.5), 
    visible = TRUE
  ), 
  type = "bar"
)
trace2 <- list(
  x = c("Trial 1", "Trial 2", "Trial 3"), 
  y = c(4, 7, 3), 
  name = "Experimental", 
  error_y = list(
    type = "data", 
    array = c(0.5, 1, 2), 
    visible = TRUE
  ), 
  type = "bar"
)
data <- list(trace1, trace2)
layout <- list(barmode = "group")
response <- py$plotly(data, kwargs=list(layout=layout, filename="error-bar-bar", fileopt="overwrite"))
url <- response$url
