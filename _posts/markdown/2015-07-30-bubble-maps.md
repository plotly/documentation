---
title: Bubble Maps in R | Examples | Plotly
name: Bubble Maps
permalink: r1/bubble-maps/
description: How to make a bubble chart and map in R.
layout: base
thumbnail: /images/bubble-map.png
language: r
page_type: example_index
has_thumbnail: true
display_as: maps
---



# United States Bubble Map


```r
library(plotly)
df <- read.csv('https://raw.githubusercontent.com/plotly/datasets/master/2014_us_cities.csv')
df$hover <- paste(df$name, "Population", df$pop/1e6, " million")

df$q <- with(df, cut(pop, quantile(pop)))
levels(df$q) <- paste(c("1st", "2nd", "3rd", "4th", "5th"), "Quantile")
df$q <- as.ordered(df$q)

g <- list(
  scope = 'usa',
  projection = list(type = 'albers usa'),
  showland = TRUE,
  landcolor = toRGB("gray85"),
  subunitwidth = 1,
  countrywidth = 1,
  subunitcolor = toRGB("white"),
  countrycolor = toRGB("white")
)

plot_ly(df, lon = lon, lat = lat, text = hover,
        marker = list(size = sqrt(pop/10000) + 1),
        color = q, type = 'scattergeo', locationmode = 'USA-states',
        filename="r-docs/bubble-map") %>%
  layout(title = '2014 US city populations<br>(Click legend to toggle)', geo = g)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/327" width="800" frameBorder="0"></iframe>
