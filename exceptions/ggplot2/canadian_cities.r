library(plotly)

py <- plotly(username='TestBot', key='r1neazxo9w')

data(canada.cities, package="maps")
viz <- ggplot(canada.cities, aes(long, lat)) +
          borders(regions="canada", name="borders") +
          coord_equal() +
          geom_point(aes(text=name, size=pop), colour="red", alpha=1/2, name="cities")

out <- py$ggplotly(viz, kwargs=list(filename="canadian-cities", fileopt="overwrite"))
plotly_url <- out$response$url
