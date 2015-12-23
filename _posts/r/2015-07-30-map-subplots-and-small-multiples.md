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
df <- read.csv('https://raw.githubusercontent.com/plotly/datasets/master/1962_2006_walmart_store_openings.csv')

# common map properties
g <- list(scope = 'usa', showland = T, landcolor = toRGB("gray90"), showcountries = F, subunitcolor = toRGB("white"))

# year text labels
yrs <- unique(df$YEAR)
id <- seq_along(yrs)
df2 <- data.frame(
  YEAR = yrs,
  id = id
)

# id for anchoring traces on different plots
df$id <- as.integer(factor(df$YEAR))

p <- plot_ly(df, type = 'scattergeo', lon = LON, lat = LAT, group = YEAR,
             geo = paste0("geo", id), showlegend = F,
             marker = list(color = toRGB("blue"), opacity = 0.5)) %>%
  add_trace(lon = -78, lat = 47, mode = 'text', group = YEAR,
            geo = paste0("geo", id), text = YEAR, data = df2) %>%
  layout(title = 'New Walmart Stores per year 1962-2006<br> Source: <a href="http://www.econ.umn.edu/~holmes/data/WalMart/index.html">University of Minnesota</a>',
         geo = g,
         autosize = F,
         width = 1000,
         height = 900,
         hovermode = F)

subplot(p, nrows = 9)
```

<iframe height="900" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/307" width="800" frameBorder="0"></iframe>
