---
title: Bubble Charts in R | Examples | Plotly
name: Bubble Charts
permalink: r/bubble-charts/
description: How to make a bubble chart in R. A bubble chart is a scatter plot whose markers have variable color and size.
layout: base
thumbnail: thumbnail/bubble.jpg
language: r
page_type: example_index
has_thumbnail: true
display_as: chart_type
order: 2
output:
  html_document:
    keep_md: true
---



### New to Plotly?

Plotly's R library is free and open source! [Get started](https://plot.ly/r/getting-started/) by downloading the client and [reading the primer](https://plot.ly/r/getting-started/). 
You can set up Plotly to work in [online](https://plot.ly/r/getting-started/#hosting-graphs-in-your-online-plotly-account) or [offline](https://plot.ly/r/offline/) mode. 
We also have a quick-reference [cheatsheet](https://images.plot.ly/plotly-documentation/images/r_cheat_sheet.pdf) (new!) to help you get started!


# Simple Bubble Chart


```r
library(plotly)

data <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/school_earnings.csv")

plot_ly(data, x = ~Women, y = ~Men, type = 'scatter', mode = 'markers', 
        marker = list(size = ~gap, opacity = 0.5)) %>%
  layout(title = 'Numbers of School Earning by Sex',
         xaxis = list(showgrid = FALSE),
         yaxis = list(showgrid = FALSE))
```

<iframe src="https://plot.ly/~RPlotBot/3597.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

# Setting Markers Color


```r
library(plotly)

data <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/school_earnings.csv")

plot_ly(data, x = ~Women, y = ~Men, type = 'scatter', mode = 'markers', 
        marker = list(size = ~gap, opacity = 0.5, color = 'rgb(255, 65, 54)')) %>%
  layout(title = 'Numbers of School Earning by Sex',
         xaxis = list(showgrid = FALSE),
         yaxis = list(showgrid = FALSE))
```

<iframe src="https://plot.ly/~RPlotBot/3599.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

# Setting Multiple Colors


```r
library(plotly)

data <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/school_earnings.csv")

colors <- c('rgba(204,204,204,1)', 'rgba(222,45,38,0.8)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
            'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 
            'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 
            'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)',
            'rgba(204,204,204,1)')
# Note: The colors will be assigned to each observations based on the order of the observations in the dataframe.


plot_ly(data, x = ~Women, y = ~Men, type = 'scatter', mode = 'markers',
        marker = list(size = ~gap, opacity = 0.5, color = colors)) %>%
  layout(title = 'Numbers of School Earning by Sex',
         xaxis = list(showgrid = FALSE),
         yaxis = list(showgrid = FALSE))
```

<iframe src="https://plot.ly/~RPlotBot/3601.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

# Mapping a Color Variable (Continuous)


```r
library(plotly)

data <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/school_earnings.csv")

plot_ly(data, x = ~Women, y = ~Men, type = 'scatter', mode = 'markers', color = ~gap, colors = 'Reds',
        marker = list(size = ~gap, opacity = 0.5)) %>%
  layout(title = 'Numbers of School Earning by Sex',
         xaxis = list(showgrid = FALSE),
         yaxis = list(showgrid = FALSE))
```

<iframe src="https://plot.ly/~RPlotBot/3603.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

# Mapping a Color Variable (Categorical)


```r
library(plotly)

data <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/school_earnings.csv")

data$State <- as.factor(c('Massachusetts', 'California', 'Massachusetts', 'Pennsylvanie', 'New Jersey', 'Illinois', 'Washington DC', 
                          'Massachusetts', 'Connecticut', 'New York', 'North Carolina', 'New Hampshire', 'New York', 'Indiana', 
                          'New York', 'Michigan', 'Rhode Island', 'California', 'Georgia', 'California', 'California'))

plot_ly(data, x = ~Women, y = ~Men, type = 'scatter', mode = 'markers', size = ~gap, color = ~State, colors = 'Paired',
        marker = list(opacity = 0.5, sizemode = 'diameter')) %>%
  layout(title = 'Numbers of School Earning by Sex',
         xaxis = list(showgrid = FALSE),
         yaxis = list(showgrid = FALSE),
         showlegend = FALSE)
```

<iframe src="https://plot.ly/~RPlotBot/3605.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

# Scaling the Size of Bubble Charts


```r
library(plotly)

data <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/school_earnings.csv")

data$State <- as.factor(c('Massachusetts', 'California', 'Massachusetts', 'Pennsylvanie', 'New Jersey', 'Illinois', 'Washington DC', 
                          'Massachusetts', 'Connecticut', 'New York', 'North Carolina', 'New Hampshire', 'New York', 'Indiana', 
                          'New York', 'Michigan', 'Rhode Island', 'California', 'Georgia', 'California', 'California'))

plot_ly(data, x = ~Women, y = ~Men, type = 'scatter', mode = 'markers', size = ~gap, color = ~State, colors = 'Paired',
        marker = list(opacity = 0.5, sizemode = 'diameter', sizeref = 1.5),
        text = ~paste('School:', School, '<br>Gender gap:', gap)) %>%
  layout(title = 'Numbers of School Earning by Sex',
         xaxis = list(showgrid = FALSE),
         yaxis = list(showgrid = FALSE),
         showlegend = FALSE)
```

<iframe src="https://plot.ly/~RPlotBot/3607.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

# Hover Text with Bubble Charts


```r
library(plotly)

data <- read.csv("https://raw.githubusercontent.com/plotly/datasets/master/school_earnings.csv")

data$State <- as.factor(c('Massachusetts', 'California', 'Massachusetts', 'Pennsylvanie', 'New Jersey', 'Illinois', 'Washington DC', 
                          'Massachusetts', 'Connecticut', 'New York', 'North Carolina', 'New Hampshire', 'New York', 'Indiana', 
                          'New York', 'Michigan', 'Rhode Island', 'California', 'Georgia', 'California', 'California'))

plot_ly(data, x = ~Women, y = ~Men, type = 'scatter', mode = 'markers', size = ~gap, color = ~State, colors = 'Paired',
        marker = list(opacity = 0.5, sizemode = 'diameter', 
        #Controlling for the size of the bubbles:
        sizeref = 1.5),
        text = ~paste('School:', School, '<br>Gender gap:', gap)) %>%
  layout(title = 'Numbers of School Earning by Sex',
         xaxis = list(showgrid = FALSE),
         yaxis = list(showgrid = FALSE),
         showlegend = FALSE)
```

<iframe src="https://plot.ly/~RPlotBot/3609.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

#Reference

See [https://plot.ly/r/reference/#scatter](https://plot.ly/r/reference/#scatter) for more information and chart attribute options!
