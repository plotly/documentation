# 3D Scatter Plots in R | Examples | Plotly


# 3D Scatter Plots in R


```r
# variance-covariance matrix for a multivariate normal distribution
s <- matrix(
  c(1, .5, .5, .5, 1, .5, .5, .5, 1), 
  ncol = 3
)
# use the mvtnorm package to sample 200 observations
obs <- mvtnorm::rmvnorm(200, sigma = s)
# collect everything in a data-frame
df <- setNames(data.frame(obs), c("x", "y", "z"))

library(plotly)
plot_ly(df, x = ~x, y = ~y, z = ~z) %>% add_markers()
```




## 3D Scatter Plot with Hover Text


```r
set.seed(100)
d <- diamonds[sample(nrow(diamonds), 1000), ]
plot_ly(d, x = ~carat, y = ~price, z = ~depth) %>%
  add_markers(text = ~paste("Clarity: ", clarity))
```



