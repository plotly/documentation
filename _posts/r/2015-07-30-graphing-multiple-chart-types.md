---
title: Layering Graphical Elements in R | Examples | Plotly
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

### Scatterplot with loess smoother


```r
library(plotly)
p <- plot_ly(mtcars, x = ~disp, color = I("black")) %>%
  add_markers(y = ~mpg, text = rownames(mtcars), showlegend = F) %>%
  add_lines(y = ~fitted(loess(mpg ~ disp)), color = I("red"),
            name = "loess smoother", showlegend = T)
p
```

![plot of chunk unnamed-chunk-2](figure/unnamed-chunk-2-1.png)


  
### Loess smoother with uncertainty bounds


```r
m <- loess(mpg ~ disp, data = mtcars)

p %>%
  add_ribbons(
    data = broom::augment(m),
    ymin = ~.fitted - 1.96 * .se.fit, 
    ymax = ~.fitted + 1.96 * .se.fit, 
    color = I("red"), name = "standard error"
  )
```

![plot of chunk unnamed-chunk-4](figure/unnamed-chunk-4-1.png)



### Plotting forecast objects


```r
library(forecast)
fit <- ets(USAccDeaths)
fore <- forecast(fit, h = 48, level = c(80, 95))

plot_ly() %>%
  add_lines(x = time(USAccDeaths), y = USAccDeaths, 
            color = I("black"), name = "observed") %>%
  add_ribbons(x = time(fore$mean), ymin = fore$lower[, 2], ymax = fore$upper[, 2],
              color = I("gray95"), name = "95% confidence") %>%
  add_ribbons(x = time(fore$mean), ymin = fore$lower[, 1], ymax = fore$upper[, 1],
              color = I("gray80"), name = "80% confidence") %>%
  add_lines(x = time(fore$mean), y = fore$mean, color = I("blue"), name = "prediction")
```

![plot of chunk unnamed-chunk-6](figure/unnamed-chunk-6-1.png)


