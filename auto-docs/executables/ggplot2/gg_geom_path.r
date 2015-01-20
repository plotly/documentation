library(plotly)
library(plyr)

py <- plotly(username='TestBot', key='r1neazxo9w')

myear <- ddply(movies, .(year), colwise(mean, .(length, rating)))
p <- ggplot(myear, aes(length, rating)) +
        geom_path(colour='green') +
        scale_size(range = c(1, 3))
out <- py$ggplotly(p, kwargs=list(filename="gg-geom_path", fileopt="overwrite"))

plotly_url <- out$response$url
