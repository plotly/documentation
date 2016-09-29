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

plot_ly(mtcars, x = ~wt, y = ~mpg) %>%
  add_markers() %>%
  layout(annotations = a)
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
