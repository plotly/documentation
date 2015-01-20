library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')

df <- data.frame(x=sort(rnorm(47)))
p <- ggplot(df, aes(seq_along(x), x)) +
        geom_step()

out <- py$ggplotly(p, kwargs=list(filename="geom_step", fileopt="overwrite"))
plotly_url <- out$response$url
