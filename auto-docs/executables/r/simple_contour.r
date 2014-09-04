import numpy as np

size = 100
x = np.linspace(-2*np.pi, 2*np.pi, size)
y = np.linspace(-2*np.pi, 2*np.pi, size)
z = np.empty((size, size))
for i, xi in enumerate(x):
    for j, yj in enumerate(y):
        r2 = (xi**2+yj**2)
        z[i][j] = np.sin(xi)*np.cos(yj)*np.sin(r2)/(np.log(r2+1))
library(plotly)
py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    z = z, 
    x = x, 
    y = y, 
    type = "contour"
  )
)
response <- py$plotly(data, kwargs=list(auto_open=FALSE, fileopt="overwrite", filename="simple-contour"))
url <- response$url