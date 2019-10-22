---
name: geom_contour
permalink: ggplot2/geom_contour/
description: How to make a contour in ggplot2 using geom_contour.
layout: base
thumbnail: thumbnail/geom_contour.jpg
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
## [1] '4.8.0.9000'
```

### Basic geom\_contour plot
geom\_contour produces a similar output to geom\_density\_2d, except it uses a third variable for the values rather than frequency. The volcano dataset comes pre-loaded on R.


```r
library(plotly)
library(reshape2)
df <- melt(volcano)

p <- ggplot(df, aes(Var1, Var2, z= value)) +
  geom_contour() +
  scale_fill_distiller(palette = "Spectral", direction = -1)
p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="geom_contour/basic-plot")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5832.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Coloured Plot
[See here](https://ggplot2.tidyverse.org/reference/scale_brewer.html) for a list of colour palettes that come with the brewer (discrete) and distiller (continuous) packages.


```r
library(plotly)
library(reshape2)
df <- melt(volcano)

p <- ggplot(df, aes(Var1, Var2, z= value, colour=stat(level))) +
  geom_contour() +
  scale_colour_distiller(palette = "YlGn", direction = 1)
ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="geom_contour/coloured-plot")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5834.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Filled Plot
It's possible to colour in each of the layers, by changing geom\_contour to stat\_contour as below. As the edges of the graph indicate, filled contour plots only work when each layer is an enclosed shape rather than an open line; a geom more suited to this functionality would be geom\_tile or geom\_raster.


```r
library(plotly)
library(reshape2)
df <- melt(volcano)

p <- ggplot(df, aes(Var1, Var2, z= value)) +
  stat_contour(geom="polygon",aes(fill=stat(level))) +
  scale_fill_distiller(palette = "Spectral", direction = -1)
ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="geom_contour/filled-plot")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5830.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

