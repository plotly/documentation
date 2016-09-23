# Histograms in R | Examples | Plotly



# Histograms in R

### Basic histogram


```r
library(plotly)
plot_ly(x = ~rnorm(50), type = "histogram")
```



### Overlaid histograms


```r
plot_ly(alpha = 0.6) %>%
  add_histogram(x = ~rnorm(500)) %>%
  add_histogram(x = ~rnorm(500) + 1) %>%
  layout(barmode = "overlay")
```


