---
title: Layering Graphical Elements in R | Examples | Plotly
name: Graphing Multiple Chart Types
permalink: r/graphing-multiple-chart-types/
description: How to design figures with multiple chart types in R. An example of a line chart with a line of best fit and an uncertainty band.
layout: base
thumbnail: thumbnail/mixed.jpg
language: r
has_thumbnail: true
display_as: basic
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
## [1] '4.5.6.9000'
```

### Bar and Line Chart


```r
library(plotly)

airquality_sept <- airquality[which(airquality$Month == 9),]
airquality_sept$Date <- as.Date(paste(airquality_sept$Month, airquality_sept$Day, 1973, sep = "."), format = "%m.%d.%Y")

p <- plot_ly(airquality_sept) %>%
  add_trace(x = ~Date, y = ~Wind, type = 'bar', name = 'Wind',
            marker = list(color = '#C9EFF9'),
            hoverinfo = "text",
            text = ~paste(Wind, ' mph')) %>%
  add_trace(x = ~Date, y = ~Temp, type = 'scatter', mode = 'lines', name = 'Temperature', yaxis = 'y2',
            line = list(color = '#45171D'),
            hoverinfo = "text",
            text = ~paste(Temp, '°F')) %>%
  layout(title = 'New York Wind and Temperature Measurements for September 1973',
         xaxis = list(title = ""),
         yaxis = list(side = 'left', title = 'Wind in mph', showgrid = FALSE, zeroline = FALSE),
         yaxis2 = list(side = 'right', overlaying = "y", title = 'Temperature in degrees F', showgrid = FALSE, zeroline = FALSE))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="multiple-bar_line")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3789.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Scatterplot with Loess Smoother


```r
library(plotly)

p <- plot_ly(mtcars, x = ~disp, color = I("black")) %>%
  add_markers(y = ~mpg, text = rownames(mtcars), showlegend = FALSE) %>%
  add_lines(y = ~fitted(loess(mpg ~ disp)),
            line = list(color = '#07A4B5'),
            name = "Loess Smoother", showlegend = TRUE) %>%
  layout(xaxis = list(title = 'Displacement (cu.in.)'),
         yaxis = list(title = 'Miles/(US) gallon'),
         legend = list(x = 0.80, y = 0.90))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="multiple-loess")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3235.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Loess Smoother with Uncertainty Bounds


```r
library(plotly)
library(broom)

m <- loess(mpg ~ disp, data = mtcars)

p <- plot_ly(mtcars, x = ~disp, color = I("black")) %>%
  add_markers(y = ~mpg, text = rownames(mtcars), showlegend = FALSE) %>%
  add_lines(y = ~fitted(loess(mpg ~ disp)),
            line = list(color = 'rgba(7, 164, 181, 1)'),
            name = "Loess Smoother") %>%
  add_ribbons(data = augment(m),
              ymin = ~.fitted - 1.96 * .se.fit,
              ymax = ~.fitted + 1.96 * .se.fit,
              line = list(color = 'rgba(7, 164, 181, 0.05)'),
              fillcolor = 'rgba(7, 164, 181, 0.2)',
              name = "Standard Error") %>%
  layout(xaxis = list(title = 'Displacement (cu.in.)'),
         yaxis = list(title = 'Miles/(US) gallon'),
         legend = list(x = 0.80, y = 0.90))

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="multiple-loess-se")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3237.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Plotting Forecast Objects


```r
library(plotly)
library(forecast)

fit <- ets(USAccDeaths)
fore <- forecast(fit, h = 48, level = c(80, 95))

p <- plot_ly() %>%
  add_lines(x = time(USAccDeaths), y = USAccDeaths,
            color = I("black"), name = "observed") %>%
  add_ribbons(x = time(fore$mean), ymin = fore$lower[, 2], ymax = fore$upper[, 2],
              color = I("gray95"), name = "95% confidence") %>%
  add_ribbons(x = time(fore$mean), ymin = fore$lower[, 1], ymax = fore$upper[, 1],
              color = I("gray80"), name = "80% confidence") %>%
  add_lines(x = time(fore$mean), y = fore$mean, color = I("blue"), name = "prediction")

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="multiple-forecast")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/3239.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#Reference

See [https://plot.ly/r/reference/](https://plot.ly/r/reference/) for more information and chart attribute options!
