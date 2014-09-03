library(plotly)
library(ggplot2)
library("ggthemes")

py <- plotly(username='TestBot', key='r1neazxo9w')

dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
few <- (qplot(carat, price, data = dsamp, colour = cut) +
          theme_few() +
          scale_colour_few())

out <- py$ggplotly(few)
plotly_url <- out$response$url
