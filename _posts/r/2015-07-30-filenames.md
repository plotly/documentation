---
title: R Filenames, Folders, and Updating Plotly Graphs in R | Examples | Plotly
name: Filenames, Folders, and Updating Plotly Graphs in R
permalink: r/file-options/
description: How to update your graphs in R with the fileopt parameter.
layout: base
language: r
page_type: example_index
has_thumbnail: false
display_as: file_settings
---

# Setting Filenames and Overwriting Plotly Graphs in R

To create a plotly figure on a plotly server, use `plotly_POST()`.

```{r}
library(plotly)
p <- plot_ly(x = c(1, 2), y = c(1, 2))
plotly_POST(p)
```

<br>

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1933.embed" width="800" frameBorder="0"></iframe>
<br>
If you want to overwrite the plot and keep the graph served from the same plotly URL, specify a filename.
This implicitly overwrites your plotly graph.
View your Plotly graphs at [https://plot.ly/organize](https://plot.ly/organize).


If you don't include a filename, a new plot will be made on your online plotly account. If you want to overwrite a plot (i.e., keep the graph served from the same plotly URL), specify a filename. This implicitly overwrites your plotly graph.

```r
plotly_POST(p, filename = "name-of-my-plotly-file")
```

If the filename contains "/", it will automatically create a plotly folder.

```r
plotly_POST(p, filename="r-docs/name-of-my-plotly-file")
```
