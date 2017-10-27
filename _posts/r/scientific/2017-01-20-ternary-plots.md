---
title: Ternary Plots in R | Examples | Plotly
name: Ternary Plots
permalink: r/ternary-plots/
description: How to create ternary plots in R with Plotly.
layout: base
thumbnail: thumbnail/ternary.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: scientific
order: 13
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
## [1] '4.7.0'
```

### Basic Ternary Plot with Markers


```r
library(plotly)

journalist <- c(75,70,75,5,10,10,20,10,15,10,20)
developer <- c(25,10,20,60,80,90,70,20,5,10,10)
designer <- c(0,20,5,35,10,0,10,70,80,80,70)
label <- c('point 1','point 2','point 3','point 4','point 5','point 6',
           'point 7','point 8','point 9','point 10','point 11')


df <- data.frame(journalist,developer,designer,label)

# axis layout
axis <- function(title) {
  list(
    title = title,
    titlefont = list(
      size = 20
    ),
    tickfont = list(
      size = 15
    ),
    tickcolor = 'rgba(0,0,0,0)',
    ticklen = 5
  )
}


p <- df %>% 
  plot_ly() %>%
  add_trace(
    type = 'scatterternary',
    mode = 'markers',
    a = ~journalist,
    b = ~developer,
    c = ~designer,
    text = ~label,
    marker = list( 
      symbol = 100,
      color = '#DB7365',
      size = 14,
      line = list('width' = 2)
    )
  ) %>% 
  layout(
    title = "Simple Ternary Plot with Markers",
    ternary = list(
      sum = 100,
      aaxis = axis('Journalist'),
      baxis = axis('Developer'),
      caxis = axis('Designer')
    )
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="ternary/basic")
chart_link
```


<iframe src="https://plot.ly/~RPlotBot/4590.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#Reference

See [https://plot.ly/r/reference/#scatterternary](https://plot.ly/r/reference#scatterternary) for more information and options!
