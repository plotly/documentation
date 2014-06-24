library(plotly)
library(ggplot2)

py <- plotly("R-demos", "p9g4f35ytd")

ggiris <- qplot(Petal.Width, Sepal.Length, data = iris, color = Species)

out <- py$ggplotly(ggiris)
plotly_url <- out$response$url
