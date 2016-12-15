---
title: Download Plotly Graphs into R
name: Get Requests
permalink: r/get-requests/
description: How to download plotly users's public graphs and data with R.
layout: base
thumbnail: thumbnail/get-requests.jpg
language: r
page_type: example_index
has_thumbnail: false
display_as: get_request
output:
  html_document:
    keep_md: true
---


#### Download Plotly Graphs into R

Download Plotly figures directly into R with `get_figure()`. This takes the `username` and the `plot_id` as arguments.

For example, to download [https://plot.ly/~cpsievert/559](https://plot.ly/~cpsievert/559) into R, call:


```r
library(plotly)
fig <- get_figure("cpsievert", "559")
```


```
## Error in UseMethod("plotly_build"): no applicable method for 'plotly_build' applied to an object of class "NULL"
```

#### Edit Downloaded Graph
Once the figure is downloaded, you can edit it like any plotly object. This will create a new figure unless you specify the same filename as the figure that you downloaded.


```r
layout(fig, title = paste("Modified on ", Sys.time()))
```

<iframe src="https://plot.ly/~RPlotBot/3131.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Adding a trace to a subplot figure


```r
fig <- get_figure("chelsea_lyn", "6343")
add_lines(fig, x = c(1, 2), y = c(1, 2), xaxis = "x2", yaxis = "y2")
```

<iframe src="https://plot.ly/~RPlotBot/3133.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Restyle Traces

It's easy to add a trace or change the layout of figure, but it's a bit more challenging to modify attributes of an existing trace. If you know the attribute you want to change, and the trace number (starting with 1), use the `style()` function. For example, we could remove the hover text from [this plot](https://plot.ly/~RPlotBot/2833) like so:


```r
fig <- get_figure("rplotbot", 2833)
fig %>%
  style(hoverinfo = "none") %>%
  layout(title = "No hover text")
```

<iframe src="https://plot.ly/~RPlotBot/3135.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

You'll probably want to inspect the traces before you use this function, and I recommend using the `plotly_json()` function to do so.
