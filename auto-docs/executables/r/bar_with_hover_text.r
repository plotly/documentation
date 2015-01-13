# Learn about API authentication here: {BASE_URL}/r/getting-started
# Find your api_key here: {BASE_URL}/settings/api

library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    x = c("Liam", "Sophie", "Jacob", "Mia", "William", "Olivia"), 
    y = c(8.0, 8.0, 12.0, 12.0, 13.0, 20.0), 
    text = c("4.17 below the mean", "4.17 below the mean", "0.17 below the mean", "0.17 below the mean", "0.83 above the mean", "7.83 above the mean"), 
    marker = list(color = "rgb(142, 124, 195)"), 
    type = "bar"
  )
)
layout <- list(
  title = "Number of graphs made this week", 
  font = list(family = "Raleway, sans-serif"), 
  showlegend = FALSE, 
  xaxis = list(tickangle = -45), 
  yaxis = list(
    zeroline = FALSE, 
    gridwidth = 2
  ), 
  bargap = 0.05
)
response <- py$plotly(data, kwargs=list(layout=layout, filename="bar-with-hover-text", fileopt="overwrite"))
url <- response$url
