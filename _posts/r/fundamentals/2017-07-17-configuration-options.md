---
title: Configuration Options | Examples | Plotly
name: Configuration Options
permalink: r/configuration-options/
description: How to set configuration options of plotly graphs in python. Examples of both online and offline configurations.
layout: base
language: r
has_thumbnail: true
thumbnail: thumbnail/modebar-icons.png
display_as: fundamentals
order: 7
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
## [1] '4.7.0.9000'
```

#### Online Configuration Options 

Config options set via our API libraries are overridden on graphs hosted on plot.ly (i.e. when working online). To set configutation options online, you can edit the plot's embed url. Visit our embed tutorial: [click here](http://help.plot.ly/embed-graphs-in-websites/#step-8-customize-the-iframe) for more information on customizing the embed url to remove the "Edit Chart" link, hide the modebar, or autosize the plot.

#### Offline Configuration Options 

Add the 'Edit Chart' link:

```r
library(plotly)
p <- plot_ly(data = iris, x = ~Sepal.Length, y = ~Petal.Length)

htmlwidgets::saveWidget(config(p, showLink = T), "graph.html")
```

Remove the 'collaborate mode bar button':

```r
htmlwidgets::saveWidget(config(p, collaborate = FALSE), "graph.html")
```

Remove the 'mode bar':

```r
htmlwidgets::saveWidget(config(p, displayModeBar = FALSE), "graph.html")
```

#### Reference
Arguments are documented [here](https://github.com/plotly/plotly.js/blob/master/src/plot_api/plot_config.js).

```r
?config
```
