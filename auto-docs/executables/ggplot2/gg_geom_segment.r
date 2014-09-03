library(plotly)
library(ggplot2)

py <- plotly(username='TestBot', key='r1neazxo9w')

p <- ggplot(seals, aes(x = long, y = lat))

out <- py$ggplotly((p <- p + geom_segment(aes(xend = long + delta_long, yend = lat + delta_lat))))
plotly_url <- out$response$url
