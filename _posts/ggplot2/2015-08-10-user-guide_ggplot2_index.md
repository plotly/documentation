---
permalink: ggplot2/user-guide/
name: Plotly ggplot2 User Guide
description: A user guide for interfacing ggplot2 with Plotly.
layout: base
thumbnail: thumbnail/facet_wrap.jpg
language: ggplot2
page_type: user_guide
ignore_header: true
---

#### Introduction



Plotly for R is an interactive, browser-based charting library built on the open source JavaScript graphing library <a href="https://plot.ly/javascript" target="_blank">plotly.js</a>. It works entirely locally in your web-browser via the <a target="_blank" href="http://www.htmlwidgets.org/">HTML widgets framework</a>.

<iframe src="https://plot.ly/~RPlotBot/1772.embed" width="100%" height="600px" style="border: none;"></iframe>

Plotly graphs are interactive: click-and-drag to zoom, shift-drag to pan, click on legend entries to toggle traces.

The [plotly R package](https://github.com/ropensci/plotly) serializes ggplot2 figures into Plotly's <a target="_blank" href="http://help.plot.ly/json-chart-schema/">universal graph JSON</a>. `plotly::ggplotly` will crawl the ggplot2 figure, extract and translate all of the attributes of the ggplot2 figure into JSON (the colors, the axes, the chart type, etc), and draw the graph with plotly.js.


```r
library(plotly)

dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
gg <- qplot(carat, price, data=dsamp, colour=clarity)

gg <- ggplotly(gg)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(gg, filename="ggplot-user-guide/1")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5151.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

`plotly::ggplotly` returns a `plotly` object. When you print it in your console, the plotly graph will be rendered in your web browser or in R Studio's viewer.

Plotly graphs can also be published on the web by calling `api_create(ggplotly(gg))`. [Learn how to get started with publishing plotly graphs to the web](https://plot.ly/r/).

#### Cutomizing the Layout

Since the `ggplotly()` function returns a plotly object, we can manipulate that object in the same way that we would manipulate any other plotly object. A simple and useful application of this is to specify interaction modes, like plotly.js' `layout.dragmode` for specifying the mode of click+drag events.



```r
p <- ggplot(fortify(forecast::gold), aes(x, y)) + geom_line()

gg <- ggplotly(p)

gg <- layout(gg, dragmode = "pan")

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(gg, filename="ggplot-user-guide/2")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5153.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Modifying Layers

As mentioned previously, `ggplotly()` translates each ggplot2 layer into one or more plotly.js traces. In this translation, it is forced to make a number of assumptions about trace attribute values that may or may not be appropriate for the use case. The `style()` function is useful in this scenario, as it provides a way to modify trace attribute values in a plotly object. Furthermore, you can use the `plotly_build()` function.

#### Interactively View the JSON Object

Before using the `style()` or `plotly_build` functions, you may want to inspect the actual traces in a given plotly object using the plotly_json() function


```r
plotly_json(p)
```


#### Modify with Style

Generally speaking, the `style()` function is designed modify attribute values of trace(s) within a plotly object, which is primarily useful for customizing defaults produced via `ggplotly()`


```r
p <- ggplot(fortify(forecast::gold), aes(x, y)) + geom_line()

gg <- ggplotly(p)

gg <- style(gg, line = list(color = 'gold'), hoverinfo = "y", traces = 1)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(gg, filename="ggplot-user-guide/3")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5178.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Modify with Build


```r
df <- data.frame(x=c(1, 2, 3, 4), y=c(1, 5, 3, 5), group=c('A', 'A', 'B', 'B'))

g <- ggplot(data=df, aes(x=x, y=y, colour=group)) + geom_point()

g <- ggplotly(g)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(g, filename="ggplot-user-guide/4")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5180.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

Here is the ggplot2 figure described as a plotly object


```r
p <- plotly_build(g)
str(p)
```


```
## List of 8
##  $ x            :List of 9
##   ..$ data     :List of 2
##   .. ..$ :List of 14
##   .. .. ..$ x          : atomic [1:2] 1 2
##   .. .. .. ..- attr(*, "apiSrc")= logi TRUE
##   .. .. ..$ y          : atomic [1:2] 1 5
##   .. .. .. ..- attr(*, "apiSrc")= logi TRUE
##   .. .. ..$ text       : atomic [1:2] x: 1<br />y: 1 x: 2<br />y: 5
##   .. .. .. ..- attr(*, "apiSrc")= logi TRUE
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
##   .. .. ..$ frame      : chr NA
##   .. ..$ :List of 14
##   .. .. ..$ x          : atomic [1:2] 3 4
##   .. .. .. ..- attr(*, "apiSrc")= logi TRUE
##   .. .. ..$ y          : atomic [1:2] 3 5
##   .. .. .. ..- attr(*, "apiSrc")= logi TRUE
##   .. .. ..$ text       : atomic [1:2] x: 3<br />y: 3 x: 4<br />y: 5
##   .. .. .. ..- attr(*, "apiSrc")= logi TRUE
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
##   .. .. ..$ frame      : chr NA
##   ..$ layout   :List of 12
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
##   .. ..$ xaxis        :List of 28
##   .. .. ..$ domain        : num [1:2] 0 1
##   .. .. ..$ type          : chr "linear"
##   .. .. ..$ autorange     : logi FALSE
##   .. .. ..$ range         : num [1:2] 0.85 4.15
##   .. .. ..$ tickmode      : chr "array"
##   .. .. ..$ ticktext      : atomic [1:4] 1 2 3 4
##   .. .. .. ..- attr(*, "apiSrc")= logi TRUE
##   .. .. ..$ tickvals      : atomic [1:4] 1 2 3 4
##   .. .. .. ..- attr(*, "apiSrc")= logi TRUE
##   .. .. ..$ categoryorder : chr "array"
##   .. .. ..$ categoryarray : atomic [1:4] 1 2 3 4
##   .. .. .. ..- attr(*, "apiSrc")= logi TRUE
##   .. .. ..$ nticks        : logi NA
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
##   .. ..$ yaxis        :List of 28
##   .. .. ..$ domain        : num [1:2] 0 1
##   .. .. ..$ type          : chr "linear"
##   .. .. ..$ autorange     : logi FALSE
##   .. .. ..$ range         : num [1:2] 0.8 5.2
##   .. .. ..$ tickmode      : chr "array"
##   .. .. ..$ ticktext      : atomic [1:5] 1 2 3 4 ...
##   .. .. .. ..- attr(*, "apiSrc")= logi TRUE
##   .. .. ..$ tickvals      : atomic [1:5] 1 2 3 4 5
##   .. .. .. ..- attr(*, "apiSrc")= logi TRUE
##   .. .. ..$ categoryorder : chr "array"
##   .. .. ..$ categoryarray : atomic [1:5] 1 2 3 4 ...
##   .. .. .. ..- attr(*, "apiSrc")= logi TRUE
##   .. .. ..$ nticks        : logi NA
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
##   .. ..$ barmode      : chr "relative"
##   ..$ config   :List of 3
##   .. ..$ doubleClick        : chr "reset"
##   .. ..$ modeBarButtonsToAdd:List of 1
##   .. .. ..$ :List of 3
##   .. .. .. ..$ name : chr "Collaborate"
##   .. .. .. ..$ icon :List of 4
##   .. .. .. .. ..$ width  : num 1000
##   .. .. .. .. ..$ ascent : num 500
##   .. .. .. .. ..$ descent: num -50
##   .. .. .. .. ..$ path   : chr "M487 375c7-10 9-23 5-36l-79-259c-3-12-11-23-22-31-11-8-22-12-35-12l-263 0c-15 0-29 5-43 15-13 10-23 23-28 37-5 "| __truncated__
##   .. .. .. ..$ click:Class 'JS_EVAL'  chr "function(gd) { \n        // is this being viewed in RStudio?\n        if (location.search == '?viewer_pane=1') "| __truncated__
##   .. ..$ cloud              : logi FALSE
##   ..$ source   : chr "A"
##   ..$ attrs    :List of 1
##   .. ..$ 14102491252b:List of 4
##   .. .. ..$ x     :Class 'formula'  language ~x
##   .. .. .. .. ..- attr(*, ".Environment")=<environment: 0x0000000005ec5030>
##   .. .. ..$ y     :Class 'formula'  language ~y
##   .. .. .. .. ..- attr(*, ".Environment")=<environment: 0x0000000005ec5030>
##   .. .. ..$ colour:Class 'formula'  language ~group
##   .. .. .. .. ..- attr(*, ".Environment")=<environment: 0x0000000005ec5030>
##   .. .. ..$ type  : chr "scatter"
##   .. .. ..- attr(*, "class")= chr "plotly_eval"
##   ..$ cur_data : chr "14102491252b"
##   ..$ visdat   :List of 1
##   .. ..$ 14102491252b:function (y)
##   ..$ highlight:List of 6
##   .. ..$ on        : chr "plotly_click"
##   .. ..$ persistent: logi FALSE
##   .. ..$ dynamic   : logi FALSE
##   .. ..$ selectize : logi FALSE
##   .. ..$ opacityDim: num 0.2
##   .. ..$ selected  :List of 1
##   .. .. ..$ opacity: num 1
##   ..$ base_url : chr "https://plot.ly"
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
##  $ dependencies :List of 4
##   ..$ :List of 10
##   .. ..$ name      : chr "typedarray"
##   .. ..$ version   : chr "0.1"
##   .. ..$ src       :List of 1
##   .. .. ..$ file: chr "C:/Users/Branden/Documents/R/win-library/3.4/plotly/htmlwidgets/lib/typedarray"
##   .. ..$ meta      : NULL
##   .. ..$ script    : chr "typedarray.min.js"
##   .. ..$ stylesheet: NULL
##   .. ..$ head      : NULL
##   .. ..$ attachment: NULL
##   .. ..$ package   : NULL
##   .. ..$ all_files : logi TRUE
##   .. ..- attr(*, "class")= chr "html_dependency"
##   ..$ :List of 10
##   .. ..$ name      : chr "jquery"
##   .. ..$ version   : chr "1.11.3"
##   .. ..$ src       :List of 1
##   .. .. ..$ file: chr "C:/Users/Branden/Documents/R/win-library/3.4/crosstalk/lib/jquery"
##   .. ..$ meta      : NULL
##   .. ..$ script    : chr "jquery.min.js"
##   .. ..$ stylesheet: NULL
##   .. ..$ head      : NULL
##   .. ..$ attachment: NULL
##   .. ..$ package   : NULL
##   .. ..$ all_files : logi TRUE
##   .. ..- attr(*, "class")= chr "html_dependency"
##   ..$ :List of 10
##   .. ..$ name      : chr "crosstalk"
##   .. ..$ version   : chr "1.0.0"
##   .. ..$ src       :List of 1
##   .. .. ..$ file: chr "C:/Users/Branden/Documents/R/win-library/3.4/crosstalk/www"
##   .. ..$ meta      : NULL
##   .. ..$ script    : chr "js/crosstalk.min.js"
##   .. ..$ stylesheet: chr "css/crosstalk.css"
##   .. ..$ head      : NULL
##   .. ..$ attachment: NULL
##   .. ..$ package   : NULL
##   .. ..$ all_files : logi TRUE
##   .. ..- attr(*, "class")= chr "html_dependency"
##   ..$ :List of 10
##   .. ..$ name      : chr "plotlyjs"
##   .. ..$ version   : chr "1.31.1"
##   .. ..$ src       :List of 1
##   .. .. ..$ file: chr "C:/Users/Branden/Documents/R/win-library/3.4/plotly/htmlwidgets/lib/plotlyjs"
##   .. ..$ meta      : NULL
##   .. ..$ script    : chr "plotly-latest.min.js"
##   .. ..$ stylesheet: chr "plotly-htmlwidgets.css"
##   .. ..$ head      : NULL
##   .. ..$ attachment: NULL
##   .. ..$ package   : NULL
##   .. ..$ all_files : logi TRUE
##   .. ..- attr(*, "class")= chr "html_dependency"
##  $ elementId    : NULL
##  $ preRenderHook:function (p, registerFrames = TRUE)
##  $ jsHooks      :List of 1
##   ..$ render:List of 1
##   .. ..$ :List of 2
##   .. .. ..$ code: chr "function(el, x) { var ctConfig = crosstalk.var('plotlyCrosstalkOpts').set({\"on\":\"plotly_click\",\"persistent"| __truncated__
##   .. .. ..$ data: NULL
##  - attr(*, "class")= chr [1:2] "plotly" "htmlwidget"
##  - attr(*, "package")= chr "plotly"
```

This declarative description of the graph is very human readable. Every attribute of the chart, the colors, the data, the text, is described in a key-value pair in this object. [View all of the possible graph attributes.](https://plot.ly/r/reference)

Attributes of plotly figures are grouped into two categories: `data` and `layout`. `data` describes attributes that pertain to the plot's series, or "traces". These properties include things like the `x` and `y` data, the `color` and `name` of the trace, which axis the trace is bound to. `data` is an unnamed list.

Take a look:


```r
names(p$x$data[[1]])
```

```
##  [1] "x"           "y"           "text"        "type"        "mode"
##  [6] "marker"      "hoveron"     "name"        "legendgroup" "showlegend"
## [11] "xaxis"       "yaxis"       "hoverinfo"   "frame"
```

```r
# this trace is a "scatter" type
p$x$data[[1]]$type
```

```
## [1] "scatter"
```

its name, as it appears in the legend, is "A"


```r
p$x$data[[1]]$name
```

```
## [1] "A"
```


```r
str(p$x$data[[1]])
```

```
## List of 14
##  $ x          : atomic [1:2] 1 2
##   ..- attr(*, "apiSrc")= logi TRUE
##  $ y          : atomic [1:2] 1 5
##   ..- attr(*, "apiSrc")= logi TRUE
##  $ text       : atomic [1:2] x: 1<br />y: 1 x: 2<br />y: 5
##   ..- attr(*, "apiSrc")= logi TRUE
##  $ type       : chr "scatter"
##  $ mode       : chr "markers"
##  $ marker     :List of 6
##   ..$ autocolorscale: logi FALSE
##   ..$ color         : chr "rgba(248,118,109,1)"
##   ..$ opacity       : num 1
##   ..$ size          : num 5.67
##   ..$ symbol        : chr "circle"
##   ..$ line          :List of 2
##   .. ..$ width: num 1.89
##   .. ..$ color: chr "rgba(248,118,109,1)"
##  $ hoveron    : chr "points"
##  $ name       : chr "A"
##  $ legendgroup: chr "A"
##  $ showlegend : logi TRUE
##  $ xaxis      : chr "x"
##  $ yaxis      : chr "y"
##  $ hoverinfo  : chr "text"
##  $ frame      : chr NA
```

`layout` describes attributes that pertain to the rest of the plot, like axis properties, annotations, legends, and titles.


```r
names(p$x$layout)
```

```
##  [1] "margin"        "plot_bgcolor"  "paper_bgcolor" "font"
##  [5] "xaxis"         "yaxis"         "shapes"        "showlegend"
##  [9] "legend"        "annotations"   "hovermode"     "barmode"
```

```r
str(p$x$layout)
```

```
## List of 12
##  $ margin       :List of 4
##   ..$ t: num 23.3
##   ..$ r: num 7.31
##   ..$ b: num 37.3
##   ..$ l: num 31.4
##  $ plot_bgcolor : chr "rgba(235,235,235,1)"
##  $ paper_bgcolor: chr "rgba(255,255,255,1)"
##  $ font         :List of 3
##   ..$ color : chr "rgba(0,0,0,1)"
##   ..$ family: chr ""
##   ..$ size  : num 14.6
##  $ xaxis        :List of 28
##   ..$ domain        : num [1:2] 0 1
##   ..$ type          : chr "linear"
##   ..$ autorange     : logi FALSE
##   ..$ range         : num [1:2] 0.85 4.15
##   ..$ tickmode      : chr "array"
##   ..$ ticktext      : atomic [1:4] 1 2 3 4
##   .. ..- attr(*, "apiSrc")= logi TRUE
##   ..$ tickvals      : atomic [1:4] 1 2 3 4
##   .. ..- attr(*, "apiSrc")= logi TRUE
##   ..$ categoryorder : chr "array"
##   ..$ categoryarray : atomic [1:4] 1 2 3 4
##   .. ..- attr(*, "apiSrc")= logi TRUE
##   ..$ nticks        : logi NA
##   ..$ ticks         : chr "outside"
##   ..$ tickcolor     : chr "rgba(51,51,51,1)"
##   ..$ ticklen       : num 3.65
##   ..$ tickwidth     : num 0.664
##   ..$ showticklabels: logi TRUE
##   ..$ tickfont      :List of 3
##   .. ..$ color : chr "rgba(77,77,77,1)"
##   .. ..$ family: chr ""
##   .. ..$ size  : num 11.7
##   ..$ tickangle     : num 0
##   ..$ showline      : logi FALSE
##   ..$ linecolor     : logi NA
##   ..$ linewidth     : num 0
##   ..$ showgrid      : logi TRUE
##   ..$ gridcolor     : chr "rgba(255,255,255,1)"
##   ..$ gridwidth     : num 0.664
##   ..$ zeroline      : logi FALSE
##   ..$ anchor        : chr "y"
##   ..$ title         : chr "x"
##   ..$ titlefont     :List of 3
##   .. ..$ color : chr "rgba(0,0,0,1)"
##   .. ..$ family: chr ""
##   .. ..$ size  : num 14.6
##   ..$ hoverformat   : chr ".2f"
##  $ yaxis        :List of 28
##   ..$ domain        : num [1:2] 0 1
##   ..$ type          : chr "linear"
##   ..$ autorange     : logi FALSE
##   ..$ range         : num [1:2] 0.8 5.2
##   ..$ tickmode      : chr "array"
##   ..$ ticktext      : atomic [1:5] 1 2 3 4 ...
##   .. ..- attr(*, "apiSrc")= logi TRUE
##   ..$ tickvals      : atomic [1:5] 1 2 3 4 5
##   .. ..- attr(*, "apiSrc")= logi TRUE
##   ..$ categoryorder : chr "array"
##   ..$ categoryarray : atomic [1:5] 1 2 3 4 ...
##   .. ..- attr(*, "apiSrc")= logi TRUE
##   ..$ nticks        : logi NA
##   ..$ ticks         : chr "outside"
##   ..$ tickcolor     : chr "rgba(51,51,51,1)"
##   ..$ ticklen       : num 3.65
##   ..$ tickwidth     : num 0.664
##   ..$ showticklabels: logi TRUE
##   ..$ tickfont      :List of 3
##   .. ..$ color : chr "rgba(77,77,77,1)"
##   .. ..$ family: chr ""
##   .. ..$ size  : num 11.7
##   ..$ tickangle     : num 0
##   ..$ showline      : logi FALSE
##   ..$ linecolor     : logi NA
##   ..$ linewidth     : num 0
##   ..$ showgrid      : logi TRUE
##   ..$ gridcolor     : chr "rgba(255,255,255,1)"
##   ..$ gridwidth     : num 0.664
##   ..$ zeroline      : logi FALSE
##   ..$ anchor        : chr "x"
##   ..$ title         : chr "y"
##   ..$ titlefont     :List of 3
##   .. ..$ color : chr "rgba(0,0,0,1)"
##   .. ..$ family: chr ""
##   .. ..$ size  : num 14.6
##   ..$ hoverformat   : chr ".2f"
##  $ shapes       :List of 1
##   ..$ :List of 9
##   .. ..$ type     : chr "rect"
##   .. ..$ fillcolor: logi NA
##   .. ..$ line     :List of 3
##   .. .. ..$ color   : logi NA
##   .. .. ..$ width   : num 0
##   .. .. ..$ linetype: chr(0)
##   .. ..$ yref     : chr "paper"
##   .. ..$ xref     : chr "paper"
##   .. ..$ x0       : num 0
##   .. ..$ x1       : num 1
##   .. ..$ y0       : num 0
##   .. ..$ y1       : num 1
##  $ showlegend   : logi TRUE
##  $ legend       :List of 5
##   ..$ bgcolor    : chr "rgba(255,255,255,1)"
##   ..$ bordercolor: chr "transparent"
##   ..$ borderwidth: num 1.89
##   ..$ font       :List of 3
##   .. ..$ color : chr "rgba(0,0,0,1)"
##   .. ..$ family: chr ""
##   .. ..$ size  : num 11.7
##   ..$ y          : num 0.938
##  $ annotations  :List of 1
##   ..$ :List of 13
##   .. ..$ text       : chr "group"
##   .. ..$ x          : num 1.02
##   .. ..$ y          : num 1
##   .. ..$ showarrow  : logi FALSE
##   .. ..$ ax         : num 0
##   .. ..$ ay         : num 0
##   .. ..$ font       :List of 3
##   .. .. ..$ color : chr "rgba(0,0,0,1)"
##   .. .. ..$ family: chr ""
##   .. .. ..$ size  : num 14.6
##   .. ..$ xref       : chr "paper"
##   .. ..$ yref       : chr "paper"
##   .. ..$ textangle  : num 0
##   .. ..$ xanchor    : chr "left"
##   .. ..$ yanchor    : chr "bottom"
##   .. ..$ legendTitle: logi TRUE
##  $ hovermode    : chr "closest"
##  $ barmode      : chr "relative"
```

```r
str(p$x$layout$plot_bgcolor) # the background color of the plot is "rgb(229,229,229)"
```

```
##  chr "rgba(235,235,235,1)"
```

```r
str(p$x$layout$legend)
```

```
## List of 5
##  $ bgcolor    : chr "rgba(255,255,255,1)"
##  $ bordercolor: chr "transparent"
##  $ borderwidth: num 1.89
##  $ font       :List of 3
##   ..$ color : chr "rgba(0,0,0,1)"
##   ..$ family: chr ""
##   ..$ size  : num 11.7
##  $ y          : num 0.938
```

Each of these properties was extracted and translated from the original ggplot2 figure. [View all of the possible attributes](https://plot.ly/r/reference).

You can edit or add these attributes and then send the figure to Plotly. Let's add custom hover text (`text`), change the legend names (`name`) add a title (`layout$title`)


```r
p$x$data[[1]]$name <- 'Group A'
p$x$data[[1]]$text <- c('St Urbain', 'Gaspe')
p$x$data[[1]]$type <- 'scatter'
p$x$data[[1]]$mode <- 'lines'

p$x$data[[2]]$name <- 'Group B'
p$x$data[[2]]$text <- c('Laurier', 'Fairmount')
p$x$data[[2]]$type <- 'scatter'
p$x$data[[2]]$mode <- 'lines'

p$x$layout$title <- 'Updated title'
```

Now, send this to your plotly account:


```r
p$x$filename <- 'ggplot2-user-guide/custom-ggplot2'

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p)
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5184.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Resources

- [ggplot2 examples](https://plot.ly/ggplot2)
- [Plotly's native R DSL](https://plot.ly/r)
- [Plotly's declarative graph description reference](https://plot.ly/r/reference)
- [Plotly with Shiny](https://plot.ly/r/shiny-tutorial)
- [`plotly` R package on GitHub](https://github.com/ropensci/plotly)
- [Plotly graphs in other languages](https://plot.ly/api)
