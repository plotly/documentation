---
title: Font Styles in R | Examples | Plotly
name: Font Styles
permalink: r/font/
description: How to create font styles in R with Plotly.
layout: base
thumbnail: thumbnail/your-tutorial-chart.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: style_opt
order: 3
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
## [1] '4.7.0.9000'
```

### Global Font Properties


```r
library(plotly)

t <- list(
  family = "sans serif",
  size = 14,
  color = 'blue')

p <- plot_ly(x=c(1,2,3,4,5), y=c(1,2,3,2,1)) %>%
  layout(title="Font Styling",
         font=t)


# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="font/global")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4261.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#Reference

See [https://plot.ly/r/reference/#layout-font](https://plot.ly/r/reference/#layout-font) for more information and options!
