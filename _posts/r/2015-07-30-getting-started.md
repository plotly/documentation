---
title: Getting Started with Plotly in R
name: Getting Started with Plotly in R
permalink: r/getting-started/
description: Get started with Plotly's R graphing library to make interactive, publication-quality graphs online.
page_type: example_index
layout: base
language: r
---



# Plotly for R

Plotly is R package for creating interactive web-based graphs via [plotly](https://plot.ly/)'s JavaScript graphing library.

<a href="https://travis-ci.org/ropensci/plotly">
    <img alt="Build Status" style="margin: 0;" src="https://travis-ci.org/ropensci/plotly.png?branch=master">
</a>

#### Installation

__plotly__ is not (yet) available on CRAN, but you can install it via [devtools](http://cran.r-project.org/web/packages/devtools/):

```r
install.packages("viridis") # dependency
install.packages("devtools")
devtools::install_github("ropensci/plotly")
```


#### Signup

If you don't already have a plotly account, either [signup online](https://plot.ly/how-to-sign-up-to-plotly/) or use the `signup()` function (see the `help(signup)` page for more details).

Note you can check if you have a username and API key with:

```r
plotly:::verify("username")
plotly:::verify("api_key")
```

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

<div class="row centered btnrow">
    <a href="/r/" class="button no_underline">Make your first graph</a>
</div>

