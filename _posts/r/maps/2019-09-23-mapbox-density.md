---
name: Mapbox Density
permalink: r/mapbox-density-heatmaps/
description: How to make a Mapbox Density Heatmap in R
layout: base
thumbnail: thumbnail/mapbox-density.png
language: r
page_type: example_index
has_thumbnail: true
display_as: maps
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
## [1] '4.9.0.9000'
```

### Mapbox Access Token

To plot on Mapbox maps with Plotly you "may" need a Mapbox account and a public [Mapbox Access Token](https://www.mapbox.com/studio). See our [Mapbox Map Layers](/r/mapbox-layers/) documentation for more information.

#### Stamen Terrain Tile, no Token Needed


```r
library(plotly)

quakes = read.csv('https://raw.githubusercontent.com/plotly/datasets/master/earthquakes-23k.csv')

p <- quakes %>%
  plot_ly(
    type = 'densitymapbox',
    lat = ~Latitude,
    lon = ~Longitude,
    coloraxis = 'coloraxis',
    radius = 10) %>%
  layout(
    mapbox = list(
      style="stamen-terrain",
      center= list(lon=180)), coloraxis = list(colorscale = "Viridis"))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="density-with-token")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5906.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#Reference

See [https://plot.ly/r/reference/#densitymapbox](https://plot.ly/r/reference/#densitymapbox) for more information and options!
