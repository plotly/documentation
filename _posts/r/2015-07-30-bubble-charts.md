# Bubble Charts in R | Examples | Plotly



# Bubble Charts


```r
library(plotly)
d <- diamonds[sample(nrow(diamonds), 1000), ]
# note how size is automatically scaled
plot_ly(d, x = ~carat, y = ~price, size = ~carat)
```




```r
plot_ly(d, x = ~carat, y = ~price, text = ~paste("Clarity: ", clarity), 
        color = ~carat, size = ~carat)
```


