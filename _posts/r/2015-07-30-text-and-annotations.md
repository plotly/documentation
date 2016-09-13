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
---



# Adding Text and Annotations in R

### Text Mode


```r
library(plotly)
plot_ly(mtcars, x = ~wt, y = ~mpg, text = rownames(mtcars)) %>%
  add_text()
```

![plot of chunk unnamed-chunk-2](figure/unnamed-chunk-2-1.png)



### Hover Text


```r
plot_ly(mtcars, x = ~wt, y = ~mpg, text = rownames(mtcars)) %>%
  add_markers()
```

![plot of chunk unnamed-chunk-4](figure/unnamed-chunk-4-1.png)



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

![plot of chunk unnamed-chunk-6](figure/unnamed-chunk-6-1.png)



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

![plot of chunk unnamed-chunk-8](figure/unnamed-chunk-8-1.png)



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

![plot of chunk unnamed-chunk-10](figure/unnamed-chunk-10-1.png)



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

![plot of chunk unnamed-chunk-12](figure/unnamed-chunk-12-1.png)


