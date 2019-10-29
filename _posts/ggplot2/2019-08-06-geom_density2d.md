---
name: geom_density2d
permalink: ggplot2/geom_density2d/
description: How to make a density map using geom_density2d.
layout: base
thumbnail: thumbnail/geom_density2d.jpg
language: ggplot2
page_type: example_index
has_thumbnail: true
display_as: statistical
order: 8
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

### Basic 2D Graph
Source: [Brett Carpenter from Data.World](https://data.world/brettcarpenter/craft-beer-data)


```r
library(plotly)
beers <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/beers.csv", stringsAsFactors = FALSE)

p <- ggplot(beers, aes(x=abv, y=ibu)) +
  geom_density2d() +
  labs(y = "bitterness (IBU)",
       x = "alcohol volume (ABV)",
       title = "Craft beers from American breweries")
ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="geom_density2d/basic-graph")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5855.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Filled
Since each of the lines (in the above graph) shows a different "level", setting "fill = stat(level)" allows for a filled graph.


```r
library(plotly)
beers <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/beers.csv", stringsAsFactors = FALSE)

p <- ggplot(beers, aes(x=abv, y=ibu)) +
  stat_density2d(aes(fill = stat(level)), geom="polygon") +
  labs(y = "bitterness (IBU)",
       x = "alcohol volume (ABV)",
       title = "Craft beers from American breweries")
ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="geom_density2d/filled")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5857.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Preset Colourscale
["Viridis" colourscales](https://ggplot2.tidyverse.org/reference/scale_viridis.html) are designed to still be perceptible in black-and-white, as well as for those with colourblindness. It comes with five colourscales, selected using the option= parameter: "magma" (or "A"), "inferno" (or "B"), "plasma" (or "C"), "viridis" (or "D", the default), and "cividis" (or "E").


```r
library(plotly)
beers <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/beers.csv", stringsAsFactors = FALSE)

p <- ggplot(beers, aes(x=abv, y=ibu)) +
  stat_density2d(aes(fill = stat(level)), geom="polygon") +
  scale_fill_viridis_c(option = "plasma") +
  theme(legend.position = "magma") +
  labs(y = "bitterness (IBU)",
       x = "alcohol volume (ABV)",
       title = "Craft beers from American breweries")
ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="geom_density2d/preset-colours")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5859.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Customized Colourscale
You can also set your own colour gradients by defining a high and low point.

```r
library(plotly)
beers <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/beers.csv", stringsAsFactors = FALSE)

p <- ggplot(beers, aes(x=abv, y=ibu)) +
  stat_density2d(aes(fill = stat(level)), geom="polygon") +
  scale_fill_gradient(low = "lightskyblue1", high = "darkred") +
  theme(legend.position = "none") +
  labs(y = "bitterness (IBU)",
       x = "alcohol volume (ABV)",
       title = "Craft beers from American breweries")
ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="geom_density2d/customized-colours")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5861.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Overlaid Points
I use variable "style2" to filter out the six most common beer styles. This way, we can see that the cluster of beers in the top right (i.e. more bitter and higher alcohol content) are IPAs - perhaps unsurprisingly.


```r
library(plotly)
library(dplyr)
beers <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/beers.csv", stringsAsFactors = FALSE)

p <- ggplot(beers, aes(x=abv, y=ibu)) +
  geom_density2d(alpha=0.5) +
  geom_point(data=filter(beers, !is.na(style2)), aes(colour=style2, text = label), alpha=0.3) +
  labs(y = "bitterness (IBU)",
       x = "alcohol volume (ABV)",
       title = "Craft beers from American breweries",
       colour = "Beer types")
ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="geom_density2d/overlaid-points")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5863.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

