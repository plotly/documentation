# Filled Area Plots in R | Examples



# Filled Area Plots in R

To make a filled area plot, use `add_lines()` and set `fill` to `"tozeroy"`.


```r
library(plotly)
p <- plot_ly(fill = "tozeroy")
for (i in c("x", "y", "z")) {
  d <- density(diamonds[[i]])
  p <- add_lines(p, x = d[["x"]], y = d[["y"]], name = i)
}
layout(p, xaxis = list(range = c(0, 10)))
```



If you don't want the fills for overlay, you can set different [fill modes](https://plot.ly/r/reference/#scatter-fill).


```r
plot_ly() %>%
  add_lines(x = c(1, 2, 3, 4), y = c(0, 2, 3, 5), fill = "tozeroy") %>%
  add_lines(x = c(1, 2, 3, 4), y = c(3, 5, 1, 7), fill = "tonexty")
```
