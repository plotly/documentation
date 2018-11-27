---
title: Datatable | Examples | Plotly
name: Datatable and Plotly
permalink: r/datatable/
description: Getting Started with Datatable and Plotly
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

### Datatable and Plotly App

<iframe src="https://plotly.shinyapps.io/dt_plotly/" width="100%" height=1000 scrolling="no" seamless="seamless" style="border: none"></iframe>

### Code


```r
library(shiny)
library(DT)
library(plotly)
library(crosstalk)

m <- mtcars %>% 
  tibble::rownames_to_column()

ui <- fluidPage(
  h1("Plotly & DT", align = "center"),
  plotlyOutput("x2"),
  DT::dataTableOutput("x1"),
  fluidRow(
    p(class = 'text-center', downloadButton('x3', 'Download Filtered Data'))
  )
)

server <- function(input, output) {
  
  d <- SharedData$new(m, ~rowname)
  
  # highlight selected rows in the scatterplot
  output$x2 <- renderPlotly({
    
    s <- input$x1_rows_selected
    
    if (!length(s)) {
      p <- d %>%
        plot_ly(x = ~mpg, y = ~disp, mode = "markers", color = I('black'), name = 'Unfiltered') %>%
        layout(showlegend = T) %>% 
        highlight("plotly_selected", color = I('red'), selected = attrs_selected(name = 'Filtered'))
    } else if (length(s)) {
      pp <- m %>%
        plot_ly() %>% 
        add_trace(x = ~mpg, y = ~disp, mode = "markers", color = I('black'), name = 'Unfiltered') %>%
        layout(showlegend = T)
      
      # selected data
      pp <- add_trace(pp, data = m[s, , drop = F], x = ~mpg, y = ~disp, mode = "markers",
                      color = I('red'), name = 'Filtered')
    }
    
  })
  
  # highlight selected rows in the table
  output$x1 <- DT::renderDataTable({
    m2 <- m[d$selection(),]
    dt <- DT::datatable(m)
    if (NROW(m2) == 0) {
      dt
    } else {
      DT::formatStyle(dt, "rowname", target = "row",
                      color = DT::styleEqual(m2$rowname, rep("white", length(m2$rowname))),
                      backgroundColor = DT::styleEqual(m2$rowname, rep("black", length(m2$rowname))))
    }
  })
  
  # download the filtered data
  output$x3 = downloadHandler('mtcars-filtered.csv', content = function(file) {
    s <- input$x1_rows_selected
    if (length(s)) {
      write.csv(m[s, , drop = FALSE], file)
    } else if (!length(s)) {
      write.csv(m[d$selection(),], file)
    }
  })
  
}

shinyApp(ui, server)
```
