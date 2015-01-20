library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')

m <- ggplot(movies, aes(x=rating)) +
        geom_histogram(aes(weight = votes))

out <- py$ggplotly(m, kwargs=list(filename="geom_histogram", fileopt="overwrite"))

plotly_url <- out$response$url
