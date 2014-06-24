library(plotly)
library(ggplot2)

py <- plotly("R-demos", "p9g4f35ytd")

df <- data.frame(x=sort(rnorm(47)))
p <- ggplot(df, aes(seq_along(x), x))

out <- py$ggplotly(p + geom_step())
plotly_url <- out$response$url
