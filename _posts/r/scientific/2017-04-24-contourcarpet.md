---
title: Carpet Contour Plots in R | Examples | Plotly
name: Carpet Contour Plot
permalink: r/carpet-contour/
description: How to create Carpet Contour Plots in R with Plotly.
layout: base
thumbnail: thumbnail/contourcarpet.jpg
language: r
has_thumbnail: true
display_as: scientific
order: 17
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
## [1] '4.6.0.9000'
```


### Basic Carpet Plot

Set the `x` and `y` coorindates, using `x` and `y` attributes. If `x` coorindate values are ommitted a cheater plot will be created. To save parameter values use `a` and `b` attributes. To make changes to the axes, use `aaxis` or `baxis` attributes. For a more detailed list of axes attributes refer to [R reference](https://plot.ly/r/reference/#contourcarpet-aaxis).


```r
library(plotly)

p <- plot_ly() %>%
  add_trace(
    type = 'carpet',
    a = c(0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3),
    b = c(4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6),
    x = c(2, 3, 4, 5, 2.2, 3.1, 4.1, 5.1, 1.5, 2.5, 3.5, 4.5),
    y = c(1, 1.4, 1.6, 1.75, 2, 2.5, 2.7, 2.75, 3, 3.5, 3.7, 3.75),
    xaxis = "x",
    yaxis = "y",
    carpet = "c",
    aaxis = list(
      tickprefix = "a = ",
      smoothing = 0,
      minorgridcount = 9,
      type = 'linear'
    ),
    baxis = list(
      tickprefix = "b = ",
      smoothing = 0,
      minorgridcount = 9,
      type = 'linear'
    )
  ) %>%
  layout(
    margin = list(
      t = 40, r = 30, b = 30, l = 30
    ),
    yaxis = list(
      range = c(0.388,4.361)
    ),
    xaxis = list(
      range = c(0.667,5.932)
    )
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="contourcarpet-basic", sharing = 'public')
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4563.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Add Contours


```r
library(plotly)

p <- plot_ly(width = 600, height = 600) %>%
  add_trace(
    type = 'contourcarpet',
    a = c(0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3),
    b = c(4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6),
    z = c(1, 1.96, 2.56, 3.0625, 4, 5.0625, 1, 7.5625, 9, 12.25, 15.21, 14.0625),
    xaxis = "x",
    yaxis = "y",
    carpet = "c",
    autocontour = F,
    contours = list(
      start = 1,
      end = 14,
      size = 1
    ),
    line = list(
      width = 2,
      smoothing = 0
    ),
    colorbar = list(
      len = 0.4,
      y = 0.25
    )
  ) %>%
  add_trace(
    type = 'carpet',
    a = c(0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3),
    b = c(4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6),
    x = c(2, 3, 4, 5, 2.2, 3.1, 4.1, 5.1, 1.5, 2.5, 3.5, 4.5),
    y = c(1, 1.4, 1.6, 1.75, 2, 2.5, 2.7, 2.75, 3, 3.5, 3.7, 3.75),
    xaxis = "x",
    yaxis = "y",
    carpet = "c",
    aaxis = list(
      tickprefix = "a = ",
      smoothing = 0,
      minorgridcount = 9,
      type = 'linear'
    ),
    baxis = list(
      tickprefix = "b = ",
      smoothing = 0,
      minorgridcount = 9,
      type = 'linear'
    )
  ) %>%
  layout(
    margin = list(
      t = 40, r = 30, b = 30, l = 30
    ),
    yaxis = list(
      range = c(0.388,4.361)
    ),
    xaxis = list(
      range = c(0.667,5.932)
    )
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="contourcarpet-add-contours", sharing = 'public')
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4565.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Add Multiple Traces


```r
library(plotly)
library(rjson)

data <- fromJSON(file="https://raw.githubusercontent.com/bcdunbar/datasets/master/airfoil_data.json")

