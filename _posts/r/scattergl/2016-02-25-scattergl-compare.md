---
title: WebGL vs SVG| Examples | Plotly
name: WebGL vs SVG in R
permalink: r/webgl-vs-svg/
description: How to create plots using WebGL
layout: user-guide
language: r
page_type: example_index
has_thumbnail: true
display_as: get_request
output: 
  html_document: 
    highlight: null
    keep_md: yes
    theme: null
---



# Compare WebGL and SVG in R

### WebGL


```r
library(plotly)
p <- ggplot(data = diamonds, aes(x = carat, y = price, color = cut)) +
  geom_point(alpha = 0.01)
ggplotly(p) %>% toWebGL()
```



### SVG 

> The draw time for this plot will be slow for all clients.


```r
library(plotly)
library(plotly)
p <- ggplot(data = diamonds, aes(x = carat, y = price, color = cut)) +
  geom_point(alpha = 0.01)
ggplotly(p)
```


