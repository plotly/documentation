library(plotly)
require(lattice)

py <- plotly("R-demos", "p9g4f35ytd")

w <- ggplot(data=barley, aes(x=yield, y=variety, color=year)) +
  geom_point() +
  facet_wrap(~site)

out <- py$ggplotly(w)
plotly_url <- out$response$url
