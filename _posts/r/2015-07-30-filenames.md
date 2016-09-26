---
title: R Filenames, Folders, and Updating Plotly Graphs in R | Examples | Plotly
name: Filenames, Folders, and Updating Plotly Graphs in R
permalink: r/file-options/
description: How to save R graphs to the plotly cloud
layout: base
language: r
page_type: example_index
has_thumbnail: false
display_as: file_settings
output:
  html_document:
    keep_md: true
---



#### Save Plot to Server
To create a plotly figure on a plotly server, use `plotly_POST()`.


```r
library(plotly)
p <- plot_ly(x = c(1, 2), y = c(1, 2))
plotly_POST(p)
```

<iframe src="https://plot.ly/~RPlotBot/3432.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Overwrite Plot

If you don't include a filename, a new plot will be made on your online plotly account. If you want to overwrite a plot (i.e., keep the graph served from the same plotly URL), specify a filename. This implicitly overwrites your plotly graph.


```r
plotly_POST(p, filename = "name-of-my-plotly-file")
```

<iframe src="https://plot.ly/~RPlotBot/505.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Save your Plot in a Folder
If the filename contains "/", it will automatically create a plotly folder. This option is only available for [Pro-Subscriptions](https://plot.ly/products/cloud/)


```r
plotly_POST(p, filename="r-docs/name-of-my-plotly-file")
```

<iframe src="https://plot.ly/~RPlotBot/507.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

View your Plotly graphs at [https://plot.ly/organize](https://plot.ly/organize).
