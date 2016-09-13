---
title: Bubble Maps in R | Examples | Plotly
name: Bubble Maps
permalink: r/bubble-maps/
description: How to make a bubble chart and map in R.
layout: base
thumbnail: thumbnail/bubble-map.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: maps
order: 2
---



# United States Bubble Map


```r
library(plotly)
df <- read.csv('https://raw.githubusercontent.com/plotly/datasets/master/2014_us_cities.csv')

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

plot_ly(df, lon = ~lon, lat = ~lat, sizes = c(1, 250)) %>%
  add_scattergeo(color = ~q, size = ~pop, hoverinfo = "text",
                 text = ~paste(df$name, "<br />", df$pop/1e6, " million"),
                 locationmode = 'USA-states') %>%
  layout(title = '2014 US city populations<br>(Click legend to toggle)', geo = g)
```

![plot of chunk unnamed-chunk-2](figure/unnamed-chunk-2-1.png)


