library(plotly)
library(ggplot2)

py <- plotly("R-demos", "p9g4f35ytd")

orange <- qplot(
              age,
              circumference,
              data = Orange,
              colour = Tree,
              geom = "line")

out <- py$ggplotly(orange)
plotly_url <- out$response$url
