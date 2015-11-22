---
title: Graphing Multiple Chart Types in R | Examples | Plotly
name: Graphing Multiple Chart Types
permalink: r/graphing-multiple-chart-types/
description: How to design figures with multiple chart types in R. An example of a line chart with a line of best fit and an uncertainty band.
layout: base
thumbnail: thumbnail/mixed.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: chart_type
order: 9
---


# Graphing Multiple Chart Types in R


```r
### Scatterplot with loess smoother

library(plotly)
mtcars <- mtcars[order(mtcars$disp), ]
p <- plot_ly(mtcars, x = disp, y = mpg, mode = "markers",
             text = rownames(mtcars), showlegend = FALSE)
add_trace(p, y = fitted(loess(mpg ~ disp)), mode = "lines",
          name = "loess smoother", showlegend = TRUE)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/223.embed" width="800" frameBorder="0"></iframe>

```r
### Scatterplot with loess smoother and it's uncertaincy estimates
m <- loess(mpg ~ disp, data = mtcars)
f <- with(predict(m, se = TRUE), data.frame(fit, se.fit))

l <- list(
  color = toRGB("gray90", alpha = 0.3),
  fillcolor = toRGB("gray90", alpha = 0.3)
)

p %>%
  add_trace(p, data = f, y = fit, mode = "lines") %>%
  add_trace(p, data = f, y = fit + 1.96 * se.fit, mode = "lines",
            fill = "tonexty", line = l) %>%
  add_trace(p, data = f, y = fit - 1.96 * se.fit, mode = "lines",
            fill = "tonexty", line = l)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/225.embed" width="800" frameBorder="0"></iframe>
