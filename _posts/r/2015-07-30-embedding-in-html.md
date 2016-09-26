---
title: Embed Graphs in HTML
name: Embed Graphs in HTML
permalink: r/embedding-plotly-graphs-in-HTML
description: How to embed plotly graphs in HTML pages with plotly for R
layout: base
thumbnail: text-and-annotations.jpg
language: r
page_type: example_index
has_thumbnail: false
display_as: layout_opt
---



As of version 2.0, plotly's R package utilizes the [htmlwidgets](http://www.htmlwidgets.org/) framework. As a result, printing objects of class "plotly" in [rmarkdown/knitr HTML documents](http://rmarkdown.rstudio.com/html_document_format.html) will embed the necessary HTML/JavaScript to create the client-side visualization (via [plotly.js](http://plot.ly/javascript)).


```r
library(plotly)
p <- plot_ly(midwest, x = percollege, color = state, type = "box")
```

```
## Error in plot_ly(midwest, x = percollege, color = state, type = "box"): object 'percollege' not found
```

```r
class(p)
```

```
## Error in eval(expr, envir, enclos): object 'p' not found
```

```r
p
```

```
## Error in eval(expr, envir, enclos): object 'p' not found
```


```
## Error in plotly_build(x): object 'p' not found
```

You can also host your figures on a plotly server by calling `plotly_POST()`. This function returns an object of class figure. When you print a figure object in an rmarkdown/knitr document, it embeds the figure as an iframe which is served from your plotly account.


```r
f <- plotly_POST(p)
```

```
## Error in plotly_build(x): object 'p' not found
```

```r
class(f)
```

```
## Error in eval(expr, envir, enclos): object 'f' not found
```

```r
f
```

```
## Error in eval(expr, envir, enclos): object 'f' not found
```

If you want more control over embedding graphs hosted on <https://plot.ly>, [learn how to embed plotly graphs with HTML iframes](http://help.plot.ly/embed-graphs-in-websites/)
