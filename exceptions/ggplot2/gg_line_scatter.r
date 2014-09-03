library(plotly)
library(ggplot2)

py <- plotly(username='TestBot', key='r1neazxo9w')

model <- lm(mpg ~ wt + factor(cyl), data=mtcars)
grid <- with(mtcars, expand.grid(
  wt = seq(min(wt), max(wt), length = 20),
  cyl = levels(factor(cyl))
))

grid$mpg <- stats::predict(model, newdata=grid)

viz2 <- qplot(wt, mpg, data=mtcars, colour=factor(cyl)) + geom_line(data=grid)
out <- py$ggplotly(viz2)
plotly_url <- out$response$url
