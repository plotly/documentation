---
title: ggplot2 useR guide | plotly
permalink: ggplot2/user-guide
description: A useR guide for interfacing ggplot2 with Plotly.
layout: base
thumbnail: /images/facet_wrap.png
language: ggplot2
page_type: user_guide
ignore_header: true
---

## Plotly and ggplot2 UseR Guide



Plotly for R is an interactive, browser-based charting library built on the open source JavaScript graphing library <a href="https://plot.ly/javascript" target="_blank">plotly.js</a>. It works entirely locally in your web-browser via the <a target="_blank" href="http://www.htmlwidgets.org/">HTML widgets framework</a>.

<iframe src="https://plot.ly/~RPlotBot/1772.embed" width="100%" height="600px" style="border: none;"></iframe>

Plotly graphs are interactive: click-and-drag to zoom, shift-drag to pan, click on legend entries to toggle traces.

The [plotly R package](https://github.com/ropensci/plotly) serializes ggplot2 figures into Plotly's <a target="_blank" href="http://help.plot.ly/json-chart-schema/">universal graph JSON</a>. `plotly::ggplotly` will crawl the ggplot2 figure, extract and translate all of the attributes of the ggplot2 figure into JSON (the colors, the axes, the chart type, etc), and draw the graph with plotly.js.


```r
library(plotly)

dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
gg <- qplot(carat, price, data=dsamp, colour=clarity)

ggplotly(gg)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1778.embed" width="800" frameBorder="0"></iframe>

`plotly::ggplotly` returns a `plotly` object. When you print it in your console, the plotly object will be sent to your plotly account and opened in your web-browser (e.g. [https://plot.ly/~RPlotBot/1778](https://plot.ly/~RPlotBot/1778)). [In knitr](https://plot.ly/r/knitr), the chart is embedded as an iframe. [In Shiny](https://plot.ly/r/shiny-tutorial), the chart JSON is served to the client and graphed client-side with [postMessage](https://github.com/plotly/postMessage-API) or [plotly.js](https://plot.ly/javascript).

Plotly graphs can also be rendered locally with [Plotly Offline for R](https://plot.ly/r/offline).

<h4><a name="modify-ggplot2-figure" href="#modify-ggplot2-figure">Modifying the <code>plotly</code> figure after ggplot2 conversion</a></h4>

Sometimes it's helpful to modify your figure *after* you have converted it from ggplot2 to `plotly` *before* you save it in your plotly account. You may want to change the way `ggplotly` chose to translate the figure, or modify graph properties that just aren't available in `ggplot2`, like hover text.

In this case, use `plotly_build`. Consider this simple ggplot2 figure:


```r
df <- data.frame(x=c(1, 2, 3, 4), y=c(1, 5, 3, 5), group=c('A', 'A', 'B', 'B'))
g <- ggplot(data=df, aes(x=x, y=y, colour=group)) + geom_point()
ggplotly(g)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1791.embed" width="800" frameBorder="0"></iframe>

Here is the ggplot2 figure described as a plotly object


```r
p <- plotly_build(g)
str(p)
```

```
## List of 2
##  $ data  :List of 2
##   ..$ :List of 10
##   .. ..$ x         : num [1:2] 1 2
##   .. ..$ y         : num [1:2] 1 5
##   .. ..$ name      : chr "A"
##   .. ..$ text      : chr(0) 
##   .. ..$ type      : chr "scatter"
##   .. ..$ mode      : chr "markers"
##   .. ..$ marker    :List of 6
##   .. .. ..$ opacity : num 1
##   .. .. ..$ color   : chr "rgb(248,118,109)"
##   .. .. ..$ size    : num 10
##   .. .. ..$ sizeref : num 1
##   .. .. ..$ sizemode: chr "area"
##   .. .. ..$ symbol  : chr "circle"
##   .. ..$ xaxis     : chr "x1"
##   .. ..$ yaxis     : chr "y1"
##   .. ..$ showlegend: logi TRUE
##   ..$ :List of 10
##   .. ..$ x         : num [1:2] 3 4
##   .. ..$ y         : num [1:2] 3 5
##   .. ..$ name      : chr "B"
##   .. ..$ text      : chr(0) 
##   .. ..$ type      : chr "scatter"
##   .. ..$ mode      : chr "markers"
##   .. ..$ marker    :List of 6
##   .. .. ..$ opacity : num 1
##   .. .. ..$ color   : chr "rgb(0,191,196)"
##   .. .. ..$ size    : num 10
##   .. .. ..$ sizeref : num 1
##   .. .. ..$ sizemode: chr "area"
##   .. .. ..$ symbol  : chr "circle"
##   .. ..$ xaxis     : chr "x1"
##   .. ..$ yaxis     : chr "y1"
##   .. ..$ showlegend: logi TRUE
##  $ layout:List of 9
##   ..$ xaxis        :List of 9
##   .. ..$ tickcolor     : chr "rgb(127,127,127)"
##   .. ..$ gridcolor     : chr "rgb(255,255,255)"
##   .. ..$ showgrid      : logi TRUE
##   .. ..$ ticks         : chr "outside"
##   .. ..$ showticklabels: logi TRUE
##   .. ..$ type          : chr "linear"
##   .. ..$ title         : chr "x"
##   .. ..$ zeroline      : logi FALSE
##   .. ..$ showline      : logi FALSE
##   ..$ yaxis        :List of 9
##   .. ..$ tickcolor     : chr "rgb(127,127,127)"
##   .. ..$ gridcolor     : chr "rgb(255,255,255)"
##   .. ..$ showgrid      : logi TRUE
##   .. ..$ ticks         : chr "outside"
##   .. ..$ showticklabels: logi TRUE
##   .. ..$ type          : chr "linear"
##   .. ..$ title         : chr "y"
##   .. ..$ zeroline      : logi FALSE
##   .. ..$ showline      : logi FALSE
##   ..$ plot_bgcolor : chr "rgb(229,229,229)"
##   ..$ margin       :List of 1
##   .. ..$ r: num 10
##   ..$ legend       :List of 9
##   .. ..$ bordercolor: chr "transparent"
##   .. ..$ x          : num 1.01
##   .. ..$ y          : num 0.525
##   .. ..$ xref       : chr "paper"
##   .. ..$ yref       : chr "paper"
##   .. ..$ xanchor    : chr "left"
##   .. ..$ yanchor    : chr "top"
##   .. ..$ font       :List of 1
##   .. .. ..$ family: chr ""
##   .. ..$ bgcolor    : chr "rgb(255,255,255)"
##   ..$ showlegend   : logi TRUE
##   ..$ annotations  :List of 1
##   .. ..$ :List of 9
##   .. .. ..$ text     : chr "<b>group</b>"
##   .. .. ..$ x        : num 1.03
##   .. .. ..$ y        : num 0.625
##   .. .. ..$ showarrow: logi FALSE
##   .. .. ..$ xref     : chr "paper"
##   .. .. ..$ yref     : chr "paper"
##   .. .. ..$ xanchor  : chr "left"
##   .. .. ..$ yanchor  : chr "top"
##   .. .. ..$ textangle: num 0
##   ..$ titlefont    :List of 1
##   .. ..$ family: chr ""
##   ..$ paper_bgcolor: chr "rgb(255,255,255)"
```

This declaritive description of the graph is very human readable. Every attribute of the chart, the colors, the data, the text, is described in a key-value pair in this object. [View all of the possible graph attributes.](https://plot.ly/r/reference)

Attributes of plotly figures are grouped into two categories: `data` and `layout`. `data` describes attributes that pertain to the plot's series, or "traces". These properties include things like the `x` and `y` data, the `color` and `name` of the trace, which axis the trace is bound to. `data` is an unnamed list.

Take a look:


```r
names(p$data[[1]])
```

```
##  [1] "x"          "y"          "name"       "text"       "type"      
##  [6] "mode"       "marker"     "xaxis"      "yaxis"      "showlegend"
```

```r
# this trace is a "scatter" type
p$data[[1]]$type
```

```
## [1] "scatter"
```

its name, as it appears in the legend, is "A"


```r
p$data[[1]]$name
```

```
## [1] "A"
```


```r
str(p$data[[1]])
```

```
## List of 10
##  $ x         : num [1:2] 1 2
##  $ y         : num [1:2] 1 5
##  $ name      : chr "A"
##  $ text      : chr(0) 
##  $ type      : chr "scatter"
##  $ mode      : chr "markers"
##  $ marker    :List of 6
##   ..$ opacity : num 1
##   ..$ color   : chr "rgb(248,118,109)"
##   ..$ size    : num 10
##   ..$ sizeref : num 1
##   ..$ sizemode: chr "area"
##   ..$ symbol  : chr "circle"
##  $ xaxis     : chr "x1"
##  $ yaxis     : chr "y1"
##  $ showlegend: logi TRUE
```

`layout` describes attributes that pertain to the rest of the plot, like axis properties, annotations, legends, and titles.


```r
names(p$layout)
```

```
## [1] "xaxis"         "yaxis"         "plot_bgcolor"  "margin"       
## [5] "legend"        "showlegend"    "annotations"   "titlefont"    
## [9] "paper_bgcolor"
```

```r
str(p$layout)
```

```
## List of 9
##  $ xaxis        :List of 9
##   ..$ tickcolor     : chr "rgb(127,127,127)"
##   ..$ gridcolor     : chr "rgb(255,255,255)"
##   ..$ showgrid      : logi TRUE
##   ..$ ticks         : chr "outside"
##   ..$ showticklabels: logi TRUE
##   ..$ type          : chr "linear"
##   ..$ title         : chr "x"
##   ..$ zeroline      : logi FALSE
##   ..$ showline      : logi FALSE
##  $ yaxis        :List of 9
##   ..$ tickcolor     : chr "rgb(127,127,127)"
##   ..$ gridcolor     : chr "rgb(255,255,255)"
##   ..$ showgrid      : logi TRUE
##   ..$ ticks         : chr "outside"
##   ..$ showticklabels: logi TRUE
##   ..$ type          : chr "linear"
##   ..$ title         : chr "y"
##   ..$ zeroline      : logi FALSE
##   ..$ showline      : logi FALSE
##  $ plot_bgcolor : chr "rgb(229,229,229)"
##  $ margin       :List of 1
##   ..$ r: num 10
##  $ legend       :List of 9
##   ..$ bordercolor: chr "transparent"
##   ..$ x          : num 1.01
##   ..$ y          : num 0.525
##   ..$ xref       : chr "paper"
##   ..$ yref       : chr "paper"
##   ..$ xanchor    : chr "left"
##   ..$ yanchor    : chr "top"
##   ..$ font       :List of 1
##   .. ..$ family: chr ""
##   ..$ bgcolor    : chr "rgb(255,255,255)"
##  $ showlegend   : logi TRUE
##  $ annotations  :List of 1
##   ..$ :List of 9
##   .. ..$ text     : chr "<b>group</b>"
##   .. ..$ x        : num 1.03
##   .. ..$ y        : num 0.625
##   .. ..$ showarrow: logi FALSE
##   .. ..$ xref     : chr "paper"
##   .. ..$ yref     : chr "paper"
##   .. ..$ xanchor  : chr "left"
##   .. ..$ yanchor  : chr "top"
##   .. ..$ textangle: num 0
##  $ titlefont    :List of 1
##   ..$ family: chr ""
##  $ paper_bgcolor: chr "rgb(255,255,255)"
```

```r
str(p$layout$plot_bgcolor) # the background color of the plot is "rgb(229,229,229)"
```

```
##  chr "rgb(229,229,229)"
```

```r
str(p$layout$legend)
```

```
## List of 9
##  $ bordercolor: chr "transparent"
##  $ x          : num 1.01
##  $ y          : num 0.525
##  $ xref       : chr "paper"
##  $ yref       : chr "paper"
##  $ xanchor    : chr "left"
##  $ yanchor    : chr "top"
##  $ font       :List of 1
##   ..$ family: chr ""
##  $ bgcolor    : chr "rgb(255,255,255)"
```

Each of these properties was extracted and translated from the original ggplot2 figure. [View all of the possible attributes](https://plot.ly/r/reference).

You can edit or add these attributes and then send the figure to Plotly. Let's add custom hover text (`text`), change the legend names (`name`) add a title (`layout$title`)


```r
p$data[[1]]$name <- 'Group A'
p$data[[1]]$text <- c('St Urbain', 'Gaspe')
p$data[[1]]$type <- 'bar'

p$data[[2]]$name <- 'Group B'
p$data[[2]]$text <- c('Laurier', 'Fairmount')
p$data[[2]]$type <- 'bar'

p$layout$title <- 'Updated title'
```

Now, send this to your plotly account:


```r
p$filename <- 'ggplot2-user-guide/custom-ggplot2'
r <- plotly_POST(p)
knit_print.plotly(r, options=list())
```

```
## $url
## [1] "https://plot.ly/~RPlotBot/1793"
## 
## $message
## [1] ""
## 
## $warning
## [1] ""
## 
## $filename
## [1] "ggplot2-user-guideggplot2-user-guide/custom-ggplot2"
## 
## $error
## [1] ""
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1793.embed" width="800" frameBorder="0"></iframe>

#### More resources
- [ggplot2 examples](https://plot.ly/ggplot2)
- [Plotly's native R DSL](https://plot.ly/r)
- [Plotly's declaritive graph description reference](https://plot.ly/r/reference)
- [Plotly with Shiny](https://plot.ly/r/shiny-tutorial)
- [`plotly` R package on GitHub](https://github.com/ropensci/plotly)
- [Plotly graphs in other languages](https://plot.ly/api)
