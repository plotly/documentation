library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

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

layout <- list(
  xaxis = list(title = "$\sqrt{(n_\text{c}(t|{T_\text{early}}))}$"), 
  yaxis = list(title = "$d, r \text{ (solar radius)}$")
)



response <- p$plotly(trace0, trace1, kwargs=list(layout=layout, filename="latex", fileopt="overwrite"))
url <- response$url
filename <- response$filename