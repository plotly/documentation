---
title: Ternary Contour Plots in R | Examples | Plotly
name: Ternary Contour Plot
permalink: r/ternary-contour/
description: How to create Ternary Contour Plots in R with Plotly.
layout: base
thumbnail: thumbnail/ternary-contour.jpg
language: r
has_thumbnail: true
display_as: scientific
order: 13.5
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

### Basic Ternary Contour Plot


```r
library(plotly)
library(rjson)

df <- fromJSON(file="https://gist.githubusercontent.com/davenquinn/988167471993bc2ece29/raw/f38d9cb3dd86e315e237fde5d65e185c39c931c2/data.json") 

colors = c('#8dd3c7','#ffffb3','#bebada',
          '#fb8072','#80b1d3','#fdb462',
          '#b3de69','#fccde5','#d9d9d9',
          '#bc80bd','#ccebc5','#ffed6f');

p <- plot_ly()

for (i in 1:length(df)) {
  l = c()
  m = c()
  n = c()
  
  for (j in 1:length(df[[i]])) {
    l[[j]] <- df[[i]][[j]]$clay
    m[[j]] <- df[[i]][[j]]$sand
    n[[j]] <- df[[i]][[j]]$silt
  }
  
  p <- add_trace(
    p,
    type = 'scatterternary',
    a = l,
    b = m,
    c = n,
    name = names(df[i]),
    mode = 'lines',
    line = list(
      color='#444'
    ),
    fill = 'toself',
    fillcolor = colors[i],
    showlegend = F
    )
}

p <- layout(
  p,
  title = "Simple Ternary Contour Plot in R",
  ternary = list(
    sum = 100,
    aaxis = list(
      title = "clay",
      ticksuffix = "%",
      min = 0.01,
      linewidth = 2,
      ticks = "outside"
    ),
    baxis = list(
      title = "sand",
      ticksuffix = "%",
      min = 0.01,
      linewidth = 2,
      ticks = "outside"
    ),
    caxis = list(
      title = "silt",
      ticksuffix = "%",
      min = 0.01,
      linewidth = 2,
      ticks = "outside"
    )
  )
)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="ternarycontour-basic")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4588.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#Reference

See [https://plot.ly/r/reference/#scatterternary](https://plot.ly/r/reference/#scatterternary) for more information and options!
