library(plotly)
library("ggthemes")

py <- plotly(username='TestBot', key='r1neazxo9w')

dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
gray <- (qplot(carat, price, data = dsamp, colour = cut) +
           theme_igray())

out <- py$ggplotly(gray)
plotly_url <- out$response$url
