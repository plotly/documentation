library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')

ggiris <- qplot(Petal.Width, Sepal.Length, data = iris, color = Species)

out <- py$ggplotly(ggiris)
plotly_url <- out$response$url
