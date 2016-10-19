# Axes Labels in R


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

#### Figure Labels for 2D Charts

```r
library(plotly)
f <- list(
  family = "Courier New, monospace",
  size = 18,
  color = "#7f7f7f"
)
x <- list(
  title = "x Axis",
  titlefont = f
)
y <- list(
  title = "y Axis",
  titlefont = f
)
plot_ly(x = ~rnorm(10), y = ~rnorm(10), mode = "markers") %>%
  layout(xaxis = x, yaxis = y)
```

<iframe src="https://plot.ly/~RPlotBot/2817.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Figure Labels for 3D Charts


```r
library(plotly)
set.seed(123)

n <- 100
theta <- runif(n, 0, 2*pi)
u <- runif(n, -1, 1)

plot_ly(x = ~sqrt(1 - u^2) * cos(theta), y = ~sqrt(1 - u^2) * sin(theta), z = ~u) %>%
  layout(
    title = "Layout options in a 3d scatter plot",
    scene = list(
      xaxis = list(title = "Cos"),
      yaxis = list(title = "Sin"),
      zaxis = list(title = "Z")
    ))
```

<iframe src="https://plot.ly/~RPlotBot/2814.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
