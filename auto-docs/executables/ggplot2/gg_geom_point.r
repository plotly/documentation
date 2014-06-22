library(plotly)
library(ggplot2)

py <- plotly("R-demos", "p9g4f35ytd")

p <- ggplot(mtcars, aes(wt, mpg))
out <- py$ggplotly(p + geom_point(aes(colour = factor(cyl))))

plotly_url <- out$response$url
