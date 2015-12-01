---
title: Getting Started with Plotly for R
name: Getting Started with Plotly for R
permalink: r/getting-started/
description: Get started with Plotly's R graphing library to make interactive, publication-quality graphs online.
page_type: example_index
layout: base
language: r
---

## Getting Started with Plotly for R

Plotly is R package for creating interactive web-based graphs via the open source JavaScript graphing library [plotly.js](http://plot.ly/javascript).
As of version 2.0 (November 17, 2015), Plotly graphs are rendered *locally* through the [htmlwidgets](http://www.htmlwidgets.org/) framework.


<a href="https://travis-ci.org/ropensci/plotly">
    <img alt="Build Status" style="margin: 0;" src="https://travis-ci.org/ropensci/plotly.png?branch=master">
</a>

#### Installation

Plotly is now on CRAN!

```r
install.packages("plotly")
```

Install the latest development version ([on GitHub](https://github.com/ropensci/plotly)) via [devtools](http://cran.r-project.org/web/packages/devtools/):

```r
# install.packages("devtools")
devtools::install_github("ropensci/plotly")
```

#### Simple example


```r
library(plotly)
p <- plot_ly(midwest, x = percollege, color = state, type = "box")
p
```

Simply printing the plotly object will render the chart locally in your web browser or in the R Studio viewer.

<iframe style="border: none; width: 100%; height: 500px;" src="https://plot.ly/~chriddyp/1799.embed"></iframe>

Plotly graphs are interactive. Click on legend entries to toggle traces, click-and-drag on the chart to zoom, double-click to autoscale, shift-and-drag to pan.

#### Hosting graphs in your online plotly account

By default, plotly for R runs locally in your web browser or in the R Studio viewer.
You can publish your charts to the web with plotly's web service.

1 - [Create a free plotly account](https://plot.ly/ssu)

A plotly account is required to publish charts online. It's free to get started, and you control the privacy of your charts.


2 - Save your authentication credentials

Find your authentication API keys [in your online settings](https://plot.ly/settings/api). Set them in your R session with:

```r
Sys.setenv("plotly_username"="your_plotly_username")
Sys.setenv("plotly_api_key"="your_api_key")
```

Save these commands in your [.Rprofile](http://www.statmethods.net/interface/customizing.html) file to be run everytime you start R.

3 - Publish your graphs to plotly with `plotly_POST`

```r
library(plotly)
p <- plot_ly(midwest, x = percollege, color = state, type = "box")
plotly_POST(p, filename = "r-docs/midwest-boxplots", world_readable=TRUE)
```

`filename` sets the name of the file inside your online plotly account.

`world_readable` sets the privacy of your chart. If `TRUE`, the graph is publically viewable, if `FALSE`, only you can view it.

#### Special Instructions for Plotly On-Premise Users

Your API key for account on the public cloud will be different than the API key in [Plotly On-Premise](https://plot.ly/product/enterprise/). Visit <https://plotly.your-company.com/settings/api/> to find your Plotly On-Premise API key. Remember to replace "your-company.com" with the URL of your Plotly On-Premise server.

If your company has a Plotly On-Premise server, change the R API endpoint so that it points to your company's Plotly server instead of Plotly's cloud.

In your .RProfile write:

```r
Sys.setenv("plotly_domain"="https://plotly.your-company.com")
```

Remember to replace "your-company" with the URL of your Plotly On-Premise server.

<div class="row centered btnrow">
    <a href="/r/" class="button no_underline">Make your first graph</a>
</div>

