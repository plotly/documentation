---
name: Configuration Options For Embedded Chart Studio Graphs 
permalink: r/configuration-options/
description: How to set configuration options of embedded Chart Studio graphs in R. Examples of both online and offline configurations.
layout: base
language: r
thumbnail: thumbnail/modebar-icons.png
display_as: chart_studio
order: 7
output:
  html_document:
    keep_md: true
---


#### Online Configuration Options 

Configuration options for graphs created with the `plotly` R package are overridden when those graphs are published to Chart Studio using the `api_create()` function. 

To set configutation options for charts published to Chart STudio, you can edit the plot's embed url. 

Visit our [embed tutorial](http://help.plot.ly/embed-graphs-in-websites/#step-8-customize-the-iframe) for more information on customizing the embed URL to remove the "Edit Chart" link, hide the modebar, or autosize the plot.

#### Offline Configuration Options 

Add the 'Edit Chart' link:

```r
library(plotly)
p <- plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length)

htmlwidgets::saveWidget(config(p, showLink = T), "graph.html")
```

Remove the 'mode bar':

```r
htmlwidgets::saveWidget(config(p, displayModeBar = FALSE), "graph.html")
```

#### Reference
Arguments are documented [here](https://github.com/plotly/plotly.js/blob/master/src/plot_api/plot_config.js).
