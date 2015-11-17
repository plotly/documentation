---
title: Embedding Plotly Graphs in HTML with KnitR
name: Text and Annotations
permalink: r/embedding-plotly-graphs-in-HTML
description: How to embed Plotly graphs in HTML pages with Plotly's R API
layout: base
thumbnail: text-and-annotations.png
language: r
page_type: example_index
has_thumbnail: false
display_as: layout_opt
---

# Embedding Plotly Graphs in HTML

If you have a plotly account, printing plotly objects in the R console will create a new plotly figure (via plotly's REST API). If you're using knitr/R Markdown with HTML output, printing not only creates the plot, but also embeds it as an HTML iframe.




```r
library(plotly)
p <- plot_ly(iris, x = Petal.Length, y = Petal.Width,
        color = Species, mode = "markers")
p
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/501.embed" width="800" frameBorder="0"></iframe>

Plotly graphs hosted on [https://plot.ly](https://plot.ly) can be embedded in webpages as iframes or images. Just add `.embed` or `.png` to the end of the graph URL.

```html
<iframe src="https://plot.ly/~RPlotBot/501.embed"
		height="600" width="100%"
		scrolling="no" seamless="seamless"
		frameBorder="0">
</iframe>
```

```html
<img src="https://plot.ly/~RPlotBot/501.png">
```

[Learn more about embedding graphs in HTML pages, blogs, and websites in our tutorial](http://help.plot.ly/embed-graphs-in-websites/).
