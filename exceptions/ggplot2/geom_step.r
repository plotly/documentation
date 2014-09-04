library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')

df <- data.frame(x=sort(rnorm(47)))
p <- ggplot(df, aes(seq_along(x), x))

out <- py$ggplotly(p + geom_step())
plotly_url <- out$response$url
