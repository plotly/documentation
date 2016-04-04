---
title: Getting Started with Plotly and ggplot2
name: Getting Started with Plotly and ggplot2
permalink: ggplot2/getting-started/
description: Get started with Plotly's R graphing library with ggplot2 to make interactive, publication-quality graphs online.
page_type: example_index
layout: base
language: ggplot2
---



# Plotly for R

Plotly is R package for creating interactive web-based graphs via [plotly](https://plot.ly/)'s JavaScript graphing library, `plotly.js`.
The `plotly` R libary contains a function `ggplotly` which will convert `ggplot2` figures into graphs drawn with `plotly.js` which can be saved to your online plotly account or rendered locally. 

<a href="https://travis-ci.org/ropensci/plotly">
    <img alt="Build Status" style="margin: 0;" src="https://travis-ci.org/ropensci/plotly.png?branch=master">
</a>

#### Installation

__plotly__ is now available on CRAN.

```r
install.packages("plotly")
``` 

To install the **dev** version use:

```r
install.packages("devtools")
devtools::install_github("ropensci/plotly")
```

#### Signup

If you don't already have a plotly account, either [signup online](https://plot.ly/ssu/) or use the `signup()` function (see the `help(signup)` page for more details).

#### Credentials

Find your credentials [in our online settings](https://plot.ly/settings/api). Set them in your R session with:

```
Sys.setenv("plotly_username"="your_plotly_username")
Sys.setenv("plotly_api_key"="your_api_key")
```

Save these commands in your [.Rprofile](http://www.statmethods.net/interface/customizing.html) file to be run everytime you start R.

#### Special Instructions for Plotly On-Premise Users

Your API key for account on the public cloud will be different than the API key in [Plotly On-Premise](https://plot.ly/product/enterprise/). Visit https://plotly.your-company.com/settings/api/ to find your Plotly On-Premise API key. Remember to replace "your-company.com" with the URL of your Plotly On-Premise server.

If your company has a Plotly On-Premise server, change the R API endpoint so that it points to your company's Plotly server instead of Plotly's cloud.

In your .RProfile write:

```
Sys.setenv("plotly_domain"="https://plotly.your-company.com")
```

Remember to replace "your-company" with the URL of your Plotly On-Premise server.

#### Converting `ggplot` figures into Plotly graphs


```r
library(plotly)

set.seed(100)
d <- diamonds[sample(nrow(diamonds), 1000), ]

p <- ggplot(data = d, aes(x = carat, y = price)) +
  geom_point(aes(text = paste("Clarity:", clarity)), size = 4) +
  geom_smooth(aes(colour = cut, fill = cut)) + facet_wrap(~ cut)

ggplotly(p)
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1284.embed" width="800" frameBorder="0"></iframe>

<div class="row centered btnrow">
    <a href="/r/" class="button no_underline">View more examples</a>
</div>

#### Publishing graphs to your online plotly account
You can publish your newly created plotly graph to your online plotly account by using `plotly_POST()`. 

```r
plotly_POST(p, "Sample Plotly Chart")
```