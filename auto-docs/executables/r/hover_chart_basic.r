# Learn about API authentication here: {{BASE_URL}}/r/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    x = c(0, 1, 2), 
    y = c(1, 3, 2), 
    mode = "markers", 
    text = c("Text A", "Text B", "Text C"), 
    type = "scatter"
  )
)
layout <- list(title = "Hover over the points to see the text")
response <- py$plotly(data, kwargs=list(layout=layout, filename="hover-chart-basic", fileopt="overwrite"))
url <- response$url
