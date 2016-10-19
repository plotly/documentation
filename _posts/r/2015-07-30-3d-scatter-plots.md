# 3D Scatter Plots in R | Examples | Plotly


### New to Plotly?

Plotly's R library is free and open source!<br>
[Get started](https://plot.ly/r/getting-started/) by downloading the client and [reading the primer](https://plot.ly/r/getting-started/).<br>
You can set up Plotly to work in [online](https://plot.ly/r/getting-started/#hosting-graphs-in-your-online-plotly-account) or [offline](https://plot.ly/r/offline/) mode.<br>
We also have a quick-reference [cheatsheet](https://images.plot.ly/plotly-documentation/images/r_cheat_sheet.pdf) (new!) to help you get started!

### Version Check

Version 4 of Plotly's R package is now [available](https://plot.ly/r/getting-started/#installation)!<br>
Check out [this post](http://moderndata.plot.ly/upgrading-to-plotly-4-0-and-above/) for more information on breaking changes and new features available in this version.

```r
library(plotly)
packageVersion('plotly')
```

```
## [1] '4.5.2'
```

#### 3D Scatter Plots in R


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

<iframe src="https://plot.ly/~RPlotBot/3056.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>


#### 3D Scatter Plot with Hover Text


```r
set.seed(100)
d <- diamonds[sample(nrow(diamonds), 1000), ]
plot_ly(d, x = ~carat, y = ~price, z = ~depth) %>%
  add_markers(text = ~paste("Clarity: ", clarity))
```

<iframe src="https://plot.ly/~RPlotBot/3058.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
