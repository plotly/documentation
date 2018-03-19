---
title: Polar Charts in R | Examples | Plotly
name: Polar Charts
permalink: r/polar-chart/
description: How to create Polar Charts in R with Plotly.
layout: base
thumbnail: thumbnail/polar.gif
language: r
has_thumbnail: true
page_type: example_index
display_as: scientific
order: 18
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

#### Polar Charts 1.0

Looking for the old polar chart docs? See [legacy polar charts](https://plot.ly/r/legacy-polar-chart/)

#### Basic Polar Charts


```r
library(plotly)

p <- plot_ly(
  type = 'scatterpolar',
  r = c(0,1,2,2),
  theta = c(0,45,90,0),
  mode = 'markers'
)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link <- api_create(p, filename = "polar-charts-basic")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5253.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Line Polar Charts


```r
library(plotly)

df <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/polar_dataset.csv")

p <- plot_ly(
  df,
  type = 'scatterpolar',
  mode = 'lines'
  ) %>%
  add_trace(
    r = ~x1,
    theta = ~y,
    name = 'Figure8',
    line = list(
      color = 'peru'
    )
  ) %>%
  add_trace(
    r = ~x2,
    theta = ~y,
    name = 'Cardioid',
    line = list(
      color = 'darkviolet'
    )
  ) %>%
  add_trace(
    r = ~x3,
    theta = ~y,
    name = 'Hypercardioid',
    line = list(
      color = 'deepskyblue'
    )
  ) %>%
  add_trace(
    r = ~x4,
    theta = ~y,
    name = 'Subcardioid',
    line = list(
      color = 'orangered'
    )
  ) %>%
  add_trace(
    r = ~x5,
    theta = ~y,
    name = 'Supercardioid',
    line = list(
      color = 'green'
    )
  ) %>% 
  layout(
    title = 'Mic Patterns',
    font = list(
      family = 'Arial',
      size = 12,
      color = '#000'
    ),
    showlegend = F
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link <- api_create(p, filename = "polar-charts-line")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5255.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Area Polar Charts


```r
library(plotly)

p <- plot_ly(
    type = 'scatterpolar',
    mode = 'lines'
  ) %>%
  add_trace(
    r = c(0, 1.5, 1.5, 0, 2.5, 2.5, 0),
    theta = c(0, 10, 25, 0, 205, 215, 0),
    fill = 'toself',
    fillcolor = '#709Bff',
    line = list(
      color = 'black'
    )
  ) %>%
  add_trace(
    r = c(0, 3.5, 3.5, 0),
    theta = c(0, 55, 75, 0),
    fill = 'toself',
    fillcolor = '#E4FF87',
    line = list(
      color = 'black'
    )
  ) %>%
  add_trace(
    r = c(0, 4.5, 4.5, 0, 4.5, 4.5, 0),
    theta = c(0, 100, 120, 0, 305, 320, 0),
    fill = 'toself',
    fillcolor = '#FFAA70',
    line = list(
      color = 'black'
    )
  ) %>%
  add_trace(
    r = c(0, 4, 4, 0),
    theta = c(0, 165, 195, 0),
    fill = 'toself',
    fillcolor = '#FFDF70',
    line = list(
      color = 'black'
    )
  ) %>%
  add_trace(
    r = c(0, 3, 3, 0),
    theta = c(0, 262.5, 277.5, 0),
    fill = 'toself',
    fillcolor = '#B6FFB4',
    line = list(
      color = 'black'
    )
  ) %>%
  layout(
    polar = list(
      radialaxis = list(
        visible = T,
        range = c(0,5)
      )
    ),
    showlegend = F
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link <- api_create(p, filename = "polar-charts-area")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5257.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Categorical Polar Charts


```r
library(plotly)

p <- plot_ly(
    type = 'scatterpolar',
    mode = 'lines'
  ) %>%
  add_trace(
    r = c(5, 4, 2, 4, 5),
    theta = c("a", "b", "c", "d", "a"),
    name = 'angular categories',
    fill = 'toself'
  ) %>%
  add_trace(
    r = c("a", "b", "c", "d", "b", "f", "a"),
    theta = c(1, 4, 2, 1.5, 1.5, 6, 5),
    thetaunit = 'radians',
    name = 'radial categories',
    fill = 'toself',
    subplot = 'polar2'
  ) %>%
  add_trace(
    r = c(5, 4, 2, 4, 5),
    theta = c("a", "b", "c", "d", "a"),
    name = 'angular categories (w/ categoryarray)',
    fill = 'toself',
    subplot = 'polar3'
  ) %>%
  add_trace(
    r = c("a", "b", "c", "d", "b", "f", "a", "a"),
    theta = c(45, 90, 180, 200, 300, 15, 20, 45),
    name = 'radial categories (w/ category descending)',
    fill = 'toself',
    subplot = 'polar4'
  ) %>%
  layout(
    polar = list(
      domain = list(
        x = c(0,0.46),
        y = c(0.56,1)
      ),
      radialaxis = list(
        angle = 45
      ),
      angularaxis = list(
        direction = 'clockwise',
        period = 6
      )
    ),
    polar2 = list(
      domain = list(
        x = c(0,0.46),
        y = c(0,0.44)
      ),
      radialaxis = list(
        angle = 180,
        tickangle = -180
      )
    ),
    polar3 = list(
      domain = list(
        x = c(0.54,1),
        y = c(0.56,1)
      ),
      sector = c(150,400),
      radialaxis = list(
        angle = -45
      ),
      angularaxis = list(
        categoryarray = c("d", "a", "c", "b")
      )
    ),
    polar4 = list(
      domain = list(
        x = c(0.54,1),
        y = c(0,0.44)
      ),
      radialaxis = list(
        categoryorder = "category descending"
      ),
      angularaxis = list(
        thetaunit= "radians",
        dtick = 0.3141592653589793
      )
    )
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link <- api_create(p, filename = "polar-charts-categorical")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5259.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Polar Charts Directions


```r
library(plotly)

p <- plot_ly(
    type = 'scatterpolar',
    mode = "lines+markers"
  ) %>%
  add_trace(
    r = c(1,2,3,4,5),
    theta = c(0,90,180,360,0),
    line = list(
      color = "#ff66ab"
    ),
    marker = list(
      color = "#8090c7",
      symbol = 'square',
      size = 8
    ),
    text = "sector: 135->225<br>rotation: 90<br>direction: counterclockwise"
  ) %>%
  add_trace(
    r = c(1,2,3,4,5),
    theta = c(0,90,180,360,0),
    line = list(
      color = "#ff66ab"
    ),
    marker = list(
      color = "#8090c7",
      symbol = 'square',
      size = 8
    ),
    text = "sector: 135->225<br>rotation: 90<br>direction: counterclockwise",
    subplot = 'polar2'
  ) %>%
  layout(
    polar = list(
      domain = list(
        x = c(0,0.4),
        y = c(0,1)
      ),
      radialaxis = list(
        tickfont = list(
          size = 8
        )
      ),
      angularaxis = list(
        tickfont = list(
          size = 8
        ),
        rotation = 90,
        direction = 'counterclockwise'
      )
    ),
    polar2 = list(
      domain = list(
        x = c(0.6,1),
        y = c(0,1)
      ),
      radialaxis = list(
        tickfont = list(
          size = 8
        )
      ),
      angularaxis = list(
        tickfont = list(
          size = 8
        ),
        rotation = 90,
        direction = 'clockwise'
      )
    ),
    showlegend = F
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link <- api_create(p, filename = "polar-charts-directions")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5261.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Polar Charts Sector


```r
library(plotly)

p <- plot_ly(
  type = 'scatterpolar',
  mode = "lines+markers"
) %>%
  add_trace(
    r = c(1,2,3,4,5),
    theta = c(0,90,180,360,0),
    line = list(
      color = "#ff66ab"
    ),
    marker = list(
      color = "#8090c7",
      symbol = 'square',
      size = 8
    )
  ) %>%
  add_trace(
    r = c(1,2,3,4,5),
    theta = c(0,90,180,360,0),
    line = list(
      color = "#ff66ab"
    ),
    marker = list(
      color = "#8090c7",
      symbol = 'square',
      size = 8
    ),
    subplot = 'polar2'
  ) %>%
  layout(
    polar = list(
      domain = list(
        x = c(0,0.4),
        y = c(0,1)
      ),
      sector = c(150,210),
      radialaxis = list(
        tickfont = list(
          size = 8
        )
      ),
      angularaxis = list(
        tickfont = list(
          size = 8
        )
      )
    ),
    polar2 = list(
      domain = list(
        x = c(0.6,1),
        y = c(0,1)
      ),
      radialaxis = list(
        tickfont = list(
          size = 8
        )
      ),
      angularaxis = list(
        tickfont = list(
          size = 8
        )
      )
    ),
    showlegend = F
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link <- api_create(p, filename = "polar-charts-sector")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5263.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Polar Charts Subplot


```r
library(plotly)

p <- plot_ly(
    type = 'scatterpolar',
    mode = 'lines'
) %>%
  add_trace(
    r = c(1,2,3),
    theta = c(50,100,200),
    marker = list(
      symbol = 'square'
    )
  ) %>%
  add_trace(
    r = c(1,2,3),
    theta = c(1,2,3),
    thetaunit = 'radians'
  ) %>%
  add_trace(
    r = c("a", "b", "c", "d"),
    theta = c("D","C","B","A"),
    subplot = 'polar2'
  ) %>%
  add_trace(
    r = c(50,300,900),
    theta = c(0,90,180),
    subplot = 'polar3'
  ) %>%
  add_trace(
    r = c(3,3,4,3),
    theta = c(0,45,90,270),
    fill = 'toself',
    subplot = 'polar4'
  ) %>%
  layout(
    polar = list(
      domain = list(
        x = c(0,0.46),
        y = c(0.56,1)
      ),
      radialaxis = list(
        range = c(1,4)
      ),
      angularaxis = list(
        thetaunit = 'radians'
      )
    ),
    polar2 = list(
      domain = list(
        x = c(0,0.46),
        y = c(0,0.42)
      )
    ),
    polar3 = list(
      domain = list(
        x = c(0.54,1),
        y = c(0.56,1)
      ),
      sector = c(0,180),
      radialaxis = list(
        type = 'log',
        angle = 45
      )
    ),
    polar4 = list(
      domain = list(
        x = c(0.54,1),
        y = c(0,0.44)
      ),
      radialaxis = list(
        visible = F,
        range = c(0,6)
      )
    ),
    showlegend = F
  )

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link <- api_create(p, filename = "polar-charts-subplot")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5265.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Webgl Polar Charts


```r
library(plotly)

df <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/hobbs-pearson-trials.csv")

p <- plot_ly(
    type = 'scatterpolargl',
    mode = 'markers'
  )

j = 1
k = 2
for (i in 1:(length(df)/2)){
  p <- add_trace(
    p,
    r = df[,j],
    theta = df[,k],
    name = paste('Trial ', i),
    marker = list(
      size = 15,
      line = list(
        color = '#FFF'
      ),
      opacity = 0.7
    )
  )
  j <- j + 2
  k <- k + 2
}

p <- layout(
  p,
  title = "Hobbs-Pearson Trials",
  showlegend = F,
  paper_bgcolor = "rgb(223, 223, 223)",
  polar = list(
    bgcolor = "rgb(223, 223, 223)",
    angularaxis = list(
      tickwidth = 2,
      linewidth = 3,
      layer = 'below traces'
    ),
    radialaxis = list(
      side = 'counterclockwise',
      showline = T,
      linewidth = 2,
      tickwidth = 2,
      gridcolor = '#FFF',
      gridwidth = 2
    )
  )
)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link <- api_create(p, filename = "polar-charts-scatterpolargl")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/5267.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#### Reference

See [https://plot.ly/r/reference/#polar](https://plot.ly/r/reference/#polar) for more information and options!
