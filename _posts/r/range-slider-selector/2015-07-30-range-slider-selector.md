---
name: Range Sliders and Selectors
permalink: r/range-sliders-selectors
description: How to use range-sliders and range-selectors in R
layout: base
thumbnail: thumbnail/range-selector.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: chart_events
order: 7
---

# Range Sliders and Selectors in R | Examples | Plotly

Now you can implement range sliders and range selectors in your Plotly graphs with R !

New to our R API?  
Learn about API authentication here: [https://plot.ly/r/getting-started](https://plot.ly/r/getting-started)  
Find your api_key here: [https://plot.ly/settings/api](https://plot.ly/settings/api)


```r
library(plotly)
library(quantmod)

# Download some data
getSymbols(Symbols = c("AAPL", "MSFT"))
```

```r
ds <- data.frame(Date = index(AAPL), AAPL[,6], MSFT[,6])

plot_ly(ds, x = Date, y = AAPL.Adjusted, mode = "lines + markers", name = "Apple") %>% 
  add_trace(x = Date, y = MSFT.Adjusted, name = "Microsoft") %>% 
  layout(
    title = "Stock Prices",
    xaxis = list(
      rangeselector = list(
        buttons = list(
          list(
            count = 3, 
            label = "3 mo", 
            step = "month",
            stepmode = "backward"),
          list(
            count = 6, 
            label = "6 mo", 
            step = "month",
            stepmode = "backward"),
          list(
            count = 1, 
            label = "1 yr", 
            step = "year",
            stepmode = "backward"),
          list(
            count = 1, 
            label = "YTD", 
            step = "year",
            stepmode = "todate"),
          list(step = "all"))),
      
      rangeslider = list(type = "date")),
    
    yaxis = list(title = "Price"))
```
<iframe src="https://plot.ly/~RPlotBot/2941" width="1024" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>
