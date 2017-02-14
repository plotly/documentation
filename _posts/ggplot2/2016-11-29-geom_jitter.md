---
title: geom_jitter | Examples | Plotly
name: geom_jitter
permalink: ggplot2/geom_jitter/
description: How to make plots in ggplot2 using geom_jitter.
layout: base
thumbnail: thumbnail/jitter.png
language: ggplot2
page_type: example_index
has_thumbnail: true
display_as: basic
order: 4
redirect_from: ggplot2/themes/
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

### Scatterplot


```r
library(plotly)

df <- data.frame(x = sample(LETTERS[1:10], size = 1000, replace = T),
                 y = sample(1:100, size = 1000, replace = T),
                 group = sample(letters[1:5], size = 1000, replace = T))

p <- ggplot(df, aes(x, y, color = group)) +
  geom_point() + 
  geom_jitter(width = 1, height = 1) + 
  ggtitle("geom_jitter: scatterplots")

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="geom_jitter/scatterplot")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4071.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Boxplot


```r
library(plotly)

p <- ggplot(mtcars, aes(x = factor(gear), y = mpg, color = cyl)) +
  geom_boxplot() + 
  geom_jitter(size = 2) +
  ggtitle("geom_jitter: boxplot")

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="geom_jitter/boxplot")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4073.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Add Text


```r
library(plotly)

p <- ggplot(mtcars, aes(x = factor(gear), y = mpg, color = cyl)) +
  geom_text(aes(label = mpg)) + 
  geom_jitter(size = 2) +
  ggtitle("geom_jitter: text")

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="geom_jitter/text")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4075.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Add Colors


```r
library(plotly)

p <- ggplot(mtcars, aes(x = factor(gear), y = mpg)) +
  geom_point(aes(color = cyl)) +
  geom_jitter(size = 2, color = "red") +
  ggtitle("geom_jitter: color")

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="geom_jitter/colors")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4077.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Add Error Bars


```r
library(plotly)
library(dplyr)

df <- mtcars %>% 
  group_by(cyl) %>% 
  summarise(min = min(mpg),
            max = max(mpg))

p <- ggplot(mtcars, aes(x = factor(cyl), y = mpg)) + 
  geom_jitter() + 
  geom_errorbar(data = df, aes(x = factor(cyl), y = 1, ymin = min, ymax = max))

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="geom_jitter/error-bars")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4079.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
