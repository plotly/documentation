---
title: Colorscales in R | Examples | Plotly
name: Colorscales
permalink: r/colorscales/
description: How to create colorscales in R with Plotly.
layout: base
language: r
page_type: example_index
has_thumbnail: true
display_as: style_opt
order: 6
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
## [1] '4.7.1'
```

### Colorscale for Scatter Plots


```r
library(plotly)

p <- plot_ly(
  type = 'scatter',
  mode='markers',
  y=rep(5, 40),
  marker=list(
    size=seq(0, 39),
    color=seq(0, 39),
    colorbar=list(
      title='Colorbar'
    ),
    colorscale='Viridis',
    reversescale =T
  )
  ) %>%
  layout(
    xaxis = list(
      showgrid = F,
      zeroline = F
    ),
    yaxis = list(
      showgrid = F,
      zeroline = F
    )
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="colorscales/scatter")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5148.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#Reference

See [https://plot.ly/r/reference/#heatmap-colorscale](https://plot.ly/r/reference/#heatmap-colorscale) for more information and options!
