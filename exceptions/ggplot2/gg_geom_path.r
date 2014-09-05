library(plotly)
library(plyr)

py <- plotly(username='TestBot', key='r1neazxo9w')

myear <- ddply(movies, .(year), colwise(mean, .(length, rating)))
p <- ggplot(myear, aes(length, rating))
out <- py$ggplotly(p + geom_path(colour='green') + scale_size(range = c(1, 3)))

plotly_url <- out$response$url
