---
title: stat_smooth | Examples | Plotly
name: stat_smooth
permalink: ggplot2/stat_smooth/
description: Add a smoothed line in ggplot2 and R with stat_smooth.
layout: base
thumbnail: thumbnail/stat_smooth.jpg
language: ggplot2
page_type: example_index
has_thumbnail: true
display_as: statistical
order: 5
output:
  html_document:
    keep_md: true
---



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
## [1] '4.5.6.9000'
```

### Basic


```r
library(plotly)

p <- ggplot(mpg, aes(displ, hwy))
p <- p + geom_point() + stat_smooth()

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="stat_smooth/basic")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4189.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
Inspired by <a href="http://docs.ggplot2.org/current/">ggplot2 documentation</a>

### Trend Lines


```r
library(plotly)

x <- 1:10
y <- jitter(x^2)

DF <- data.frame(x, y)

p <- ggplot(DF, aes(x = x, y = y)) + geom_point() +
    stat_smooth(method = 'lm', aes(colour = 'linear'), se = FALSE) +
    stat_smooth(method = 'lm', formula = y ~ poly(x,2), aes(colour = 'polynomial'), se= FALSE) +
    stat_smooth(method = 'nls', formula = y ~ a * log(x) +b, aes(colour = 'logarithmic'), se = FALSE, start = list(a=1,b=1)) +
    stat_smooth(method = 'nls', formula = y ~ a*exp(b *x), aes(colour = 'Exponential'), se = FALSE, start = list(a=1,b=1))

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="stat_smooth/trend")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4191.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
Inspired by <a href="http://stackoverflow.com/questions/15102254/how-do-i-add-different-trend-lines-in-r">Stack Oveflow</a>

### Facetgrid


```r
library(plotly)

x <- rnorm(100)
y <-  + .7*x + rnorm(100)
f1 <- as.factor(c(rep("A",50),rep("B",50)))
f2 <- as.factor(rep(c(rep("C",25),rep("D",25)),2))
df <- data.frame(cbind(x,y))
df$f1 <- f1
df$f2 <- f2

p <- ggplot(df,aes(x=x,y=y)) +
    geom_point() +
    facet_grid(f1~f2) +
    stat_smooth(method="lm")

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="stat_smooth/facetgrid")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4193.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
Inspired by <a href="http://stackoverflow.com/questions/12572035/adding-a-regression-line-to-a-facet-grid-with-qplot-in-r">Stack Overflow</a>

### Add Legend


```r
library(plotly)
set.seed(123)

x <- rnorm(1000)
y1 <- 2*x + rnorm(1000)
y2 <- x^2 + rnorm(1000)

ds <- data.frame(data = x, 
                 Linear = y1, 
                 Quadratic = y2)


cols1 <- c("#ff8080", "#66b3ff")
cols2 <- c("#ff4d4d", "#3399ff")

p <- ggplot(ds, aes(x = data)) + 
  geom_point(aes(y = Linear, color = "Linear"), size = 2, alpha = 0.5) + 
  geom_point(aes(y = Quadratic, color = "Non Linear"), size = 2, alpha = 0.5) + 
  stat_smooth(aes(x = data, y = Linear, linetype = "Linear Fit"), method = "lm", formula = y ~ x, se = F, size = 0.25, color = cols2[1]) + 
  stat_smooth(aes(x = data, y = Quadratic, linetype = "Quadratic Fit"), method = "lm", formula = y ~ poly(x,2), se = F, size = 0.25, color = cols2[2]) + 
  scale_color_manual(name = "Relationship", values = c(cols1[1], cols1[2])) + 
  scale_linetype_manual(name = "Fit Type", values = c(2, 2)) + 
  ggtitle("Manual Legend for Stat Smooth")

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="stat_smooth/legend")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4195.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
Inspired by <a href="http://stackoverflow.com/questions/17148679/construct-a-manual-legend-for-a-complicated-plot">Stack Overflow</a>

