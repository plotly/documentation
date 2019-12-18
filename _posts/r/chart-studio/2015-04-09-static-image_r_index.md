---
description: How to export plotly graphs as static images in R. Plotly supports png,
  svg, jpg, and pdf image export.
display_as: chart_studio
language: r
layout: base
name: Static Image Export
order: 2
output:
  html_document:
    keep_md: true
page_type: example_index
permalink: r/static-image-export/
sitemap: false
thumbnail: thumbnail/png-export.png
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

```
## [1] '4.5.6.9000'
```

### Supported Formats

The common image formats: 'PNG', 'JPG/JPEG' are supported. In addition, formats like 'EPS', 'SVG' and 'PDF' are also available for user with a Personal or Professional subscription. You can get more details on our [pricing page] (https://plot.ly/products/cloud/)

**Note:** It is important to note that any figures containing WebGL traces (i.e. of type scattergl, heatmapgl, contourgl, scatter3d, surface, mesh3d, scatterpolargl, cone, streamtube, splom, or parcoords) that are exported in a vector format like SVG, EPS or PDF will include encapsulated rasters instead of vectors for some parts of the image.

To access the image in a particular format, you can either:


* use the `orca()` function. [Orca](https://github.com/plotly/orca) is Plotly's command line applications for generating static images.

* export the image on plotly's servers using `plotly_IMAGE()`.

* append the format extension to the plot url. i.e. the JPG version of the plot: https://plot.ly/~chris/1638 is available at : https://plot.ly/~chris/1638.jpg.

### Export Locally

`4.7.900` and above includes the `orca()` function (replacing the `export()` function), which exports images locally, but requires the processx package:


```r
if (!require("processx")) install.packages("processx")

p <- plot_ly(z = ~volcano) %>% add_surface()

orca(p, "surface-plot.png")
```

### Export Using Your Plotly Account

Another option is to do image export through your plotly account.

First, you will require the development version of plotly, this can be installed using `devtools::install_github("ropensci/plotly")`. In addition, if you haven't already, let the R package know about your credentials.



```r
Sys.setenv("plotly_username" = "YOUR USER NAME")
Sys.setenv("plotly_api_key" = "YOUR API KEY")
```

This option will export the image on plotly's servers and write the content to a local file `"output.png"` in your working directory.


```r
library(plotly)
p <- plot_ly(x = c(1,2,3,4), y = c(2,4,1,3), type = 'scatter', mode = 'lines')
plotly_IMAGE(p, format = "png", out_file = "output.png")
```

![](https://images.plot.ly/plotly-documentation/images/output.png)

### Appending File Type to URL

You can also view the static version of any Plotly graph by appending `.png`,
`.pdf`, `.eps`, or `.svg` to the end of the URL. For example, view the static image of <https://plot.ly/~chris/1638> at <https://plot.ly/~chris/1638.png>. See [Using Plotly with rmarkdown/knitr](https://plot.ly/r/knitr/) for a way to embed these links in rmarkdown/knitr (Rmd) files.
