# Learn about API authentication here: {{BASE_URL}}/r/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    x = c("2013-10-04 22:23:00", "2013-11-04 22:23:00", "2013-12-04 22:23:00"), 
    y = c(1, 3, 6), 
    type = "scatter"
  )
)
response <- py$plotly(data, kwargs=list(filename="date-axes", fileopt="overwrite"))
url <- response$url
