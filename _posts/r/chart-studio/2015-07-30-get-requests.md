---
description: How to download plotly users's public graphs and data with R.
display_as: chart_studio
language: r
layout: base
name: Get Requests
order: 6
output:
  html_document:
    keep_md: true
permalink: r/get-requests/
thumbnail: thumbnail/tick-formatting.gif
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

### Download Plotly Graphs into R

Download Plotly figures directly into R with `api_download_plot()`. This takes the `plot_id` and the `username` as arguments.

For example, to download [https://plot.ly/~cpsievert/559](https://plot.ly/~cpsievert/559) into R, call:


```r
library(plotly)
fig <- api_download_plot("559", "cpsievert")
```

<iframe src="https://plot.ly/~RPlotBot/4294.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Edit Downloaded Graph
Once the figure is downloaded, you can edit it like any plotly object. This will create a new figure unless you specify the same filename as the figure that you downloaded.


```r
p <- layout(fig, title = paste("Modified on ", Sys.time()))
```

<iframe src="https://plot.ly/~RPlotBot/3131.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Adding a trace to a subplot figure


```r
fig <- api_download_plot("6343", "chelsea_lyn")

p <- add_lines(fig, x = c(1, 2), y = c(1, 2), xaxis = "x2", yaxis = "y2")
```

<iframe src="https://plot.ly/~RPlotBot/3133.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Reference

See `help("api")`
