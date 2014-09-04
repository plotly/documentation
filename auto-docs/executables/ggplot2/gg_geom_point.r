library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')

p <- ggplot(mtcars, aes(wt, mpg))
out <- py$ggplotly(p + geom_point(aes(colour = factor(cyl))))

plotly_url <- out$response$url
