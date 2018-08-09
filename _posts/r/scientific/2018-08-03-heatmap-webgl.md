---
title: WebGL Heatmaps in R | Examples | Plotly
name: WebGL Heatmaps
permalink: r/heatmap-webgl/
description: How to make webGL based heatmaps in R with Plotly.
layout: base
thumbnail: thumbnail/heatmap-webgl.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: scientific
order: 20
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
## [1] '4.7.1'
```

#### WebGL Heatmap from an Image


```r
library("jpeg")
library("plotly")

# Image processing
url <- "https://images.plot.ly/plotly-documentation/images/heatmap-galaxy.jpg"
tmpf <- tempfile()
download.file(url,tmpf,mode="wb")
data <- readJPEG(tmpf)
file.remove(tmpf) # remove the downloaded temp file

zdata = rowSums(data*255, dims = 2)

p <- plot_ly(
            z = zdata,
            colorscale = list(c(0,0.5,1),c("blue", "white", "red")),
            type = "heatmapgl"
            )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="heatmap-webgl")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5461.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Reference

See [https://plot.ly/r/reference/#heatmapgl](https://plot.ly/r/reference/#heatmapgl) for more information and options!
