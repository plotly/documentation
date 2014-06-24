library(plotly)
library(ggplot2)

py <- plotly("R-demos", "p9g4f35ytd")

prettyPlot <- ggplot(data=diamonds, aes(x=carat, y=price, colour=clarity))
prettyPlot <- prettyPlot + geom_point(alpha = 1/10)
out <- py$ggplotly(prettyPlot)

plotly_url <- out$response$url
