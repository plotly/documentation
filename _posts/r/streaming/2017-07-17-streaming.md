---
title: Streaming | Examples | Plotly
name: Streaming
permalink: r/streaming/
description: Getting Started with Streaming in R
layout: base
thumbnail: thumbnail/streaming-thumb-square.gif
language: r
page_type: example_index
has_thumbnail: true
display_as: streaming
order: 1
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

### Streaming in R

The `plotlyProxy` and `plotlyProxyInvoke` functions allow a plotly object to be modified by invoking any of the [PlotlyJS methods](https://plot.ly/javascript/plotlyjs-function-reference). In particular, the `extendTraces` function allows you to add data to traces in an exisiting plotly object. See below application for code.

<iframe src="https://plotly.shinyapps.io/streaming/" width="100%" height=1900 scrolling="no" seamless="seamless" style="border: none"></iframe> 

### Basic Example


```r
library(shiny)
library(plotly)

rand <- function() {
  runif(1, min=1, max=9)
}

ui <- fluidPage(
  includeCSS("styles.css"),

  headerPanel(h1("Streaming in Plotly", align = "center")),
  br(),
  div(actionButton("button", "Extend Trace"), align = "center"),
  br(),
  div(plotlyOutput("plot"), id='graph')
)

server <- function(input, output, session) {

    p <- plot_ly(
        y = c(rand(),rand(),rand()),
        type = 'scatter',
        mode = 'lines',
        line = list(
          color = '#25FEFD',
          width = 3
        )
      ) %>%
      layout(
        yaxis = list(range = c(0,10))
      )

    output$plot <- renderPlotly(p)

    observeEvent(input$button, {
      while(TRUE){
        Sys.sleep(1)
        plotlyProxy("plot", session) %>%
          plotlyProxyInvoke("extendTraces", list(y=list(list(rand()))), list(0))
      }
    })
}

shinyApp(ui, server)
```

### Multiple Traces


```r
library(shiny)
library(plotly)

rand <- function() {
  runif(1, min=1, max=9)
}

ui <- fluidPage(
  includeCSS("styles.css"),

  headerPanel(h1("Streaming in Plotly: Multiple Traces", align = "center")),
  br(),
  div(actionButton("button", "Extend Traces"), align = "center"),
  br(),
  div(plotlyOutput("plot"), id='graph')
)

server <- function(input, output, session) {

  p <- plot_ly(
      type = 'scatter',
      mode = 'lines'
    ) %>%
    add_trace(
      y = c(rand(),rand(),rand()),
      line = list(
        color = '#25FEFD',
        width = 3
      )
    ) %>%
    add_trace(
      y = c(rand(),rand(),rand()),
      line = list(
        color = '#636EFA',
        width = 3
      )
    ) %>%
    layout(
      yaxis = list(range = c(0,10))
    )

  output$plot <- renderPlotly(p)

  observeEvent(input$button, {
    while(TRUE){
      Sys.sleep(1)
      plotlyProxy("plot", session) %>%
        plotlyProxyInvoke("extendTraces", list(y=list(list(rand()), list(rand()))), list(1,2))
    }
  })

}

shinyApp(ui, server)
```

### Timestamp


```r
library(shiny)
library(plotly)

rand <- function() {
  runif(1, min=1, max=9)
}

t <- format(Sys.time(), "%H:%M:%S")

ui <- fluidPage(
  includeCSS("styles.css"),

  headerPanel(h1("Streaming in Plotly: Timestamp", align = "center")),
  br(),
  div(actionButton("button", "Extend Trace"), align = "center"),
  br(),
  div(plotlyOutput("plot"), id='graph')
)

server <- function(input, output, session) {

  p <- plot_ly(
    x = t,
    y = rand(),
    type = 'scatter',
    mode = 'lines',
    line = list(
      color = '#25FEFD',
      width = 3
    )
  ) %>%
    layout(
      yaxis = list(range = c(0,10))
    )

  output$plot <- renderPlotly(p)

  observeEvent(input$button, {
    while(TRUE){
      Sys.sleep(1)
      t <- format(Sys.time(), "%H:%M:%S")
      plotlyProxy("plot", session) %>%
        plotlyProxyInvoke("extendTraces", list(x=list(list(t)), y=list(list(rand()))), list(0))
    }
  })

}

shinyApp(ui, server)
```

### Subplots


```r
library(shiny)
library(plotly)

rand <- function() {
  runif(1, min=1, max=9)
}

ui <- fluidPage(
  includeCSS("styles.css"),

  headerPanel(h1("Streaming in Plotly: Subplots", align = "center")),
  br(),
  div(actionButton("button", "Extend Traces"), align = "center"),
  br(),
  div(plotlyOutput("plot"), id='graph')
)

server <- function(input, output, session) {

  p <- plot_ly(
    y = c(rand(),rand(),rand()),
    type = 'scatter',
    mode = 'lines',
    line = list(
      color = '#25FEFD',
      width = 3
    )
  ) %>%
    layout(
      yaxis = list(range = c(0,10))
    )

  pp <- plot_ly(
    y = c(rand(),rand(),rand()),
    type = 'scatter',
    mode = 'lines',
    line = list(
      color = '#636EFA',
      width = 3
    )
  ) %>%
    layout(
      yaxis = list(range = c(0,10))
    )

  s <- subplot(p,pp, nrows = 2)

  output$plot <- renderPlotly(s)

  observeEvent(input$button, {
    while(TRUE){
      Sys.sleep(1)
      plotlyProxy("plot", session) %>%
        plotlyProxyInvoke("extendTraces", list(y=list(list(rand()), list(rand()))), list(0,1))
    }
  })

}

shinyApp(ui, server)
```

### Reference

[Click here](https://plot.ly/javascript/plotlyjs-function-reference) to visit the PlotlyJS functions.


```r
?plotlyProxy
```
