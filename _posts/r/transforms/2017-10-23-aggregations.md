---
title: Aggregations in R | Examples | Plotly
name: Aggregations
permalink: r/aggregations/
description: How to use aggregates in R with Plotly.
layout: base
thumbnail: thumbnail/aggregations.jpg
language: r
has_thumbnail: true
display_as: transforms
page_type: example_index
order: 3
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
## [1] '4.7.1.9000'
```

#### Introduction

Aggregates are a type of transform that can be applied to values in a given expression. Available aggregations are:

Function | Description
------------- | -------------
`count` | Returns the quantity of items for each group.
`sum` | Returns the summation of all numeric values.
`avg` | Returns the average of all numeric values.
`median` | Returns the median of all numeric values.
`mode` | Returns the mode of all numeric values.
`rms` | Returns the rms of all numeric values.
`stddev` | Returns the standard deviation of all numeric values.
`min` | Returns the minimum numeric value for each group.
`max` | Returns the maximum numeric value for each group.
`first` | Returns the first numeric value for each group.
`last` | Returns the last numeric value for each group.

#### Basic Example


```r
library(plotly)

p <- plot_ly(
  type = 'scatter',
  x = diamonds$cut,
  y = diamonds$price,
  mode = 'markers',
  transforms = list(
    list(
      type = 'aggregate',
      groups = diamonds$cut,
      aggregations = list(
        list(
          target = 'y', func = 'sum', enabled = T
        )
      )
    )
  )
)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link <- api_create(p, filename = "aggregations-basic")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5202.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Aggregate Functions


```r
library(plotly)

s <- schema()
agg <- s$transforms$aggregate$attributes$aggregations$items$aggregation$func$values


l = list()
for (i in 1:length(agg)) {
  ll = list(method = "restyle",
            args = list('transforms[0].aggregations[0].func', agg[i]),
            label = agg[i]) 
  l[[i]] = ll
}

p <- plot_ly(
  type = 'scatter',
  x = diamonds$cut,
  y = diamonds$price,
  mode = 'markers',
  marker = list(
    size = 10,
    color = 'blue',
    opacity = 0.8
  ),
  transforms = list(
    list(
      type = 'aggregate',
      groups = diamonds$cut,
      aggregations = list(
        list(
          target = 'y', func = 'avg', enabled = T
        )
      )
    )
  )
) %>%
  layout(
    title = '<b>Plotly Aggregations</b><br>use dropdown to change aggregation',
    xaxis = list(title = 'Cut'),
    yaxis = list(title = 'Price ($)'),
    updatemenus = list(
      list(
        x = 0.25,
        y = 1.04,
        xref = 'paper',
        yref = 'paper',
        yanchor = 'top',
        buttons = l
      )
    )
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link <- api_create(p, filename = "aggregations-functions")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5196.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>


#### Histogram Binning


```r
library(plotly)

df <- read.csv("https://plot.ly/~public.health/17.csv")

labels <- function(size, label) {
  list(
    args = c("xbins.size", size), 
    label = label, 
    method = "restyle"
  )
}

p <- df %>%
  plot_ly(
    x = ~date,
    autobinx = FALSE, 
    autobiny = TRUE, 
    marker = list(color = "rgb(68, 68, 68)"), 
    name = "date", 
    type = "histogram", 
    xbins = list(
      end = "2016-12-31 12:00", 
      size = "M1", 
      start = "1983-12-31 12:00"
    )
  ) %>%
    layout(
    paper_bgcolor = "rgb(240, 240, 240)", 
    plot_bgcolor = "rgb(240, 240, 240)", 
    title = "<b>Shooting Incidents</b><br>use dropdown to change bin size",
    xaxis = list(
      type = 'date'
    ),
    yaxis = list(
      title = "Incidents"
    ),
    updatemenus = list(
      list(
        x = 0.1, 
        y = 1.15,
        active = 1, 
        showactive = TRUE,
        buttons = list(
          labels("D1", "Day"),
          labels("M1", "Month"),
          labels("M6", "Half Year"),
          labels("M12", "Year")
        )
      )
    )
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link <- api_create(p, filename = "aggregations-binning")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5198.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Mapping with Aggregations


```r
library(plotly)

df <- read.csv("https://raw.githubusercontent.com/bcdunbar/datasets/master/worldhappiness.csv")

s <- schema()
agg <- s$transforms$aggregate$attributes$aggregations$items$aggregation$func$values


l = list()
for (i in 1:length(agg)) {
  ll = list(method = "restyle",
            args = list('transforms[0].aggregations[0].func', agg[i]),
            label = agg[i]) 
  l[[i]] = ll
}

p <- df %>%
  plot_ly(
    type = 'choropleth',
    locationmode = 'country names',
    locations = ~Country,
    z = ~HappinessScore,
    autocolorscale = F,
    reversescale = T,
    colorscale = 'Portland', 
    transforms = list(list(
      type = 'aggregate',
      groups = ~Country,
      aggregations = list(
        list(target = 'z', func = 'sum', enabled = T)
      )
    ))
  ) %>%
  layout(
    title = "<b>World Happiness</b>",
    geo = list(
      showframe = F,
      showcoastlines = F
    ),
    updatemenus = list(
      list(
        x = 0.25,
        y = 1.04,
        xref = 'paper',
        yref = 'paper',
        yanchor = 'top',
        buttons = l
      )
    )
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link <- api_create(p, filename = "aggregations-map")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5200.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Reference

See [https://plot.ly/r/reference/](https://plot.ly/r/reference/) for more information and options!
