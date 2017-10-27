---
title: Scattermapbox in R | Examples | Plotly
name: Scattermapbox
permalink: r/scattermapbox/
description: How to create scattermapbox plots in R with Plotly.
layout: base
thumbnail: thumbnail/scatter-mapbox.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: maps
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
## [1] '4.5.6.9000'
```

### Mapbox Access Token

To create mapbox maps with Plotly, you'll need a Mapbox account and a [Mapbox Access Token](https://www.mapbox.com/studio/) that you can add to your [Plotly Settings](https://plot.ly/settings/mapbox). If you're using a Plotly On-Premise server, please see additional instructions here: https://help.plot.ly/mapbox-atlas/.


```r
library(plotly)

Sys.setenv('MAPBOX_TOKEN' = 'your_mapbox_token_here')
```

### Basic Example


```r
library(plotly)

dat <- map_data("world", "canada") %>% group_by(group)

p <- plot_mapbox(dat, x = ~long, y = ~lat) %>%
  add_paths(size = I(2)) %>%
  add_segments(x = -100, xend = -50, y = 50, 75) %>%
  layout(mapbox = list(zoom = 0,
                       center = list(lat = ~median(lat),
                                     lon = ~median(long))
  ))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="mapbox/basic")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4320.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Multiple Markers


```r
library(plotly)

df = read.csv('https://raw.githubusercontent.com/bcdunbar/datasets/master/meteorites_subset.csv')

p <- df %>%
  plot_mapbox(lat = ~reclat, lon = ~reclong,
              split = ~class, size=2,
              mode = 'scattermapbox', hoverinfo='name') %>%
  layout(title = 'Meteorites by Class',
         font = list(color='white'),
         plot_bgcolor = '#191A1A', paper_bgcolor = '#191A1A',
         mapbox = list(style = 'dark'),
         legend = list(orientation = 'h',
                       font = list(size = 8)),
         margin = list(l = 25, r = 25,
                       b = 25, t = 25,
                       pad = 2))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="mapbox/multiple")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4322.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Adding lines to Mapbox


```r
library(plotly)
library(dplyr)

# airport locations
air <- read.csv('https://raw.githubusercontent.com/plotly/datasets/master/2011_february_us_airport_traffic.csv')

# flights between airports
flights <- read.csv('https://raw.githubusercontent.com/plotly/datasets/master/2011_february_aa_flight_paths.csv')
flights$id <- seq_len(nrow(flights))

p <- plot_mapbox(mode = 'scattermapbox') %>%
  add_markers(
    data = air, x = ~long, y = ~lat, text=~airport, color=I("red"),
    size = ~cnt, hoverinfo = "text", alpha = 0.5) %>%
  add_segments(
    data = group_by(flights, id),
    x = ~start_lon, xend = ~end_lon,
    y = ~start_lat, yend = ~end_lat,
    alpha = 0.3, size = I(1), hoverinfo = "none",
    color=I("red")) %>%
  layout(
    plot_bgcolor = '#191A1A', paper_bgcolor = '#191A1A',
    mapbox = list(style = 'dark',
                  zoom = 1.5,
                  center = list(lat = median(air$lat),
                                lon = median(air$long))),
    margin = list(l = 0, r = 0,
                  b = 0, t = 0,
                  pad = 0),
    showlegend=FALSE)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="mapbox/lines")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4372.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#Reference

See [https://plot.ly/r/reference/#scattermapbox](https://plot.ly/r/reference/#scattermapbox) for more information and options!
