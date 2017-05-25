---
title: geom_spoke in ggplot2 | Examples | Plotly
name: geom_spoke
permalink: ggplot2/geom_spoke/
description: How to use geom_spoke with Plotly.
layout: base
thumbnail: thumbnail/geom_spoke.jpg
language: ggplot2
page_type: example_index
has_thumbnail: true
display_as: basic
order: 11
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
## [1] '4.7.0'
```

### Basic Example


```r
library(plotly)

df <- expand.grid(x = 1:10, y=1:10)
df$angle <- runif(100, 0, 2*pi)
df$speed <- runif(100, 0, sqrt(0.1 * df$x))

p <- ggplot(df, aes(x, y)) +
  geom_point() +
  geom_spoke(aes(angle = angle, radius = speed))

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="geom_spoke/basic")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4417.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
Reference: [ggplot2 docs](http://ggplot2.tidyverse.org/reference/geom_spoke.html#examples)

### Reference

See [https://plot.ly/r/reference](https://plot.ly/r/reference) for more information and options!
