library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')

m <- ggplot(movies, aes(x=rating))
out <- py$ggplotly(m + geom_histogram(aes(weight = votes)))

plotly_url <- out$response$url
