library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')

orange <- qplot(
              age,
              circumference,
              data = Orange,
              colour = Tree,
              geom = "line")

out <- py$ggplotly(orange, kwargs=list(filename="gg-basic-line", fileopt="overwrite"))
plotly_url <- out$response$url
