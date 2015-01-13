# Learn about API authentication here: {BASE_URL}/r/getting-started
# Find your api_key here: {BASE_URL}/settings/api

library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    x = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
    y = c(0, 1, 2, 3, 4, 5, 6, 7, 8), 
    type = "scatter"
  )
)
layout <- list(
  title = "Global Font", 
  font = list(
    family = "Courier New, monospace", 
    size = 18, 
    color = "#7f7f7f"
  )
)
response <- py$plotly(data, kwargs=list(layout=layout, filename="global-font", fileopt="overwrite"))
url <- response$url
