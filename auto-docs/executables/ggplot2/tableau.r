library(plotly)
library("ggthemes")

py <- plotly(username='TestBot', key='r1neazxo9w')

dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
tableau <- (qplot(carat, price, data = dsamp, colour = cut) +
              theme_igray() +
              scale_colour_tableau())

out <- py$ggplotly(tableau, kwargs=list(filename="tableau", fileopt="overwrite"))
plotly_url <- out$response$url
