library(plotly)
library(ggplot2)

py <- plotly("R-demos", "p9g4f35ytd")

p <- ggplot(seals, aes(x = long, y = lat))

out <- py$ggplotly((p <- p + geom_segment(aes(xend = long + delta_long, yend = lat + delta_lat))))
plotly_url <- out$response$url
