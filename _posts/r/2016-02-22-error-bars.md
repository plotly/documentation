---
title: Error Bars in R | Examples | Plotly
name: Error Bars
permalink: r/error-bars/
description: How to add error bars to scatter plots in R.
layout: base
thumbnail: thumbnail/error-bar.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: chart_type
order: 11
---


# Error Bars


```r
library(dplyr)
library(plotly)

p <- ggplot2::mpg %>% group_by(class) %>%
  summarise(mn = mean(hwy), sd = 1.96 * sd(hwy)) %>%
  arrange(desc(mn)) %>%
  plot_ly(x = class, y = mn, error_y = list(array = sd),
          mode = "markers", name = "Highway") %>%
  layout(yaxis = list(title = "Miles Per Gallon"))
p
```

<!--html_preserve--><div id="htmlwidget-4568" style="width:504px;height:504px;" class="plotly"></div>
<script type="application/json" data-for="htmlwidget-4568">{"x":{"data":[{"type":"scatter","inherit":false,"x":["compact","subcompact","midsize","2seater","minivan","suv","pickup"],"y":[28.2978723404255,28.1428571428571,27.2926829268293,24.8,22.3636363636364,18.1290322580645,16.8787878787879],"error_y":{"array":[7.41197461022174,10.5350239397813,4.18642195442454,2.55552734283944,4.04280370759969,5.83682722794172,4.45758835463684]},"mode":"markers","name":"Highway"}],"layout":{"yaxis":{"title":"Miles Per Gallon"},"xaxis":{"title":"class"},"hovermode":"closest","margin":{"b":40,"l":60,"t":25,"r":10}},"url":null,"width":null,"height":null,"base_url":"https://plot.ly"},"evals":[]}</script><!--/html_preserve-->

```r
df2 <- mpg %>% group_by(class) %>%
  summarise(mn = mean(cty))

p2 <- add_trace(p, y = mn, error_y = list(value=10),
          name = "City", data = df2)
#by default the `type` for error is `percent`, which takes
#a percentage of the y value as the error bar.
p2
```

<!--html_preserve--><div id="htmlwidget-9470" style="width:504px;height:504px;" class="plotly"></div>
<script type="application/json" data-for="htmlwidget-9470">{"x":{"data":[{"type":"scatter","inherit":false,"x":["compact","subcompact","midsize","2seater","minivan","suv","pickup"],"y":[28.2978723404255,28.1428571428571,27.2926829268293,24.8,22.3636363636364,18.1290322580645,16.8787878787879],"error_y":{"array":[7.41197461022174,10.5350239397813,4.18642195442454,2.55552734283944,4.04280370759969,5.83682722794172,4.45758835463684]},"mode":"markers","name":"Highway"},{"y":[15.4,20.1276595744681,18.7560975609756,15.8181818181818,13,20.3714285714286,13.5],"error_y":{"value":10},"name":"City"}],"layout":{"yaxis":{"title":"Miles Per Gallon"},"xaxis":{"title":"class"},"hovermode":"closest","margin":{"b":40,"l":60,"t":25,"r":10}},"url":null,"width":null,"height":null,"base_url":"https://plot.ly"},"evals":[]}</script><!--/html_preserve-->
