---
title: geom_density | Examples | Plotly
name: geom_density
permalink: ggplot2/geom_density/
description: Add a smooth density estimate calculated by stat_density with ggplot2 and R. Examples, tutorials, and code.
layout: base
thumbnail: thumbnail/stat_density.jpg
language: ggplot2
page_type: example_index
has_thumbnail: true
display_as: basic
order: 3
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

### Basic Density Plot


```r
library(plotly)

library(ggplot2)
set.seed(1234)

dfGamma = data.frame(nu75 = rgamma(100, 0.75),
           nu1 = rgamma(100, 1),
           nu2 = rgamma(100, 2))

dfGamma = stack(dfGamma)

p <- ggplot(dfGamma, aes(x = values)) +
  stat_density(aes(group = ind, color = ind),position="identity",geom="line")

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="geom_density/basic")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4054.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Density & Facet


```r
library(plotly)

require(plyr)
dd<-data.frame(matrix(rnorm(144, mean=2, sd=2),72,2),c(rep("A",24),rep("B",24),rep("C",24)))
colnames(dd) <- c("x_value", "Predicted_value",  "State_CD")

dd <- data.frame(
  predicted = rnorm(72, mean = 2, sd = 2),
  state = rep(c("A", "B", "C"), each = 24)
)

grid <- with(dd, seq(min(predicted), max(predicted), length = 100))
normaldens <- ddply(dd, "state", function(df) {
  data.frame(
    predicted = grid,
    density = dnorm(grid, mean(df$predicted), sd(df$predicted))
  )
})

p <- ggplot(dd, aes(predicted))  +
  geom_density() +
  geom_line(aes(y = density), data = normaldens, colour = "red") +
  facet_wrap(~ state)

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="geom_density/facet")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4056.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Multiple Density Plot


```r
library(plotly)

carrots <- data.frame(length = rnorm(100000, 6, 2))
cukes <- data.frame(length = rnorm(50000, 7, 2.5))

#Now, combine your two dataframes into one.  First make a new column in each.
carrots$veg <- 'carrot'
cukes$veg <- 'cuke'

#and combine into your new data frame vegLengths
vegLengths <- rbind(carrots, cukes)

#now make your lovely plot
p <- ggplot(vegLengths, aes(length, fill = veg)) + geom_density(alpha = 0.2)

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="geom_density/multiple")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4058.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Stacked Density Plot


```r
library(plotly)
set.seed(123)

df <- data.frame(x <- rchisq(1000, 5, 10),
                 group <- sample(LETTERS[1:5], size = 1000, replace = T))

p <- ggplot(df, aes(x, fill = group)) + 
  geom_density(alpha = 0.5, position = "stack") + 
  ggtitle("stacked density chart")

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="geom_density/stacked")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4060.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Overlay Histogram


```r
library(plotly)
set.seed(123)

df <- data.frame(x <- rchisq(1000, 5, 10),
                 group <- sample(LETTERS[1:5], size = 1000, replace = T))

p <- ggplot(df, aes(x)) + 
  geom_histogram(aes(y = ..density..), alpha = 0.7, fill = "#333333") + 
  geom_density(fill = "#ff4d4d", alpha = 0.5) + 
  theme(panel.background = element_rect(fill = '#ffffff')) + 
  ggtitle("Density with Histogram overlay")

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="geom_density/histogram")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4062.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Overlay Scatterplot


```r
library(plotly)
set.seed(123)

df <- data.frame(x <- rchisq(1000, 10, 10),
                 y <- rnorm(1000))

p <- ggplot(df, aes(x, y)) + 
  geom_point(alpha = 0.5) + 
  geom_density_2d() + 
  theme(panel.background = element_rect(fill = '#ffffff')) + 
  ggtitle("2D density plot with scatterplot overlay")

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="geom_density/scatter")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4064.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Kernel Density Estimate


```r
library(plotly)

p <- ggplot(diamonds, aes(x = price)) + 
  geom_density(aes(fill = "epanechnikov"), kernel = "epanechnikov") + 
  facet_grid(~cut) + 
  ggtitle("Kernel density estimate with Facets")

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="geom_density/estimate")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4066.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Kernel Density Plot


```r
library(plotly)

p <- ggplot(diamonds, aes(x = price)) + 
  geom_density(aes(fill = color), alpha = 0.5) + 
  ggtitle("Kernel Density estimates by group")

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="geom_density/kernel-plot")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4068.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

These plots were inspired by <a href="http://docs.ggplot2.org/current/">ggplot2 documentation</a>.
