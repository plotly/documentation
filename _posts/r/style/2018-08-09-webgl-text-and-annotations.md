---
title: WebGL Text and Annotations in R | Examples | Plotly
name: WebGL Text and Annotations
permalink: r/webgl-text-and-annotations/
description: How to add WebGL text labels and annotations to plots in R.
layout: base
thumbnail: thumbnail/webgl-text-and-annotations.jpg
language: r
page_type: example_index
has_thumbnail: false
display_as: style_opt
order: 10
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
## [1] '4.8.0'
```


### Heatmap with Annotations


```r
library(plotly)
library(random)

n=250
t=12
x = c(rep(0:(n-1), times=t))
y = c(rep(0:(t-1), each=n))
z = randomNumbers(n=n*t, min=1, max=10, col=n)
text = c(replicate(t*n, sample(c("A","T","G","C"), 1)))

steps = list()
for (e in c(0:(n-30))){
  step <- list(
    list(
      args = list('xaxis.range', c(-0.5 + e, 30.5 + e)),
      method = "relayout",
      label = e,
      value = e
    )
  )
  steps[e] <- step
}

p <- plot_ly() %>%
  add_trace(
    type='heatmap',
    z = z
  ) %>%
  add_trace(
    mode = "text",
    text = text,
    type = "scattergl",
    textfont = list(
      size = 20
    ),
    x = x,
    y = y
  ) %>%
  layout(
    xaxis = list(
      range = c(-0.5, 30.5),
      showline = F,
      zeroline = F,
      showgrid = F
    ),
    yaxis = list(
      showline = F,
      zeroline = F,
      showgrid = F
    ),
    sliders=list(
      list(
        active = 0,
        steps = steps
      )
    )
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="webgl-text-annotation")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5465.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#Reference

See [https://plot.ly/r/reference/#scattergl](https://plot.ly/r/reference/#scattergl) for more information and chart attribute options!
