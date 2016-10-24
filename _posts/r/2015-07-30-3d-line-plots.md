---
title: 3D Line Plots in R | Examples | Plotly
name: 3D Line Plots
permalink: r/3d-line-plots/
description: How to make interactive 3D line plots in R.
layout: base
thumbnail: thumbnail/3d-line.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: 3d_charts
order: 2
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
## [1] '4.5.2'
```

### Basic 3D Line Plot


```r
# Initiate a 100 x 3 matrix filled with zeros
m <- matrix(numeric(300), ncol = 3)

# Simulate a 3D random-walk
for (i in 2:100) m[i, ] <- m[i-1, ] + rnorm(3)

df <- setNames(
  data.frame(m, seq(1, 100)),
  c("x", "y", "z", "time")
)
library(plotly)
p <- plot_ly(df, x = ~x, y = ~y, z = ~z, color = ~time) %>% add_lines()

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="scatter3d/colorscale")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3054.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
