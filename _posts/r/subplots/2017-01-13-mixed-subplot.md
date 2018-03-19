---
title: Mixed Subplots in R | Examples | Plotly
name: Mixed Subplots
permalink: r/mixed-subplots/
description: How to create mixed subplots in R with Plotly.
layout: base
thumbnail: thumbnail/mixed_subplot.JPG
language: r
page_type: example_index
has_thumbnail: true
display_as: multiple_axes
order: 5
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

### Mixed Subplot


```r
library(plotly)
library(plyr)

# read in Walmart data
df <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/1962_2006_walmart_store_openings.csv")


# first plot - bar chart
total <- count(df$YEAR)
fit <- fitted(loess(total$freq ~ total$x))

p2 <- plot_ly(data = total, x = ~x, y = ~freq, type = "bar", showlegend=FALSE,
              marker=list(color=~x, showscale=FALSE)) %>%
  add_lines(y = fit, showlegend=FALSE, color = 'black') %>%
  layout(showlegend=FALSE, xaxis = list(side="right", showgrid=FALSE),
         yaxis=list(showgrid=FALSE))


# second plot - scattergeo map
g <- list(
  scope = 'usa',
  projection = list(type = 'albers usa'),
  showlakes = TRUE,
  lakecolor = toRGB('white'))

p3 <- plot_geo(df, lat = ~LAT, lon = ~LON) %>%
  add_markers(
    text = ~OPENDATE, showlegend=FALSE,
    marker=list(color = ~YEAR, showscale=FALSE),
    hoverinfo = "text") %>%
  layout(geo = g, showlegend=FALSE)


# third plot - 3D mesh
#install.packages("rgl")
#install.packages("RTriangle")
#install.packages("graticule")
#devtools::install_github("r-gris/rangl", force=TRUE)

library(rangl)
library(maptools)

data(wrld_simpl)

## max area in native units of the map data
## globe() just reprojects to geocent, but stores in rangl's normal way (objects, primitives, vertices)
mesh <- plot(globe(rangl(subset(wrld_simpl), max_area = 0.5)))

# plot point cloud
x <- mesh$vb[1,]
y <- mesh$vb[2,]
z <- mesh$vb[3,]
m <- matrix(c(x,y,z), ncol=3, dimnames=list(NULL,c("x","y","z")))

# colours in z don't make sense here, need to map object aesthetics above
zmean <- apply(t(mesh$it),MARGIN=1,function(row){mean(m[row,3])})

library(scales)
facecolor = colour_ramp(
  brewer_pal(palette="OrRd")(9)
)(rescale(x=zmean))

p1 <- plot_ly(
  x = x, y = y, z = z,
  i = mesh$it[1,]-1, j = mesh$it[2,]-1, k = mesh$it[3,]-1,
  facecolor = facecolor,
  type = "mesh3d"
)


# subplot
p <- subplot(p1, p2, p3, nrows = 2) %>%
  layout(title = "Walmart Store Openings by Year",
         xaxis = list(domain=list(x=c(0,0.5),y=c(0,0.5))),
         scene = list(domain=list(x=c(0.5,1),y=c(0,0.5))),
         xaxis2 = list(domain=list(x=c(0.5,1),y=c(0.5,1))),
         showlegend=FALSE,showlegend2=FALSE)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="subplot_mixed-walmart")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3994.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#Reference

See [https://plot.ly/r/reference](https://plot.ly/r/reference) for more information and options!
