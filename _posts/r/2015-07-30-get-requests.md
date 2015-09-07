---
title: Download Plotly Graphs into R
name: Get Requests
permalink: r/get-requests/
description: How to download plotly users's public graphs and data with R.
layout: base
thumbnail: /images/get-requests.png
language: r
page_type: example_index
has_thumbnail: false
display_as: get_request
---

# Downloading Plotly Graphs into R



Download Plotly figures directly into R with `get_figure`. This takes the `username` and the `plot_id` as arguments.

For example, to download [https://plot.ly/~cpsievert/559](https://plot.ly/~cpsievert/559) into R, call:


```r
library(plotly)
fig <- get_figure("cpsievert", "559")
```

<br>
Once the figure is downloaded, you can edit it like any plotly object. This will create a new figure unless you specify the same filename as the figure that you downloaded.


```r
layout(fig, title = paste("Modified on ", Sys.time()))
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1937.embed" width="800" frameBorder="0"></iframe>

# Add Traces with `get_figure` and `subplot`.

After downloading a figure with subplots, use `plotly_build` to build the figure. 


Add new traces to `fig$data[[(length(fig$data)+1)]]` as a list
<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1935.embed" width="800" frameBorder="0"></iframe>
