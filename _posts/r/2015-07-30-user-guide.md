---
permalink: r/user-guide/
description: UseR Guide for plotly and its R and ggplot2 API Libraries.
name: Plotly UseR Guide
layout: user-guide
thumbnail: /images/static-image.png
language: r
page_type: example_index
has_thumbnail: false
---



# Plotly UseR Guide

Version 1.0.0 of the [plotly R package](https://github.com/ropensci/plotly) introduces a new high-level interface for working with plotly's JavaScript graphing library from R. The aim of this vignette is to explain the semantics of this interface, but I also recommend perusing [plotly's R homepage](https://plot.ly/r/) for more examples.

To initiate a plotly object, use `plot_ly()`. Here we turn the `economics` data frame (from the ggplot2 package) into a plotly visualization and store it as the object `p`.


```r
library(plotly)
p <- plot_ly(economics, x = date, y = uempmed)
```

If you have a plotly account, printing plotly objects in the R console will create a new plotly figure, and open it in your web browser. If you're using knitr/R Markdown with HTML output (like [this vignette](https://github.com/ropensci/plotly/tree/master/vignettes/intro.Rmd)), printing not only creates the plot, but also embeds it as an HTML iframe.


```r
p
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/997.embed" width="800" frameBorder="0"></iframe>

`plot_ly()` has a number of arguments which are unique to the R package and make common visualizations a bit easier. These arguments are very much inspired by the semantics of ggplot2's `qplot()` in the sense that a scales are automatically applied these variables (i.e., they map data to visual properties).

#### Qualitative color mappings

If a ordinal variable (aka a non-ordered factor variable) is assigned to color, then a qualitative color palette is used by default.


```r
plot_ly(iris, x = Petal.Length, y = Petal.Width,
        color = Species, mode = "markers")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/999.embed" width="800" frameBorder="0"></iframe>

If you want to change the default palette, it's recommended that you provide a <http://colorbrewer2.org> qualitative pallette name (e.g., "Set1" or "Accent") to the colors argument.


```r
plot_ly(iris, x = Petal.Length, y = Petal.Width,
        color = Species, colors = "Set1", mode = "markers")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1001.embed" width="800" frameBorder="0"></iframe>

In this case, the palette consists of 9 colors and the default behavior is to pick colors that are furthest apart ("#E41A1C", "#FF7F00", and "#999999").


```r
cols <- RColorBrewer::brewer.pal(9, "Set1")
scales::show_col(cols)
```

<div align="center">
  <a href="http://imgur.com/PpLch1T">
    <img src="http://i.imgur.com/PpLch1T.png" />
  </a>
</div>

If you'd like more control over the mapping, you can provide a vector of colors (of appropriate length).


```r
cols <- RColorBrewer::brewer.pal(nlevels(iris$Species), "Set1")
plot_ly(iris, x = Petal.Length, y = Petal.Width,
        color = Species, colors = cols, mode = "markers")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1003.embed" width="800" frameBorder="0"></iframe>

#### Sequential color mappings

If either a numeric or an ordered factor is mapped to color, `plot_ly()` applies a sequential color scale by default.


```r
plot_ly(iris, x = Petal.Length, y = Petal.Width,
        color = as.ordered(Species), mode = "markers")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1005.embed" width="800" frameBorder="0"></iframe>

In the case of continuous numeric variables, `plot_ly()` performs a linear mapping between the data and an interpolated color pallette.


```r
plot_ly(iris, x = Petal.Length, y = Petal.Width,
        color = Sepal.Length, mode = "markers")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1007.embed" width="800" frameBorder="0"></iframe>

The colors argument takes arbitrary color codes of arbitrary length. Here is how we could use it to replicate the default mapping in ggplot2.


```r
plot_ly(iris, x = Petal.Length, y = Petal.Width,
        color = Sepal.Length, colors = c("#132B43", "#56B1F7"),
        mode = "markers")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1009.embed" width="800" frameBorder="0"></iframe>

#### Diverging color mappings

To obtain a diverging color mapping, just provide a diverging palette to the colors argument.


```r
plot_ly(iris, x = Petal.Length, y = Petal.Width,
        color = Sepal.Length, colors = "PuOr", mode = "markers")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1011.embed" width="800" frameBorder="0"></iframe>

#### The symbol argument

To encode values using symbols, use the symbol argument.


```r
plot_ly(iris, x = Petal.Length, y = Petal.Width,
        symbol = Species, mode = "markers")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1013.embed" width="800" frameBorder="0"></iframe>

To change the default symbols used, use the symbols argument. [View all of the available symbol](https://plot.ly/r/reference/#marker).


```r
plot_ly(iris, x = Petal.Length, y = Petal.Width, mode = "markers",
        symbol = Species, symbols = c("cross", "square", "triangle-down"))
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1015.embed" width="800" frameBorder="0"></iframe>

### The group argument and `subplot()`

Using the group argument splits the data into different plotly "traces".


```r
plot_ly(iris, x = Petal.Length, y = Petal.Width,
        group = Species, mode = "markers")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1017.embed" width="800" frameBorder="0"></iframe>

Although we haven't specified a coloring scheme, plotly will employ one on it's own default scheme. The group argument is quite powerful when used in conjunction with `subplot()` in order to anchor traces onto different axes.


```r
iris$id <- as.integer(iris$Species)
p <- plot_ly(iris, x = Petal.Length, y = Petal.Width, group = Species,
             xaxis = paste0("x", id), mode = "markers")
subplot(p)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1019.embed" width="800" frameBorder="0"></iframe>

Since `subplot()` does not assume x/y axes are on a common scale, it does not impose any restrictions on the range by default. However, you can change this by pre-specifying the range of the [axis objects](https://plot.ly/r/reference/#xaxis) via the `layout()` function.


```r
p2 <- layout(
  p,
  xaxis = list(range = range(Petal.Length) + c(-0.1, 0.1)),
  yaxis = list(range = range(Petal.Width) + c(-0.1, 0.1))
)
subplot(p2)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1021.embed" width="800" frameBorder="0"></iframe>

The `subplot()` function creates "xaxis[0-9]" objects which inherit pre-specified properties, but you can also customize each subplot by referencing these objects in the layout


```r
layout(
    subplot(p2),
    yaxis2 = list(title = ""),
    yaxis3 = list(title = "")
)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1023.embed" width="800" frameBorder="0"></iframe>

[See here](https://plot.ly/r/map-subplots-and-small-multiples/) for another example of using the group argument to make small multiples (with maps!).

### Manually adding traces

Sometimes you may want multiple traces on a plot, but have different traces from different data sources. In this case, the `add_trace()` function and it's (optional) `data` argument come in handy.


```r
m <- loess(uempmed ~ as.numeric(date), economics)
efit <- data.frame(date = economics$date, yhat = fitted(m))

plot_ly(economics, x = date, y = uempmed, name = "observed") %>%
  add_trace(y = yhat, name = "estimated", data = efit)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1025.embed" width="800" frameBorder="0"></iframe>

Note that the date information carries over from the first trace to the second. In fact, by default, information from the first trace carries over to all subsequent traces unless the property is overwritten or if we set `inherit = FALSE` in `plot_ly()` (this helps [avoid repeating yourself](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)).

### Mixing data manipulation and visualization verbs

If you look at the structure of plotly objects, they are actually data frames with a class of plotly and a special environment attached (this environment tracks the mapping from data to visual properties).


```r
str(p <- plot_ly(economics, x = date, y = uempmed))
```

```
## Classes 'plotly' and 'data.frame':	478 obs. of  6 variables:
##  $ date    : Date, format: "1967-06-30" "1967-07-31" ...
##  $ pce     : num  508 511 517 513 518 ...
##  $ pop     : int  198712 198911 199113 199311 199498 199657 199808 199920 200056 200208 ...
##  $ psavert : num  9.8 9.8 9 9.8 9.7 9.4 9 9.5 8.9 9.6 ...
##  $ uempmed : num  4.5 4.7 4.6 4.9 4.7 4.8 5.1 4.5 4.1 4.6 ...
##  $ unemploy: int  2944 2945 2958 3143 3066 3018 2878 3001 2877 2709 ...
##  - attr(*, "plotly_hash")= chr "7ff330ec8c566561765c62cbafed3e0f#19"
```

Doing this allows us to mix data manipulation and visualization verbs in a [pure(ly) functional, predictable and pipeable](https://dl.dropboxusercontent.com/u/41902/pipe-dsls.pdf) manner. Here, we take advantage of [dplyr](http://cran.r-project.org/web/packages/dplyr/index.html)'s `filter()` verb to label the highest peak in the time series:


```r
p %>%
  add_trace(y = fitted(loess(uempmed ~ as.numeric(date)))) %>%
  layout(title = "Median duration of unemployment (in weeks)",
         showlegend = FALSE) %>%
  dplyr::filter(uempmed == max(uempmed)) %>%
  layout(annotations = list(x = date, y = uempmed, text = "Peak", showarrow = T))
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1027.embed" width="800" frameBorder="0"></iframe>

Although data frames can be thought of as the central object in this package, plotly visualizations don't actually _require_ a data frame. This makes chart types that accept a `z` argument especially easy to use if you have a numeric matrix:


```r
plot_ly(z = volcano, type = "surface")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1029.embed" width="800" frameBorder="0"></iframe>
