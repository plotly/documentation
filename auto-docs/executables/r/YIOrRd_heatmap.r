library(plotly)

p <- plotly(username='TestBot', key='r1neazxo9w')

size <- 50
z <- matrix(0, size, size)
for(r in 1:size) {
    for(c in 1:size) {
        z[r, c] <- r+c
    }
}

data <- list(
  list(
    z = z, 
    scl = "YIOrRd", 
    type = "heatmap"
  )
)
layout <- list(title = "YIOrRd")

response <- p$plotly(data, kwargs=list(layout=layout, filename="YIOrRd-heatmap", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename