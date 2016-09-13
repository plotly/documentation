---
title: Map Subplots And Small Multiples
name: Map Subplots And Small Multiples
permalink: r/map-subplots-and-small-multiples/
description: How to create map subplots and small multiples in R.
layout: base
thumbnail: thumbnail/map-subplots.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: maps
---



# Map Subplots and Small Multiples


```r
# US map small multiples
library(plotly)
library(dplyr)
df <- read.csv('https://raw.githubusercontent.com/plotly/datasets/master/1962_2006_walmart_store_openings.csv')

# common map properties
g <- list(
  scope = 'usa', 
  showland = T, 
  landcolor = toRGB("gray90"), 
  showcountries = F, 
  subunitcolor = toRGB("white")
)

one_plot <- function(dat) {
  dat %>% 
    plot_ly() %>%
    add_scattergeo(
      lon = ~LON, lat = ~LAT,
      mode = "markers", color = I("blue"), alpha = 0.5
    ) %>%
    add_scattergeo(
      lon = -78, lat = 47, mode = 'text', text = ~unique(YEAR), color = I("black")
    ) %>% layout(geo = g)
}

lapply(split(df, df$YEAR), one_plot) %>% 
  subplot(nrows = 9) %>% 
  layout(
    showlegend = FALSE,
    title = 'New Walmart Stores per year 1962-2006<br> Source: <a href="http://www.econ.umn.edu/~holmes/data/WalMart/index.html">University of Minnesota</a>',
    width = 1000,
    height = 900,
    hovermode = FALSE
  )
```

![plot of chunk unnamed-chunk-2](figure/unnamed-chunk-2-1.png)


