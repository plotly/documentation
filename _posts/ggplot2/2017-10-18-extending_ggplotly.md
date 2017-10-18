---
title: Extending ggplotly | Examples | Plotly
name: Extending ggplotly
permalink: ggplot2/extending-ggplotly/
description: How modify the plotly object after ggplot2 conversion.
layout: base
thumbnail: thumbnail/extending_ggplotly.png
language: ggplot2
page_type: example_index
has_thumbnail: true
display_as: fundamentals
order: 1
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
## [1] '4.7.1.9000'
```

### Modify with Style


```r
library(plotly)

p <- ggplot(fortify(forecast::gold), aes(x, y)) + geom_line()

gg <- ggplotly(p)

gg <- style(gg, line = list(color = 'gold'), hoverinfo = "y", traces = 1)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(gg, filename="extending/style")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5187.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Modify with Build


```r
library(plotly)

p <- ggplot(fortify(forecast::gold), aes(x, y)) + geom_line()

gg <- ggplotly(p)

gg <- plotly_build(p)

gg$x$data[[1]]$line$color <- 'blue'

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(gg, filename="extending/build")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5189.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Modify with LayerData


```r
library(plotly)

p <- ggplot(mtcars, aes(x = wt, y = mpg)) +
   geom_point() + geom_smooth()

p <- p %>%
  ggplotly(layerData = 2, originalData = F) %>%
  add_fun(function(p) {
    p %>% slice(which.max(se)) %>%
      add_segments(x = ~x, xend = ~x, y = ~ymin, yend = ~ymax) %>%
      add_annotations("Maximum uncertainty", ax = 60)
  }) %>%
  add_fun(function(p) {
    p %>% slice(which.min(se)) %>%
      add_segments(x = ~x, xend = ~x, y = ~ymin, yend = ~ymax) %>%
      add_annotations("Minimum uncertainty")
  })

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="extending/layerdata")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5191.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Reference
For more information concerning modidfying the plotly object see [The Plotly Book](https://plotly-book.cpsievert.me/extending-ggplotly.html)
