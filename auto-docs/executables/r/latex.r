# Learn about API authentication here: {{BASE_URL}}/r/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')
trace1 <- list(
  x = c(1, 2, 3, 4), 
  y = c(1, 4, 9, 16), 
  name = "$\alpha_{1c} = 352 \pm 11 \text{ km s}^{-1}$", 
  type = "scatter"
)
trace2 <- list(
  x = c(1, 2, 3, 4), 
  y = c(0.5, 2, 4.5, 8), 
  name = "$\beta_{1c} = 25 \pm 11 \text{ km s}^{-1}$", 
  type = "scatter"
)
data <- list(trace1, trace2)
layout <- list(
  xaxis = list(title = "$\sqrt{(n_\text{c}(t|{T_\text{early}}))}$"), 
  yaxis = list(title = "$d, r \text{ (solar radius)}$")
)
response <- py$plotly(data, kwargs=list(layout=layout, filename="latex", fileopt="overwrite"))
url <- response$url
