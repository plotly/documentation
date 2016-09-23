# Bar Charts in R | Examples | Plotly



# Bar Charts in R


```r
library(plotly)
p <- plot_ly(
  x = c("giraffes", "orangutans", "monkeys"),
  y = c(20, 14, 23),
  name = "SF Zoo",
  type = "bar"
)
p
```




```r
p2 <- add_trace(p, y = c(12, 18, 29), name = "LA Zoo")
p2
```




```r
layout(p2, barmode = "stack")
```



## customizing colors


```r
library(dplyr)
ggplot2::diamonds %>% count(cut) %>%
  plot_ly(x = ~cut, y = ~n, color = I("black"))
```



# mapping a color variable


```r
ggplot2::diamonds %>% count(cut, clarity) %>%
  plot_ly(x = ~cut, y = ~n, color = ~clarity)
```



