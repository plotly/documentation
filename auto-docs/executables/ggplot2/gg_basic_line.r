library(plotly)
library(ggplot2)

py <- plotly(username='TestBot', key='r1neazxo9w')

orange <- qplot(
              age,
              circumference,
              data = Orange,
              colour = Tree,
              geom = "line")

out <- py$ggplotly(orange)
plotly_url <- out$response$url
