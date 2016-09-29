---
title: Scatter Plots on Maps in R | Examples | Plotly
name: Scatter Plots on Maps
permalink: r/scatter-plots-on-maps/
description: How to make scatter plots on maps in R. Scatter plots on maps highlight geographic areas and can be colored by value.
layout: base
thumbnail: thumbnail/scatter-plot-on-maps.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: maps
output:
  html_document:
    keep_md: true
---



### Basic Scatter on Map


```r
library(plotly)
df <- read.csv('https://raw.githubusercontent.com/plotly/datasets/master/2011_february_us_airport_traffic.csv')

# geo styling
g <- list(
  scope = 'usa',
  projection = list(type = 'albers usa'),
  showland = TRUE,
  landcolor = toRGB("gray95"),
  subunitcolor = toRGB("gray85"),
  countrycolor = toRGB("gray85"),
  countrywidth = 0.5,
  subunitwidth = 0.5
)

plot_geo(df, lat = ~lat, lon = ~long) %>%
  add_markers(
    text = ~paste(airport, city, state, paste("Arrivals:", cnt), sep = "<br />"),
    color = ~cnt, symbol = I("square"), size = I(8), hoverinfo = "text"
  ) %>%
  colorbar(title = "Incoming flights<br />February 2011") %>%
  layout(
    title = 'Most trafficked US airports<br />(Hover for airport)', geo = g
  )
```

<iframe src="https://plot.ly/~RPlotBot/3160.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Style Scatter Map Layout


```r
library(plotly)
df <- read.csv('https://raw.githubusercontent.com/plotly/datasets/master/2015_06_30_precipitation.csv')

# change default color scale title
m <- list(colorbar = list(title = "Total Inches"))

# geo styling
g <- list(
  scope = 'north america',
  showland = TRUE,
  landcolor = toRGB("grey83"),
  subunitcolor = toRGB("white"),
  countrycolor = toRGB("white"),
  showlakes = TRUE,
  lakecolor = toRGB("white"),
  showsubunits = TRUE,
  showcountries = TRUE,
  resolution = 50,
  projection = list(
    type = 'conic conformal',
    rotation = list(lon = -100)
  ),
  lonaxis = list(
    showgrid = TRUE,
    gridwidth = 0.5,
    range = c(-140, -55),
    dtick = 5
  ),
  lataxis = list(
    showgrid = TRUE,
    gridwidth = 0.5,
    range = c(20, 60),
    dtick = 5
  )
)

plot_geo(df, lat = ~Lat, lon = ~Lon, color = ~Globvalue) %>%
  add_markers(
    text = ~paste(df$Globvalue, "inches"), hoverinfo = "text"
  ) %>%
  layout(title = 'US Precipitation 06-30-2015<br>Source: NOAA', geo = g)
```

<iframe src="https://plot.ly/~RPlotBot/3162.embed" width="800" height="800" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
