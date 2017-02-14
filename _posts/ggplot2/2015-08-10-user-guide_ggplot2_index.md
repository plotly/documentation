---
title: ggplot2 useR guide | plotly
permalink: ggplot2/user-guide
description: A useR guide for interfacing ggplot2 with Plotly.
layout: base
thumbnail: thumbnail/facet_wrap.jpg
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

![plot of chunk unnamed-chunk-2](figure/unnamed-chunk-2-1.png)

`plotly::ggplotly` returns a `plotly` object. When you print it in your console, the plotly graph will be rendered in your web browser or in R Studio's viewer.

Plotly graphs can also be published on the web by calling `plotly_POST(ggplotly(gg))`. [Learn how to get started with publishing plotly graphs to the web](https://plot.ly/r/).

<h4><a name="modify-ggplot2-figure" href="#modify-ggplot2-figure">Modifying the <code>plotly</code> figure after ggplot2 conversion</a></h4>

Sometimes it's helpful to modify your figure *after* you have converted it from ggplot2 to `plotly` *before* it is rendered. You may want to change the way `ggplotly` chose to translate the figure, or modify graph properties that just aren't available in `ggplot2`, like hover text.

In this case, use `plotly_build`. Consider this simple ggplot2 figure:


```r
df <- data.frame(x=c(1, 2, 3, 4), y=c(1, 5, 3, 5), group=c('A', 'A', 'B', 'B'))
g <- ggplot(data=df, aes(x=x, y=y, colour=group)) + geom_point()
ggplotly(g)
```

![plot of chunk unnamed-chunk-3](figure/unnamed-chunk-3-1.png)

Here is the ggplot2 figure described as a plotly object


```r
p <- plotly_build(g)
str(p)
```

```
## List of 8
##  $ x            :List of 7
##   ..$ data    :List of 2
##   .. ..$ :List of 13
##   .. .. ..$ x          : num [1:2] 1 2
##   .. .. ..$ y          : num [1:2] 1 5
##   .. .. ..$ text       : chr [1:2] "x: 1<br>y: 1" "x: 2<br>y: 5"
##   .. .. ..$ type       : chr "scatter"
##   .. .. ..$ mode       : chr "markers"
##   .. .. ..$ marker     :List of 6
##   .. .. .. ..$ autocolorscale: logi FALSE
##   .. .. .. ..$ color         : chr "rgba(248,118,109,1)"
##   .. .. .. ..$ opacity       : num 1
##   .. .. .. ..$ size          : num 5.67
##   .. .. .. ..$ symbol        : chr "circle"
##   .. .. .. ..$ line          :List of 2
##   .. .. .. .. ..$ width: num 1.89
##   .. .. .. .. ..$ color: chr "rgba(248,118,109,1)"
##   .. .. ..$ hoveron    : chr "points"
##   .. .. ..$ name       : chr "A"
##   .. .. ..$ legendgroup: chr "A"
##   .. .. ..$ showlegend : logi TRUE
##   .. .. ..$ xaxis      : chr "x"
##   .. .. ..$ yaxis      : chr "y"
##   .. .. ..$ hoverinfo  : chr "text"
##   .. ..$ :List of 13
##   .. .. ..$ x          : num [1:2] 3 4
##   .. .. ..$ y          : num [1:2] 3 5
##   .. .. ..$ text       : chr [1:2] "x: 3<br>y: 3" "x: 4<br>y: 5"
##   .. .. ..$ type       : chr "scatter"
##   .. .. ..$ mode       : chr "markers"
##   .. .. ..$ marker     :List of 6
##   .. .. .. ..$ autocolorscale: logi FALSE
##   .. .. .. ..$ color         : chr "rgba(0,191,196,1)"
##   .. .. .. ..$ opacity       : num 1
##   .. .. .. ..$ size          : num 5.67
##   .. .. .. ..$ symbol        : chr "circle"
##   .. .. .. ..$ line          :List of 2
##   .. .. .. .. ..$ width: num 1.89
##   .. .. .. .. ..$ color: chr "rgba(0,191,196,1)"
##   .. .. ..$ hoveron    : chr "points"
##   .. .. ..$ name       : chr "B"
##   .. .. ..$ legendgroup: chr "B"
##   .. .. ..$ showlegend : logi TRUE
##   .. .. ..$ xaxis      : chr "x"
##   .. .. ..$ yaxis      : chr "y"
##   .. .. ..$ hoverinfo  : chr "text"
##   ..$ layout  :List of 11
##   .. ..$ margin       :List of 4
##   .. .. ..$ t: num 23.3
##   .. .. ..$ r: num 7.31
##   .. .. ..$ b: num 37.3
##   .. .. ..$ l: num 31.4
##   .. ..$ plot_bgcolor : chr "rgba(235,235,235,1)"
##   .. ..$ paper_bgcolor: chr "rgba(255,255,255,1)"
##   .. ..$ font         :List of 3
##   .. .. ..$ color : chr "rgba(0,0,0,1)"
##   .. .. ..$ family: chr ""
##   .. .. ..$ size  : num 14.6
##   .. ..$ xaxis        :List of 25
##   .. .. ..$ type          : chr "linear"
##   .. .. ..$ autorange     : logi FALSE
##   .. .. ..$ tickmode      : chr "array"
##   .. .. ..$ range         : num [1:2] 0.85 4.15
##   .. .. ..$ ticktext      : chr [1:4] "1" "2" "3" "4"
##   .. .. ..$ tickvals      : num [1:4] 1 2 3 4
##   .. .. ..$ ticks         : chr "outside"
##   .. .. ..$ tickcolor     : chr "rgba(51,51,51,1)"
##   .. .. ..$ ticklen       : num 3.65
##   .. .. ..$ tickwidth     : num 0.664
##   .. .. ..$ showticklabels: logi TRUE
##   .. .. ..$ tickfont      :List of 3
##   .. .. .. ..$ color : chr "rgba(77,77,77,1)"
##   .. .. .. ..$ family: chr ""
##   .. .. .. ..$ size  : num 11.7
##   .. .. ..$ tickangle     : num 0
##   .. .. ..$ showline      : logi FALSE
##   .. .. ..$ linecolor     : logi NA
##   .. .. ..$ linewidth     : num 0
##   .. .. ..$ showgrid      : logi TRUE
##   .. .. ..$ domain        : num [1:2] 0 1
##   .. .. ..$ gridcolor     : chr "rgba(255,255,255,1)"
##   .. .. ..$ gridwidth     : num 0.664
##   .. .. ..$ zeroline      : logi FALSE
##   .. .. ..$ anchor        : chr "y"
##   .. .. ..$ title         : chr "x"
##   .. .. ..$ titlefont     :List of 3
##   .. .. .. ..$ color : chr "rgba(0,0,0,1)"
##   .. .. .. ..$ family: chr ""
##   .. .. .. ..$ size  : num 14.6
##   .. .. ..$ hoverformat   : chr ".2f"
##   .. ..$ yaxis        :List of 25
##   .. .. ..$ type          : chr "linear"
##   .. .. ..$ autorange     : logi FALSE
##   .. .. ..$ tickmode      : chr "array"
##   .. .. ..$ range         : num [1:2] 0.8 5.2
##   .. .. ..$ ticktext      : chr [1:5] "1" "2" "3" "4" ...
##   .. .. ..$ tickvals      : num [1:5] 1 2 3 4 5
##   .. .. ..$ ticks         : chr "outside"
##   .. .. ..$ tickcolor     : chr "rgba(51,51,51,1)"
##   .. .. ..$ ticklen       : num 3.65
##   .. .. ..$ tickwidth     : num 0.664
##   .. .. ..$ showticklabels: logi TRUE
##   .. .. ..$ tickfont      :List of 3
##   .. .. .. ..$ color : chr "rgba(77,77,77,1)"
##   .. .. .. ..$ family: chr ""
##   .. .. .. ..$ size  : num 11.7
##   .. .. ..$ tickangle     : num 0
##   .. .. ..$ showline      : logi FALSE
##   .. .. ..$ linecolor     : logi NA
##   .. .. ..$ linewidth     : num 0
##   .. .. ..$ showgrid      : logi TRUE
##   .. .. ..$ domain        : num [1:2] 0 1
##   .. .. ..$ gridcolor     : chr "rgba(255,255,255,1)"
##   .. .. ..$ gridwidth     : num 0.664
##   .. .. ..$ zeroline      : logi FALSE
##   .. .. ..$ anchor        : chr "x"
##   .. .. ..$ title         : chr "y"
##   .. .. ..$ titlefont     :List of 3
##   .. .. .. ..$ color : chr "rgba(0,0,0,1)"
##   .. .. .. ..$ family: chr ""
##   .. .. .. ..$ size  : num 14.6
##   .. .. ..$ hoverformat   : chr ".2f"
##   .. ..$ shapes       :List of 1
##   .. .. ..$ :List of 9
##   .. .. .. ..$ type     : chr "rect"
##   .. .. .. ..$ fillcolor: logi NA
##   .. .. .. ..$ line     :List of 3
##   .. .. .. .. ..$ color   : logi NA
##   .. .. .. .. ..$ width   : num 0
##   .. .. .. .. ..$ linetype: chr(0) 
##   .. .. .. ..$ yref     : chr "paper"
##   .. .. .. ..$ xref     : chr "paper"
##   .. .. .. ..$ x0       : num 0
##   .. .. .. ..$ x1       : num 1
##   .. .. .. ..$ y0       : num 0
##   .. .. .. ..$ y1       : num 1
##   .. ..$ showlegend   : logi TRUE
##   .. ..$ legend       :List of 5
##   .. .. ..$ bgcolor    : chr "rgba(255,255,255,1)"
##   .. .. ..$ bordercolor: chr "transparent"
##   .. .. ..$ borderwidth: num 1.89
##   .. .. ..$ font       :List of 3
##   .. .. .. ..$ color : chr "rgba(0,0,0,1)"
##   .. .. .. ..$ family: chr ""
##   .. .. .. ..$ size  : num 11.7
##   .. .. ..$ y          : num 0.938
##   .. ..$ annotations  :List of 1
##   .. .. ..$ :List of 13
##   .. .. .. ..$ text       : chr "group"
##   .. .. .. ..$ x          : num 1.02
##   .. .. .. ..$ y          : num 1
##   .. .. .. ..$ showarrow  : logi FALSE
##   .. .. .. ..$ ax         : num 0
##   .. .. .. ..$ ay         : num 0
##   .. .. .. ..$ font       :List of 3
##   .. .. .. .. ..$ color : chr "rgba(0,0,0,1)"
##   .. .. .. .. ..$ family: chr ""
##   .. .. .. .. ..$ size  : num 14.6
##   .. .. .. ..$ xref       : chr "paper"
##   .. .. .. ..$ yref       : chr "paper"
##   .. .. .. ..$ textangle  : num 0
##   .. .. .. ..$ xanchor    : chr "left"
##   .. .. .. ..$ yanchor    : chr "bottom"
##   .. .. .. ..$ legendTitle: logi TRUE
##   .. ..$ hovermode    : chr "closest"
##   ..$ config  :List of 3
##   .. ..$ doubleClick           : chr "reset"
##   .. ..$ modeBarButtonsToAdd   :List of 1
##   .. .. ..$ :List of 3
##   .. .. .. ..$ name : chr "Collaborate"
##   .. .. .. ..$ icon :List of 4
##   .. .. .. .. ..$ width  : num 1000
##   .. .. .. .. ..$ ascent : num 500
##   .. .. .. .. ..$ descent: num -50
##   .. .. .. .. ..$ path   : chr "M487 375c7-10 9-23 5-36l-79-259c-3-12-11-23-22-31-11-8-22-12-35-12l-263 0c-15 0-29 5-43 15-13 10-23 23-28 37-5 13-5 25-1 37 0 0"| __truncated__
##   .. .. .. ..$ click:Class 'JS_EVAL'  chr "function(gd) { \n        // is this being viewed in RStudio?\n        if (location.search == '?viewer_pane=1') {\n          ale"| __truncated__
##   .. ..$ modeBarButtonsToRemove:List of 1
##   .. .. ..$ : chr "sendDataToCloud"
##   ..$ source  : chr "A"
##   ..$ attrs   :List of 1
##   .. ..$ 108e24318cf6:List of 4
##   .. .. ..$ x     :Class 'formula'  language ~x
##   .. .. .. .. ..- attr(*, ".Environment")=<environment: 0x7fe07eb260a8> 
##   .. .. ..$ y     :Class 'formula'  language ~y
##   .. .. .. .. ..- attr(*, ".Environment")=<environment: 0x7fe07eb260a8> 
##   .. .. ..$ colour:Class 'formula'  language ~group
##   .. .. .. .. ..- attr(*, ".Environment")=<environment: 0x7fe07eb260a8> 
##   .. .. ..$ type  : chr "ggplotly"
##   .. .. ..- attr(*, "class")= chr "plotly_eval"
##   ..$ cur_data: chr "108e24318cf6"
##   ..$ visdat  :List of 1
##   .. ..$ 108e24318cf6:function (y)  
##   ..- attr(*, "TOJSON_FUNC")=function (x, ...)  
##  $ width        : NULL
##  $ height       : NULL
##  $ sizingPolicy :List of 6
##   ..$ defaultWidth : chr "100%"
##   ..$ defaultHeight: num 400
##   ..$ padding      : NULL
##   ..$ viewer       :List of 6
##   .. ..$ defaultWidth : NULL
##   .. ..$ defaultHeight: NULL
##   .. ..$ padding      : NULL
##   .. ..$ fill         : logi TRUE
##   .. ..$ suppress     : logi FALSE
##   .. ..$ paneHeight   : NULL
##   ..$ browser      :List of 4
##   .. ..$ defaultWidth : NULL
##   .. ..$ defaultHeight: NULL
##   .. ..$ padding      : NULL
##   .. ..$ fill         : logi TRUE
##   ..$ knitr        :List of 3
##   .. ..$ defaultWidth : NULL
##   .. ..$ defaultHeight: NULL
##   .. ..$ figure       : logi TRUE
##  $ dependencies :List of 3
##   ..$ :List of 9
##   .. ..$ name      : chr "jquery"
##   .. ..$ version   : chr "1.11.3"
##   .. ..$ src       :List of 1
##   .. .. ..$ file: chr "/Library/Frameworks/R.framework/Versions/3.3/Resources/library/crosstalk/lib/jquery"
##   .. ..$ meta      : NULL
##   .. ..$ script    : chr "jquery.min.js"
##   .. ..$ stylesheet: NULL
##   .. ..$ head      : NULL
##   .. ..$ attachment: NULL
##   .. ..$ all_files : logi TRUE
##   .. ..- attr(*, "class")= chr "html_dependency"
##   ..$ :List of 9
##   .. ..$ name      : chr "crosstalk"
##   .. ..$ version   : chr "1.0.1"
##   .. ..$ src       :List of 1
##   .. .. ..$ file: chr "/Library/Frameworks/R.framework/Versions/3.3/Resources/library/crosstalk/www"
##   .. ..$ meta      : NULL
##   .. ..$ script    : chr "js/crosstalk.min.js"
##   .. ..$ stylesheet: chr "css/crosstalk.css"
##   .. ..$ head      : NULL
##   .. ..$ attachment: NULL
##   .. ..$ all_files : logi TRUE
##   .. ..- attr(*, "class")= chr "html_dependency"
##   ..$ :List of 9
##   .. ..$ name      : chr "typedarray"
##   .. ..$ version   : chr "0.1"
##   .. ..$ src       :List of 1
##   .. .. ..$ file: chr "/Library/Frameworks/R.framework/Versions/3.3/Resources/library/plotly/htmlwidgets/lib/typedarray"
##   .. ..$ meta      : NULL
##   .. ..$ script    : chr "typedarray.min.js"
##   .. ..$ stylesheet: NULL
##   .. ..$ head      : NULL
##   .. ..$ attachment: NULL
##   .. ..$ all_files : logi TRUE
##   .. ..- attr(*, "class")= chr "html_dependency"
##  $ elementId    : NULL
##  $ preRenderHook:function (p, registerFrames = TRUE)  
##  $ jsHooks      : list()
##  - attr(*, "class")= chr [1:2] "plotly" "htmlwidget"
##  - attr(*, "package")= chr "plotly"
```

This declaritive description of the graph is very human readable. Every attribute of the chart, the colors, the data, the text, is described in a key-value pair in this object. [View all of the possible graph attributes.](https://plot.ly/r/reference)

Attributes of plotly figures are grouped into two categories: `data` and `layout`. `data` describes attributes that pertain to the plot's series, or "traces". These properties include things like the `x` and `y` data, the `color` and `name` of the trace, which axis the trace is bound to. `data` is an unnamed list.

Take a look:


```r
names(p$data[[1]])
```

```
## NULL
```

```r
# this trace is a "scatter" type
p$data[[1]]$type
```

```
## NULL
```

its name, as it appears in the legend, is "A"


```r
p$data[[1]]$name
```

```
## NULL
```


```r
str(p$data[[1]])
```

```
##  NULL
```

`layout` describes attributes that pertain to the rest of the plot, like axis properties, annotations, legends, and titles.


```r
names(p$layout)
```

```
## NULL
```

```r
str(p$layout)
```

```
##  NULL
```

```r
str(p$layout$plot_bgcolor) # the background color of the plot is "rgb(229,229,229)"
```

```
##  NULL
```

```r
str(p$layout$legend)
```

```
##  NULL
```

Each of these properties was extracted and translated from the original ggplot2 figure. [View all of the possible attributes](https://plot.ly/r/reference).

You can edit or add these attributes and then send the figure to Plotly. Let's add custom hover text (`text`), change the legend names (`name`) add a title (`layout$title`)


```r
p$data[[1]]$name <- 'Group A'
p$data[[1]]$text <- c('St Urbain', 'Gaspe')
p$data[[1]]$type <- 'bar'

p$data[[2]]$name <- 'Group B'
```

```
## Error in `*tmp*`[[2]]: subscript out of bounds
```

```r
p$data[[2]]$text <- c('Laurier', 'Fairmount')
```

```
## Error in `*tmp*`[[2]]: subscript out of bounds
```

```r
p$data[[2]]$type <- 'bar'
```

```
## Error in `*tmp*`[[2]]: subscript out of bounds
```

```r
p$layout$title <- 'Updated title'
```

Now, send this to your plotly account:


```r
p$filename <- 'ggplot2-user-guide/custom-ggplot2'
r <- plotly_POST(p)
knit_print.plotly(r, options=list())
```

```
## Error in eval(expr, envir, enclos): could not find function "knit_print.plotly"
```

#### More resources
- [ggplot2 examples](https://plot.ly/ggplot2)
- [Plotly's native R DSL](https://plot.ly/r)
- [Plotly's declaritive graph description reference](https://plot.ly/r/reference)
- [Plotly with Shiny](https://plot.ly/r/shiny-tutorial)
- [`plotly` R package on GitHub](https://github.com/ropensci/plotly)
- [Plotly graphs in other languages](https://plot.ly/api)