p <- plot_ly() %>%
  add_trace(
    type = "carpet",
    a = list(
      1.083, 1.214, 1.344, 1.475, 1.605, 1.736, 1.866, 1.997, 2.128, 2.258, 2.389, 2.519, 2.650, 2.780, 2.911, 3.041, 3.172, 3.303, 3.433, 3.564, 3.694, 3.825, 3.955, 4.086, 4.217, 4.347, 4.478, 4.608, 4.739, 4.869, 5.000
    ),
    b = list(
      0.000, 0.090, 0.180, 0.269, 0.359, 0.449, 0.539, 0.628, 0.718, 0.808, 0.898, 0.987, 1.077, 1.167, 1.257, 1.346, 1.436, 1.526, 1.616, 1.705, 1.795, 1.885, 1.975, 2.064, 2.154, 2.244, 2.334, 2.424, 2.513, 2.603, 2.693,
      2.783, 2.872, 2.962, 3.052, 3.142, 3.231, 3.321, 3.411, 3.501, 3.590, 3.680, 3.770, 3.860, 3.949, 4.039, 4.129, 4.219, 4.308, 4.398, 4.488, 4.578, 4.668, 4.757, 4.847, 4.937, 5.027, 5.116, 5.206, 5.296, 5.386, 5.475,
      5.565, 5.655, 5.745, 5.834, 5.924, 6.014, 6.104, 6.193, 6.283
    ),
    x = data[[1]]$x,
    y = data[[1]]$y,
    aaxis = list(
      startlinewidth = 2,
      startline = TRUE,
      showticklabels = "none",
      endline = TRUE,
      showgrid = FALSE,
      endlinewidth = 2,
      smoothing = 0
    ),
    baxis = list(
      startline = FALSE,
      endline = FALSE,
      showticklabels = "none",
      smoothing = 0,
      showgrid = FALSE
    )
  ) %>%
  add_trace(
      type = 'contourcarpet',
      z = data[[2]]$z,
      autocolorscale = FALSE,
      zmax = 1,
      name = "Pressure",
      colorscale = "Viridis",
      zmin = -8,
      colorbar = list(
        y = 0,
        yanchor = "bottom",
        titleside = "right",
        len = 0.75,
        title = "Pressure coefficient, c<sub>p</sub>"
      ),
      contours = list(
        start = -1,
        size = 0.025,
        end = 1.000,
        showlines = FALSE
      ),
      line = list(
        smoothing = 0
      ),
      autocontour = FALSE,
      zauto = FALSE
    ) %>%
  add_trace(
      type = 'contourcarpet',
      z = data[[3]]$z,
      opacity = 0.300,
      showlegend = TRUE,
      name = "Streamlines",
      autocontour = TRUE,
      ncontours = 50,
      contours = list(
        coloring = "none"
      ),
      line = list(
        color = "white",
        width = 1
      )
    ) %>%
  add_trace(
      type = 'contourcarpet',
      z = data[[4]]$z,
      showlegend = TRUE,
      name = "Pressure<br>contours",
      autocontour = FALSE,
      line = list(
        color = "rgba(0, 0, 0, 0.5)",
        smoothing = 1
      ),
      contours = list(
        size = 0.250,
        start = -4,
        coloring = "none",
        end = 1.000,
        showlines = TRUE
      )
    ) %>%
  add_trace(
      type = 'scatter',
      x = data[[5]]$x,
      y = data[[5]]$y,
      legendgroup = "g1",
      name = "Surface<br>pressure",
      mode = "lines",
      hoverinfo = "skip",
      line = list(
        color = "rgba(255, 0, 0, 0.5)",
        width = 1,
        shape = "spline",
        smoothing = 1
      ),
      fill = "toself",
      fillcolor = "rgba(255, 0, 0, 0.2)"
    ) %>%
  add_trace(
      type = 'scatter',
      x = data[[6]]$x,
      y = data[[6]]$y,
      showlegend = FALSE,
      legendgroup = "g1",
      mode = "lines",
      hoverinfo = "skip",
      line = list(
        color = "rgba(255, 0, 0, 0.3)",
        width = 1
      )
    ) %>%
  add_trace(
      type = 'scatter',
      x = data[[7]]$x,
      y = data[[7]]$y,
      showlegend = FALSE,
      legendgroup = "g1",
      name = "cp",
      mode = "lines",
      line = list(
        color = "rgba(255, 0, 0, 0.2)",
        width = 0
      )
    ) %>%
  layout(
      xaxis = list(
        zeroline = FALSE,
        scaleratio = 1,
        scaleanchor = 'y',
        range = c(-3.800,3.800),
        showgrid = FALSE
      ),
      yaxis = list(
        zeroline = FALSE,
        range = c(-1.800,1.800),
        showgrid = FALSE
      ),
      title = "Flow over a Karman-Trefftz airfoil",
      hovermode = "closest",
      margin = list(
        r = 60,
        b = 40,
        l = 40,
        t = 80
      )
    )


# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="contourcarpet-airfoil", sharing = 'public')
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4567.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

### Reference

See [https://plot.ly/r/reference/#contourcarpet](https://plot.ly/r/reference/#contourcarpet) for more information and options!
