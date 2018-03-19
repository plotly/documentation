---
title: Hover Text and Formatting in R | Examples | Plotly
name: Hover Text and Formatting
permalink: r/hover-text-and-formatting/
description: How to use hover text and formatting in R with Plotly.
layout: base
thumbnail: thumbnail/hover'text.jpg
language: r
has_thumbnail: false
display_as: layout_opt
page_type: example_index
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

#### Add Hover Text


```r
library(plotly)

p <- plot_ly(type = 'scatter', mode = 'markers') %>%
  add_trace(
    x = c(1:5), 
    y = rnorm(5, mean = 5),
    text = c("Text A", "Text B", "Text C", "Text D", "Text E"),
    hoverinfo = 'text',
    marker = list(color='green'),
    showlegend = F
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link <- api_create(p, filename = "hover-text")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5226.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Format Hover Text 


```r
library(plotly)

p <- plot_ly(type = 'scatter', mode = 'markers') %>%
  add_trace(
    x = c(1:100), 
    y = rnorm(100, mean = 5), 
    marker = list(color='green'),
    hoverinfo = 'y',
    showlegend = F
  ) %>%
  layout(
    title = "Set hover text formatting<br><a href= https://github.com/d3/d3-time-format/blob/master/README.md#locale_format>https://github.com/d3/d3-time-format/blob/master/README.md#locale_format</a>",
    titlefont = list(
      size = 10
    ),
    xaxis = list(
      zeroline = F
    ),
    yaxis = list(
      hoverformat = '.2f'
    )
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link <- api_create(p, filename = "hover-formating")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5228.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Reference

See [https://plot.ly/r/reference/](https://plot.ly/r/reference/) for more information and options!
