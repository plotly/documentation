---
title: Proxy Interface | Examples | Plotly
name: Proxy Interface
permalink: r/plotlyproxy/
description: Getting Started with Plotly's Proxy Interface
layout: base
display_as: shiny
language: r
page_type: example_index
has_thumbnail: false
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

### plotlyProxy

`plotlyProxy()` initiates a proxy object just by referencing a shiny output ID. Currently, you must use the `plotlyProxyInvoke()` function to modify a `plotlyProxy()` object, which requires knowledge/use of a [plotly.js method](https://plot.ly/javascript/plotlyjs-function-reference/) for the updating logic (among them, Plotly.restyle, Plotly.relayout, Plotly.addTraces, and Plotly.deleteTraces are the most widely useful). The app below demonstrates these methods.

### App

<iframe src="https://plotly.shinyapps.io/plotlyproxy/" width="100%" height=700 scrolling="no" seamless="seamless" style="border: none"></iframe>

### Code


```r
library(shiny)
library(plotly)
 
ui <- fluidPage(
  div(
    h3("PLOTLYPROXY", align = 'center'), 
    style = "border-bottom: solid; border-width: thin;"
  ),
  br(),
    fluidRow(
      column(3,
             h4("addTraces", style = "text-decoration: underline;"),
             fluidRow(
              column(6, textInput("xvalue", NULL, "1,2,3,4")),
              column(6, textInput("yvalue", NULL, "3,3,3,3"))),
              actionButton("add", "Add", width = '210px')
             ),
      column(3,
             h4("restyle", style = "text-decoration: underline;"),
               textInput("traceNo", NULL, "Trace #"),
               selectInput("marker", NULL, 
                           schema()$traces$scatter$attributes$marker$symbol$values, 
                           selected = "circle")
      ),
      column(3,
             h4("relayout", style = "text-decoration: underline;"),
               textInput("text", NULL, "Enter New Title Here"),
               selectInput("color", NULL, colors(), selected = "black")
             ),
      column(3,
             h4("deleteTraces", style = "text-decoration: underline;"),
             textInput("traceNo2", NULL, "Trace #"),
             actionButton("delete", "Delete", width = '210px')
      )
    ),
  br(),
  div(
    plotlyOutput("plot"),
    style = "border: solid black 1px"
  )
)

server <- function(input, output, session) {
  
  output$plot <- renderPlotly({
    plot_ly(
      type = 'scatter',
      mode = 'markers',
      x = c(1,2,3,4), 
      y = c(2,4,2,4)
    ) %>%
    layout(
      title = 'Original Title',
      showlegend = T,
      margin = list(t=40)
    )
  })

  # plotly.addTraces
  observeEvent(input$add, {
    plotlyProxy("plot", session) %>%
      plotlyProxyInvoke("addTraces", list(x = as.integer(unlist(strsplit(input$xvalue,","))), 
                                          y = as.integer(unlist(strsplit(input$yvalue, ","))),
                                          type = 'scatter',
                                          mode = 'markers'))
  })
  
  # plotly.restyle
  observeEvent(input$marker, {
    plotlyProxy("plot", session) %>%
      plotlyProxyInvoke("restyle", list(marker = list(symbol = input$marker)), list(input$traceNo))
  })
  
  # plotly.relayout
  observeEvent(input$text, {
    plotlyProxy("plot", session) %>%
      plotlyProxyInvoke("relayout", list(title = input$text))
  })
  
  observeEvent(input$color, {
    plotlyProxy("plot", session) %>%
      plotlyProxyInvoke("relayout", list(plot_bgcolor = input$color, paper_bgcolor = input$color))
  })
  
  # plotly.deleteTraces
  observeEvent(input$delete, {
    plotlyProxy("plot", session) %>%
      plotlyProxyInvoke("deleteTraces", list(as.integer(input$traceNo2)))
  })
  
}

shinyApp(ui, server)
```

### Reference

For more information about plotly.js methods, click [here](https://plot.ly/javascript/plotlyjs-function-reference/) 

```r
?plotlyProxy
```
