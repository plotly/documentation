library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')

ggiris <- qplot(Petal.Width, Sepal.Length, data = iris, color = Species)

out <- py$ggplotly(ggiris, kwargs=list(filename="gg-basic-scatter", fileopt="overwrite"))
plotly_url <- out$response$url
