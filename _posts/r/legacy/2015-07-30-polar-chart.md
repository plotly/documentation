---
title: Polar Charts in R | Examples | Plotly
name: Polar Charts [legacy]
permalink: r/legacy-polar-chart/
description: How to create a polar chart in R. Three examples of polar line, polar scatter, and polar area chart.
layout: base
thumbnail: thumbnail/polar.jpg
language: r
#page_type: example_index
has_thumbnail: true
display_as: legacy_charts
order: 1
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
## [1] '4.7.1.9000'
```


### Legacy Plots

These polar charts are legacy and will likely be deprecated in [Plotly 2.0](https://github.com/plotly/plotly.js/issues/420). Please see the new `scatterpolar` and `scatterpolargl` [trace types](https://plot.ly/r/polar-chart/) for latest and greatest in Plotly polar coordinates.

### Polar Scatter Chart


```r
library(plotly)
p <- plot_ly(
  plotly::mic, r = ~r, t = ~t, color = ~nms, alpha = 0.5, type = "scatter"
)

p <- layout(p, title = "Mic Patterns", orientation = -90)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link <- api_create(p, filename = "polar-basic")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3165.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>


```r
p <- plot_ly(
  plotly::hobbs, r = ~r, t = ~t, color = ~nms, alpha = 0.5, type = "scatter"
)

p <- layout(p, title = "Hobbs-Pearson Trials", plot_bgcolor = toRGB("grey90"))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link <- api_create(p, filename = "polar-scatter")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3167.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Polar Area Chart


```r
p <- plot_ly(plotly::wind, r = ~r, t = ~t) %>% add_area(color = ~nms)
p <- layout(p, radialaxis = list(ticksuffix = "%"), orientation = 270)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link <- api_create(p, filename = "polar-area")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3169.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Reference
See [https://plot.ly/python/reference/#area](https://plot.ly/python/reference/#area) for more information and chart attribute options!
