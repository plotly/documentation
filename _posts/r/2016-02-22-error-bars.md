# Error Bars in R | Examples | Plotly



# Error Bars


```r
library(dplyr)
library(plotly)

data <- mpg %>% 
  group_by(class) %>%
  summarise(highway = mean(hwy), sd = 1.96 * sd(hwy), city = mean(cty)) %>%
  arrange(desc(highway)) %>%
  tidyr::gather(key, value, highway, city)

data %>%
  plot_ly(x = ~value, y = ~factor(class, unique(class))) %>%
  add_markers(color = ~key, error_x = ~list(value = sd)) %>%
  layout(xaxis = list(title = "miles per gallon"), yaxis = list(title = ""))
```

```
## Warning in RColorBrewer::brewer.pal(N, "Set2"): minimal value for n is 3, returning requested palette with 3 different levels
```


```
## Warning in RColorBrewer::brewer.pal(N, "Set2"): minimal value for n is 3, returning requested palette with 3 different levels
```
