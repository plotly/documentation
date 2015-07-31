---
title: Scatter Plots on Maps in R | Examples | Plotly
name: Scatter Plots on Maps
permalink: r/scatter-plots-on-maps/
description: How to make scatter plots on maps in Python. Scatter plots on maps highlight geographic areas and can be colored by value.
layout: base
thumbnail: /images/scatter-plot-on-maps.png
language: r
page_type: example_index
has_thumbnail: true
display_as: maps
---



# US Airports Map in R

```r
library(plotly)
df <- read.csv('https://raw.githubusercontent.com/plotly/datasets/master/2011_february_us_airport_traffic.csv')
df$hover <- with(df, paste(airport, city, state, "Arrivals: ", cnt))

# marker styling
m <- list(
  colorbar = list(title = "Incoming flights February 2011"),
  size = 8, opacity = 0.8, symbol = 'square'
)

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

plot_ly(df, lat = lat, lon = long, text = hover, color = cnt,
        type = 'scattergeo', locationmode = 'USA-states', mode = 'markers',
        marker = m, filename="r-docs/us-airports") %>%
  layout(title = 'Most trafficked US airports<br>(Hover for airport)', geo = g)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/329" width="800" frameBorder="0"></iframe>

### North American Precipitation Map from NOAA

```r
library(plotly)
df <- read.csv('https://raw.githubusercontent.com/plotly/datasets/master/2015_06_30_precipitation.csv')
df$hover <- paste(df$Globvalue, "inches")

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
    rotation = list(
      lon = -100
    )
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

plot_ly(df, lat = Lat, lon = Lon, text = hover, color = Globvalue,
        type = 'scattergeo', marker = m, filename="r-docs/precipitation-map") %>%
  layout(title = 'US Precipitation 06-30-2015<br>Source: NOAA', geo = g)
```

<iframe height="800" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/334" width="800" frameBorder="0"></iframe>
