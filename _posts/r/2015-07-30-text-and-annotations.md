---
title: Text and Annotations in R | Examples | Plotly
name: Text and Annotations
permalink: r/text-and-annotations/
description: How to add text labels and annotations to plots in R.
layout: base
thumbnail: thumbnail/text-and-annotations.jpg
language: r
page_type: example_index
has_thumbnail: false
display_as: layout_opt
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

### Text Mode


```r
library(plotly)

p <- plot_ly(
  x = c("giraffes", "orangutans", "monkeys"),
  y = c(20, 14, 23),
  name = "SF Zoo",
  type = "bar"
)
p
```

<iframe src="https://plot.ly/~RPlotBot/3080.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Hover Text


```r
plot_ly(mtcars, x = ~wt, y = ~mpg, text = rownames(mtcars)) %>%
  add_markers()
```

<iframe src="https://plot.ly/~RPlotBot/3145.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Styling Text


```r
t <- list(
  family = "sans serif",
  size = 18,
  color = toRGB("grey50")
)
plot_ly(mtcars, x = ~wt, y = ~mpg, text = rownames(mtcars)) %>%
  add_markers() %>%
  add_text(textfont = t, textposition = "top middle")
```

<iframe src="https://plot.ly/~RPlotBot/3147.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Single Annotation


```r
m <- mtcars[which.max(mtcars$mpg), ]

a <- list(
  x = m$wt,
  y = m$mpg,
  text = rownames(m),
  xref = "x",
  yref = "y",
  showarrow = TRUE,
  arrowhead = 7,
  ax = 20,
  ay = -40
)

plot_ly(mtcars, x = ~wt, y = ~mpg) %>%
  add_markers() %>%
  layout(annotations = a)
```

<iframe src="https://plot.ly/~RPlotBot/3150.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Multiple Annotations


```r
plot_ly(mtcars, x = ~wt, y = ~mpg, marker=list(size=10)) %>%
  add_annotations(x = mtcars$wt,
                  y = mtcars$mpg,
                  text = rownames(mtcars),
                  xref = "x",
                  yref = "y",
                  showarrow = TRUE,
                  arrowhead = 4,
                  arrowsize = .5,
                  ax = 20,
                  ay = -40)
```

<iframe src="https://plot.ly/~RPlotBot/3152.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Custom Hover Text


```r
mtcars %>%
  plot_ly(x = ~disp, y = ~mpg, color = ~factor(cyl), size = ~wt) %>%
  add_markers(
    hoverinfo = "text",
    text = ~paste("Displacement = ", disp, "Miles Per Gallon = ", mpg)
  ) %>%
  layout(title ="Custom Hover Text")
```

<iframe src="https://plot.ly/~RPlotBot/3154.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
