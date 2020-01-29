---
description: How to update graphs stored in Chart Studio with R.
display_as: chart_studio
language: r
layout: base
name: Updating Graphs Stored In Chart Studio
order: 9
output:
  html_document:
    keep_md: true
page_type: example_index
permalink: r/file-options/
thumbnail: thumbnail/horizontal-bar.jpg
---


### Save R Plot To Chart Studio

Using the `plotly` R package, you can create a Chart Studio figure based on your R chart. Simply pass your chart as a parameter to the `api_create()` function:


```r
library(plotly)
p <- plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length)
api_create(p)
```

<iframe src="https://plot.ly/~RPlotBot/6092.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### How To Overwrite An Existing Plot

By default, when you call `api_create()`, a new plot is created in your Chart Studio account with its own unique URL.

If you would like to overwrite an existing plot in your Chart Studio account and keep the same URL, then supply a `filename` as an extra parameter to the `api_create()` function. This will keep the same URL for the plot. 


```r
api_create(p, filename = "name-of-my-plotly-file")
```

<iframe src="https://plot.ly/~RPlotBot/505.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Saving Plots In Folders

If the `filename` parameter contains the character "/", then the `api_create()` function will save that plot in a folder in your Chart Studio account. 

This option is only available for [Chart Studio Enterprise subscribers](https://plot.ly/online-chart-maker/)


```r
api_create(p, filename="r-docs/name-of-my-chart-studio-file")
```

<iframe src="https://plot.ly/~RPlotBot/6029.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Viewing Saved Plots

View the R graphs you have saved in your Chart Studio account at [https://plot.ly/organize](https://plot.ly/organize).
