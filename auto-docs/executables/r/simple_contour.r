# Learn about API authentication here: {{BASE_URL}}/r/getting-started
# Find your api_key here: {{BASE_URL}}/settings/api

library(plotly)

size <- 100
x <- seq(-2*pi, 2*pi, length=size)
y <- seq(-2*pi, 2*pi, length=size)
z <- matrix(0, size, size)
for(i in 1:size) {
    for(j in 1:size) {
        r2 <- x[i]^2 + y[j]^2
        z[i, j] <- sin(x[i])*cos(y[j])*sin(r2)/log(r2+1)
    }
}

py <- plotly(username='TestBot', key='r1neazxo9w')
data <- list(
  list(
    z = z, 
    x = x, 
    y = y, 
    type = "contour"
  )
)
response <- py$plotly(data, kwargs=list(filename="simple-contour", fileopt="overwrite"))
url <- response$url
