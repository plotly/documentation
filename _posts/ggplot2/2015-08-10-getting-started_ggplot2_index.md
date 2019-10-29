---
name: Getting Started with Plotly
permalink: ggplot2/getting-started/
description: Get started with Plotly's R graphing library with ggplot2 to make interactive, publication-quality graphs online.
page_type: example_index
layout: base
language: ggplot2
---



# Plotly for R

Plotly is R package for creating interactive web-based graphs via [plotly](https://plot.ly/)'s JavaScript graphing library, `plotly.js`.
The `plotly` R libary contains the `ggplotly` function , which will convert `ggplot2` figures into a Plotly object. Furthermore, you have the option of manipulating the Plotly object with the `style` function.

<a href="https://travis-ci.org/ropensci/plotly">
    <img alt="Build Status" style="margin: 0;" src="https://travis-ci.org/ropensci/plotly.png?branch=master">
</a>

#### Installation

Plotly is now on CRAN!


```r
install.packages("plotly")
```

Or install the latest development version (on GitHub) via devtools:


```r
devtools::install_github("ropensci/plotly")
```

RStudio users should download the latest RStudio release for compatibility with htmlwidgets.

#### Initialization for Offline Plotting

By default, Plotly for R runs locally in your web browser or in the R Studio viewer.


```r
library(plotly)

set.seed(100)
d <- diamonds[sample(nrow(diamonds), 1000), ]

p <- ggplot(data = d, aes(x = carat, y = price)) +
  geom_point(aes(text = paste("Clarity:", clarity)), size = 4) +
  geom_smooth(aes(colour = cut, fill = cut)) + facet_wrap(~ cut)

p <- ggplotly(p)
```

Simply printing the Plotly object will render the chart locally in your web browser or in the R Studio viewer.

<iframe src="https://plot.ly/~RPlotBot/5176.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

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


```r
api_create(p, filename = "getting-started/ggplotly")
```

`filename` sets the name of the file inside your online plotly account.

#### Special Instructions for Chart Studio Enterprise Users

Your API key for account on the public cloud will be different than the API key in [Chart Studio Enterprise](https://plot.ly/product/enterprise/). Visit https://plotly.your-company.com/settings/api/ to find your Chart Studio Enterprise API key. Remember to replace "your-company.com" with the URL of your Chart Studio Enterprise server.

If your company has a Chart Studio Enterprise server, change the R API endpoint so that it points to your company's Plotly server instead of Plotly's cloud.

In your .RProfile write:


```r
Sys.setenv("plotly_domain"="https://plotly.your-company.com")
```

Remember to replace "your-company" with the URL of your Chart Studio Enterprise server.

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
