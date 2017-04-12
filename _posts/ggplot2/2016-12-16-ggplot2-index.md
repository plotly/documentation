---
title: ggplot2 Graphing Library | Plotly
permalink: ggplot2/
description: Plotly for ggplot2 is an interactive, browser-based charting library built on Plotly's open source javascript graphing library, plotly.js. It works entirely locally, through the HTML widgets framework.
layout: langindex
language: ggplot2
---

<header class="--welcome">
  <div class="--welcome-body">
    <!--div.--wrap-inner-->
    <div class="--title">
      <div class="--category-img"><img src="https://images.plot.ly/language-icons/api-home/ggplot2-logo.png" alt=""></div>
      <div class="--body">
        <h1>Plotly ggplot2 Library</h1>
        <p>{{page.description}}</consectetur>
        </p>
      </div>
    </div>
  </div>
</header>

<div>
<p>
Plotly's ggplot2 graphs are hosted online in <a href="https://plot.ly/plans">your plotly account</a> or <a href="https://plot.ly/r/offline">drawn locally in RStudio</a>. They can be embedded in <a href="https://plot.ly/r/dashboards">HTML pages</a>, <a href="https://plot.ly/r/knitr">Knitr documents</a>, or <a href="https://plot.ly/r/shiny-tutorial">Shiny apps</a>. You don't need to use ggplot2 to use Plotly with R, you can also use Plotly's native <a href="https://plot.ly/r/">R graphing library</a>.
</p>
</div>

```r
library(plotly)

dsamp <- diamonds[sample(nrow(diamonds), 1000), ]
p <- qplot(carat, price, data=dsamp, colour=clarity)

p <- ggplotly(p)

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="ggplot2/intro-1")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4257.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>

<h6>Plotly graphs are interactive. Click on the legend entries to toggle traces, click and drag on the canvas to zoom, shift and click to pan.</h6>

```r
library(plotly)

set.seed(100)
d <- diamonds[sample(nrow(diamonds), 1000), ]

p <- ggplot(data = d, aes(x = carat, y = price)) +
geom_point(aes(text = paste("Clarity:", clarity)), size = .5) +
geom_smooth(aes(colour = cut, fill = cut)) + facet_wrap(~ cut)

p <- ggplotly(p)


# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="ggplot2/intro-2")
chart_link
```

<iframe src="https://plot.ly/~RPlotBot/4259.embed" width="800" height="600" id="igraph" scrolling="no" seamless="seamless" frameBorder="0"> </iframe>


{% assign languagelistimg = site.posts | where:"page_type":"example_index" | where:"language","ggplot2"  | where:"has_thumbnail",true | sort: "order"  %}
{% assign languagelist = site.posts | where:"page_type":"example_index" | where:"language","ggplot2" %}

{% include documentation_eg.html %}
