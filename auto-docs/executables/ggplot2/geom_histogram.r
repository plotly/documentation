library(plotly)
library(ggplot2)

py <- plotly("R-demos", "p9g4f35ytd")

m <- ggplot(movies, aes(x=rating))
out <- py$ggplotly(m + geom_histogram(aes(weight = votes)))

plotly_url <- out$response$url
