library(plotly)
library(ggplot2)
library(plyr)

py <- plotly("R-demos", "p9g4f35ytd")

myear <- ddply(movies, .(year), colwise(mean, .(length, rating)))
p <- ggplot(myear, aes(length, rating))
out <- py$ggplotly(p + geom_path(colour='green') + scale_size(range = c(1, 3)))

plotly_url <- out$response$url
