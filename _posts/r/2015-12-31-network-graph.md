---
title: R Network Graph | Examples | Plotly
name: Network Graph
permalink: r/network-graphs/
description: How to make network graphs in R with Plotly.
layout: base
thumbnail: thumbnail/net.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: scientific
order: 11
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
## [1] '4.5.2'
```

### Read Graph File
We are using the well-known social network of `Zachary's karate club`. GML format file can be collected from [here](https://gist.github.com/pravj/9168fe52823c1702a07b).


```r
library(plotly)
library(igraph)

data(karate, package="igraphdata")
G <- upgrade_graph(karate)
L <- layout.circle(G)
```

### Create Vertices and Edges

```r
vs <- V(G)
es <- as.data.frame(get.edgelist(G))

Nv <- length(vs)
Ne <- length(es[1]$V1)
```

### Create Nodes

```r
Xn <- L[,1]
Yn <- L[,2]

network <- plot_ly(x = ~Xn, y = ~Yn, mode = "markers", text = vs$label, hoverinfo = "text")
```

### Creates Edges

```r
edge_shapes <- list()
for(i in 1:Ne) {
  v0 <- es[i,]$V1
  v1 <- es[i,]$V2

  edge_shape = list(
    type = "line",
    line = list(color = "#030303", width = 0.3),
    x0 = Xn[v0],
    y0 = Yn[v0],
    x1 = Xn[v1],
    y1 = Yn[v1]
  )

  edge_shapes[[i]] <- edge_shape
}
```

### Create Network

```r
axis <- list(title = "", showgrid = FALSE, showticklabels = FALSE, zeroline = FALSE)

p <- layout(
  network,
  title = 'Karate Network',
  shapes = edge_shapes,
  xaxis = axis,
  yaxis = axis
)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="karate-network-r")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/2797.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Reference
See [https://plot.ly/python/reference/#scatter](https://plot.ly/python/reference/#scatter) for more information and chart attribute options!
