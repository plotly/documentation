library(plotly)

p <- plotly(username='test-runner', key='9h29fe3l0x')

size <- 50
z <- matrix(0, size, size)
for(r in 1:size) {
    for(c in 1:size) {
        z[r, c] <- sqrt(r*c/size^2)
    }
}

trace1 <- list(
  z = z, 
  scl = "Jet", 
  type = "heatmap"
)

layout <- list(title = "Jet")



response <- p$plotly(trace0, kwargs=list(layout=layout, filename="Jet-heatmap", fileopt="overwrite"))
url <- response$url
filename <- response$filename