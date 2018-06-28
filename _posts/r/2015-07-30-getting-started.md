---
title: Getting Started with Plotly for R
name: Getting Started with Plotly for R
permalink: r/getting-started/
description: Get started with Plotly's R graphing library to make interactive, publication-quality graphs online.
page_type: example_index
layout: getstart
language: r
---

# Getting Started with Plotly for R

Plotly is an R package for creating interactive web-based graphs via the open source JavaScript graphing library [plotly.js](http://plot.ly/javascript).
As of version 2.0 (November 17, 2015), Plotly graphs are rendered *locally* through the [htmlwidgets](http://www.htmlwidgets.org/) framework.


#### Installation

Plotly is now on CRAN!

```r
install.packages("plotly")
```

Or install the latest development version (on Github) via devtools:

```r
devtools::install_github("ropensci/plotly")
```

<br>
RStudio users should download the latest [RStudio release](https://www.rstudio.com/products/rstudio/download/) for compatibility with htmlwidgets.

#### Initialization for Offline Plotting

By default, Plotly for R runs locally in your web browser or in the R Studio viewer.

```r
library(plotly)
p <- plot_ly(midwest, x = ~percollege, color = ~state, type = "box")
p
```

Simply printing the Plotly object will render the chart locally in your web browser or in the R Studio viewer.

<iframe style="border: none; width: 100%; height: 500px;" src="https://plot.ly/~chriddyp/1799.embed"></iframe>

Plotly graphs are interactive. Click on legend entries to toggle traces, click-and-drag on the chart to zoom, double-click to autoscale, shift-and-drag to pan.

#### Initialization for Online Plotting

You can publish your charts to the web with Plotly's web service.

1 - [Create a free Plotly account](https://plot.ly/api_signup):<br>
A Plotly account is required to publish charts online. It's free to get started, and you control the privacy of your charts.

2 - Save your authentication credentials<br>
Find your authentication API keys [in your online settings](https://plot.ly/settings/api). Set them in your R session with:

```r
Sys.setenv("plotly_username"="your_plotly_username")
Sys.setenv("plotly_api_key"="your_api_key")
```

Save these commands in your [.Rprofile](http://www.statmethods.net/interface/customizing.html) file to be run every time you start R.

3 - Publish your graphs to Plotly with `api_create`

Use `filename` to title the file in your Plotly account.

```r
library(plotly)
p <- plot_ly(midwest, x = ~percollege, color = ~state, type = "box")
api_create(p, filename = "r-docs-midwest-boxplots")
```

4 (optional) - Suppress auto open

When following the instructions above, `api_create(p)` will auto open the created URL in the browser. To suppress this behavior, you can update your browser options in R:

```r
options(browser = 'false')
api_create(p, filename = "r-docs-midwest-boxplots")
```

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

#### Online Plot Privacy

Plots can be set to three different type of privacies: public, private or secret.

* **public:**

     Anyone can view this graph. It will appear in your profile
     and can appear in search engines. You do not need to be
     logged in to Plotly to view this chart.

* **private:**

     Only you can view this plot. It will not appear in the
     Plotly feed, your profile, or search engines. You must be
     logged in to Plotly to view this graph. You can privately
     share this graph with other Plotly users in your online
     Plotly account and they will need to be logged in to
     view this plot. This option is only available for Personal
     and Professional subscribers.

* **secret:**

     Anyone with this secret link can view this chart. It will
     not appear in the Plotly feed, your profile, or search
     engines. If it is embedded inside a webpage or an IPython
     notebook, anybody who is viewing that page will be able to
     view the graph. You do not need to be logged in to view
     this plot. This option is only available for Personal
     and Professional subscribers.

By default all plots are set to public. Users with a free account are limited to creating public plots. If you have private storage needs, please visit [Plotly products page](https://plot.ly/products). If you're a [Personal or Professional USER](https://plot.ly/settings/subscription/?modal=true&utm_source=api-docs&utm_medium=support-oss) and would like the setting for your plots to be private, you can specify sharing as private:

```r
api_create(filename = "private-graph", sharing = "private")
```
For more examples on privacy settings please visit [R privacy documentation](https://plot.ly/r/privacy/)
