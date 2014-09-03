library(plotly)
library(ggplot2)

py <- plotly(username='TestBot', key='r1neazxo9w')

data(canada.cities, package="maps")
viz <- ggplot(canada.cities, aes(long, lat)) +
  borders(regions="canada", name="borders") +
  coord_equal() +
  geom_point(aes(text=name, size=pop), colour="red", alpha=1/2, name="cities")

out <- py$ggplotly(viz)
plotly_url <- out$response$url
