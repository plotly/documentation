library(plotly)

p <- plotly(username='theengineear', key='o9zlr0hy6z')

size <- 50
z <- matrix(0, size, size)
for(r in 1:size) {
    for(c in 1:size) {
        z[r, c] <- sqrt(r*c/size^2)
    }
}
data <- list(
  list(
    z = z, 
    scl = "Jet", 
    type = "heatmap"
  )
)
layout <- list(title = "Jet")

response <- p$plotly(data, kwargs=list(layout=layout, filename="Jet-heatmap", fileopt="overwrite", auto_open="FALSE"))
url <- response$url
filename <- response$filename