library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')

p <- ggplot(seals, aes(x = long, y = lat)) +
        geom_segment(aes(xend = long + delta_long, yend = lat + delta_lat))
out <- py$ggplotly(p, kwargs=list(filename="gg-geom_segment", fileopt="overwrite"))
plotly_url <- out$response$url
