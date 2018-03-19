---
title: Intro to Animations | Examples | Plotly
name: Intro to Animations
permalink: r/animations/
description: How to create animations in R with Plotly.
layout: base
thumbnail: thumbnail/animations.gif
language: r
page_type: example_index
has_thumbnail: true
display_as: animations
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
## [1] '4.7.0'
```

### Frames

Now, along with `data` and `layout`, `frames` is added to the keys that `figure` allows. Your `frames` key points to a list of figures, each of which will be cycled through upon instantiation of the plot.

### Basic Example


```r
library(plotly)

df <- data.frame(
  x = c(1,2,1), 
  y = c(1,2,1), 
  f = c(1,2,3)
)

p <- df %>%
  plot_ly(
    x = ~x,
    y = ~y,
    frame = ~f,
    type = 'scatter',
    mode = 'markers',
    showlegend = F
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="animations-basic")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4593.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Mulitple Trace Animations


```r
library(plotly)
library(gapminder)

p <- gapminder %>%
  plot_ly(
    x = ~gdpPercap, 
    y = ~lifeExp, 
    size = ~pop, 
    color = ~continent, 
    frame = ~year, 
    text = ~country, 
    hoverinfo = "text",
    type = 'scatter',
    mode = 'markers'
  ) %>%
  layout(
    xaxis = list(
      type = "log"
    )
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="animations-mulitple-trace")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4595.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Add Animation Options


```r
library(plotly)

p <- p %>% 
  animation_opts(
    1000, easing = "elastic", redraw = FALSE
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="animations-animation-options")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4597.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Add Button Options


```r
library(plotly)

p <- p %>% 
  animation_button(
    x = 1, xanchor = "right", y = 0, yanchor = "bottom"
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="animations-button-options")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4599.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Add Slider Options


```r
library(plotly)

p <- p %>%
  animation_slider(
    currentvalue = list(prefix = "YEAR ", font = list(color="red"))
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="animations-slider-options")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4601.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Advanced Example

```r
library(plotly)

p <- gapminder %>%
  plot_ly(
    x = ~gdpPercap, 
    y = ~lifeExp, 
    size = ~pop, 
    color = ~continent, 
    frame = ~year, 
    text = ~country, 
    hoverinfo = "text",
    type = 'scatter',
    mode = 'markers'
  ) %>%
  layout(
    xaxis = list(
      type = "log"
    )
  ) %>% 
  animation_opts(
    1000, easing = "elastic", redraw = FALSE
  ) %>% 
  animation_button(
    x = 1, xanchor = "right", y = 0, yanchor = "bottom"
  ) %>%
  animation_slider(
    currentvalue = list(prefix = "YEAR ", font = list(color="red"))
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="animations-advanced")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4603.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Reference 

To read more on animations see [The Plotly Book](https://cpsievert.github.io/plotly_book/key-frame-animations.html).
