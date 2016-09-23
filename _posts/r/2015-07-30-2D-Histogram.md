# 2D Histograms in R | Examples | Plotly



# 2D Histogram in R

2D histograms require `x`/`y`, but in contrast to heatmaps, `z` is optional. If `z` is not provided, binning occurs in the browser (see [here](https://plot.ly/r/reference/#histogram2d-histnorm) for a list of binning options). 


```r
# install.packages('mvtnorm')
library(plotly)
s <- matrix(c(1, -.75, -.75, 1), ncol = 2)
obs <- mvtnorm::rmvnorm(500, sigma = s)
p <- plot_ly(x = obs[,1], y = obs[,2])
subplot(
  p %>% add_markers(alpha = 0.2),
  p %>% add_histogram2d()
)
```

<iframe src="https://plot.ly/~RPlotBot/3045.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>


If `z` is not provided, the only way to control coloring is through the [colorscale attribute](https://plot.ly/r/reference/#histogram2d-colorscale)


```r
p %>% add_histogram2d(colorscale = "Blues")
```

<iframe src="https://plot.ly/~RPlotBot/3045.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

If you want more control for the binning algorithm, you can supply a 2D table or matrix to `z`. In this case, the R package will impose it's colorscale default (and the `colors` argument can be used to control the colorscale from R):


```r
cnt <- with(diamonds, table(cut, clarity))
plot_ly(diamonds, x = ~cut, y = ~clarity, z = ~cnt) %>% 
  add_histogram2d()
```

<iframe src="https://plot.ly/~RPlotBot/3047.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
