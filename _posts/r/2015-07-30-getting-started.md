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


#### Introduction

If you use [ggplot2](http://cran.r-project.org/web/packages/ggplot2/index.html), simply call `ggplotly()` to create interactive Plotly versions.



```r
library(plotly)
d <- diamonds[sample(nrow(diamonds), 1000), ]
p <- ggplot(data = d, aes(x = carat, y = price)) +
  geom_point(aes(text = paste("Clarity:", clarity)), size = 4) +
  geom_smooth(aes(colour = cut, fill = cut)) + facet_wrap(~ cut)
(gg <- ggplotly(p))
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/813.embed" width="800" frameBorder="0"></iframe>


The `ggplotly()` function converts a ggplot object to a plotly object, so if you like, you may 'post-process' your ggplot graphs to add custom plotly features, for example:


```r
layout(gg, hovermode = "closest")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/815.embed" width="800" frameBorder="0"></iframe>

plotly also supports certain chart types that ggplot2 doesn't support (such as 3D [surface](https://plot.ly/r/3d-surface-plots/), [point](https://plot.ly/r/3d-scatter-plots/), and [line](https://plot.ly/r/3d-line-plots/) plots). You can easily create these (or any other plotly) charts using the high-level interface.



```r
plot_ly(z = volcano, type = "surface")
```

<iframe height="600" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/817.embed" width="800" frameBorder="0"></iframe>


---

[![](http://ropensci.org/public_images/github_footer.png)](http://ropensci.org)

<div class="row centered btnrow">
	<a href="/r/" class="button no_underline">view examples</a>
</div>
