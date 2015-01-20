library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')

p <- ggplot(mtcars, aes(wt, mpg)) +
        geom_point(aes(colour = factor(cyl)))
out <- py$ggplotly(p, kwargs=list(filename="gg-geom_point", fileopt="overwrite"))

plotly_url <- out$response$url
