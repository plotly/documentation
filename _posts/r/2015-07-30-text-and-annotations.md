---
title: Text and Annotations in R | Examples | Plotly
name: Text and Annotations
permalink: r/text-and-annotations/
description: How to add text labels and annotations to plots in R.
layout: base
thumbnail: text-and-annotations.png
language: r
page_type: example_index
has_thumbnail: false
display_as: layout_opt
---



# Adding Text and Annotations in R

### Text Mode

```r
library(plotly)
plot_ly(mtcars, x = wt, y = mpg, text = rownames(mtcars), mode = "text", filename="r-docs/text-mode")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/488" width="800" frameBorder="0"></iframe>

### Hover Text

```r
library(plotly)
plot_ly(mtcars, x = wt, y = mpg, text = rownames(mtcars), mode="markers", filename="r-docs/hover-text")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/490" width="800" frameBorder="0"></iframe>

### Styling Text

```r
t <- list(
    family = "sans serif",
    size = 18,
    color = toRGB("grey50")
)
plot_ly(mtcars, x = wt, y = mpg, text = rownames(mtcars), mode = "markers+text",
        textfont = t, textposition = "top middle", filename="r-docs/style-text")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/492" width="800" frameBorder="0"></iframe>

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

plot_ly(mtcars, x = wt, y = mpg, mode = "markers", filename="r-docs/annotation") %>%
  layout(annotations = a)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/494" width="800" frameBorder="0"></iframe>

### Multiple Annotations

```r
a <- list()
for (i in seq_len(nrow(mtcars))) {
  m <- mtcars[i, ]
  a[[i]] <- list(
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
}

plot_ly(filename="r-docs/multiple-annotations") %>% layout(annotations = a)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/498" width="800" frameBorder="0"></iframe>
