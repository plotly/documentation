---
title: Parallel Coordinates Plot in R | Examples | Plotly
name: Parallel Coordinates Plot
permalink: r/parallel-coordinates-plot/
description: How to create parallel coordinates plots in R with Plotly.
layout: base
thumbnail: thumbnail/parcoords.jpg
language: r
has_thumbnail: true
display_as: scientific
order: 14
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
## [1] '4.5.6.9000'
```

### Adding Dimensions


```r
library(plotly)

p <- plot_ly(type = 'parcoords', line = list(color = 'blue'),
             dimensions = list(
               list(range = c(1,5),
                    constraintrange = c(1,2),
                    label = 'A', values = c(1,4)),
               list(range = c(1,5),
                    tickvals = c(1.5,3,4.5),
                    label = 'B', values = c(3,1.5)),
               list(range = c(1,5),
                    tickvals = c(1,2,4,5),
                    label = 'C', values = c(2,4),
                    ticktext = c('text 1', 'text 2', 'text 3', 'text 4')),
               list(range = c(1,5),
                    label = 'D', values = c(4,2))
               )
             )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="parcoords-dimensions")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4367.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>


Parallel coordinates are richly interactive by default. Drag the lines along the axes to filter regions and drag the axis names across the plot to rearrange variables:

![](https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/images/python_parcoords_ex1.gif)

### Basic Parallel Cordinates Plot


```r
library(plotly)

df <- read.csv("https://raw.githubusercontent.com/bcdunbar/datasets/master/iris.csv")

p <- df %>%
  plot_ly(type = 'parcoords',
          line = list(color = ~species_id,
                      colorscale = list(c(0,'red'),c(0.5,'green'),c(1,'blue'))),
          dimensions = list(
            list(range = c(2,4.5),
                 label = 'Sepal Width', values = ~sepal_width),
            list(range = c(4,8),
                 constraintrange = c(5,6),
                 label = 'Sepal Length', values = ~sepal_length),
            list(range = c(0,2.5),
                 label = 'Petal Width', values = ~petal_width),
            list(range = c(1,7),
                 label = 'Petal Length', values = ~petal_length)
            )
          )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="parcoords-basic")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4368.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Advanced Parallel Coordinates Plot


```r
library(plotly)

df <- read.csv("https://raw.githubusercontent.com/bcdunbar/datasets/master/parcoords_data.csv")

p <- df %>%
  plot_ly(width = 1000, height = 600) %>%
  add_trace(type = 'parcoords',
          line = list(color = ~colorVal,
                      colorscale = 'Jet',
                      showscale = TRUE,
                      reversescale = TRUE,
                      cmin = -4000,
                      cmax = -100),
          dimensions = list(
            list(range = c(~min(blockHeight),~max(blockHeight)),
                 constraintrange = c(100000,150000),
                 label = 'Block Height', values = ~blockHeight),
            list(range = c(~min(blockWidth),~max(blockWidth)),
                 label = 'Block Width', values = ~blockWidth),
            list(tickvals = c(0,0.5,1,2,3),
                 ticktext = c('A','AB','B','Y','Z'),
                 label = 'Cyclinder Material', values = ~cycMaterial),
            list(range = c(-1,4),
                 tickvals = c(0,1,2,3),
                 label = 'Block Material', values = ~blockMaterial),
            list(range = c(~min(totalWeight),~max(totalWeight)),
                 visible = TRUE,
                 label = 'Total Weight', values = ~totalWeight),
            list(range = c(~min(assemblyPW),~max(assemblyPW)),
                 label = 'Assembly Penalty Weight', values = ~assemblyPW),
            list(range = c(~min(HstW),~max(HstW)),
                 label = 'Height st Width', values = ~HstW),
            list(range = c(~min(minHW),~max(minHW)),
                 label = 'Min Height Width', values = ~minHW),
            list(range = c(~min(minWD),~max(minWD)),
                 label = 'Min Width Diameter', values = ~minWD),
            list(range = c(~min(rfBlock),~max(rfBlock)),
                 label = 'RF Block', values = ~rfBlock)
            )
          )


# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="parcoords-advanced")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4370.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#Reference

See [https://plot.ly/r/reference/#parcoords](https://plot.ly/r/reference/#parcoords) for more information and options!
