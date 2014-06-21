library(plotly)
library(ggplot2)

py <- plotly("R-demos", "p9g4f35ytd")

# Consider the following data frame
researchers <- data.frame(
  country = c("Canada", "Canada", "Germany", "USA"),
  name    = c("Warren", "Andreanne", "Stefan", "Toby"),
  papers  = c(23, 14, 37, 20),
  field   = c("Math", "Bio", "Bio", "Math"))

# Let us plot the number of papers (y) per name (x)
plt <- ggplot(researchers, aes(x = name, y = papers)) + geom_bar(stat = "identity")

out <- py$ggplotly(plt)
plotly_url <- out$response$url
