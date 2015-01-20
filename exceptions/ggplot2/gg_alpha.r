library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')

prettyPlot <- ggplot(data=diamonds, aes(x=carat, y=price, colour=clarity))
prettyPlot <- prettyPlot + geom_point(alpha = 1/10)
out <- py$ggplotly(prettyPlot, kwargs=list(filename="gg-alpha", fileopt="overwrite"))

plotly_url <- out$response$url
