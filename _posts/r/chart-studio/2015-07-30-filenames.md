---
description: R Filenames, folders, and updating Plotly graphs in the plotly cloud.
display_as: chart_studio
language: r
layout: base
name: Updating Plotly Graphs
order: 1
output:
  html_document:
    keep_md: true
page_type: example_index
permalink: r/file-options/
thumbnail: thumbnail/horizontal-bar.jpg
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

#### Save Plot to Server
To create a plotly figure on a plotly server, use `api_create()`.


```r
library(plotly)
p <- plot_ly(x = c(1, 2), y = c(1, 2))
api_create(p)
```

<iframe src="https://plot.ly/~RPlotBot/5459.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Overwrite Plot

If you don't include a filename, a new plot will be made on your online plotly account. If you want to overwrite a plot (i.e., keep the graph served from the same plotly URL), specify a filename. This implicitly overwrites your plotly graph.


```r
api_create(p, filename = "name-of-my-plotly-file")
```

<iframe src="https://plot.ly/~RPlotBot/505.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Save your Plot in a Folder
If the filename contains "/", it will automatically create a plotly folder. This option is only available for [Pro-Subscriptions](https://plot.ly/products/cloud/)


```r
api_create(p, filename="r-docs-name-of-my-plotly-file")
```

<iframe src="https://plot.ly/~RPlotBot/5455.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

View your Plotly graphs at [https://plot.ly/organize](https://plot.ly/organize).
