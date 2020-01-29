---
description: How to export R graphs as static images using Chart Studio. 
display_as: chart_studio
language: r
layout: base
name: Exporting Graphs As Static Images Using Chart Studio
order: 2
output:
  html_document:
    keep_md: true
page_type: example_index
permalink: r/chart-studio-image-export/
sitemap: false
thumbnail: thumbnail/png-export.png
---


### Supported File Formats

With the `plotly` R package, you can export graphs you create as static images in the `.png` and/or `.jpg`/`.jpeg` file formats for free using the [Chart Studio web service](https://chart-studio.plot.ly/create/#/). 

Currently, exporting graphs you create as static images in the `.eps`, `.svg`, and/or `.pdf` format is a feature that is available only to users of [Chart Studio Enterprise](https://plot.ly/online-chart-maker/).

**Note:** It is important to be aware that R graphs containing WebGL-based traces (i.e. of type `scattergl`, `heatmapgl`, `contourgl`, `scatter3d`, `surface`, `mesh3d`, `scatterpolargl`, `cone`, `streamtube`, `splom`, and/or `parcoords`) will include encapsulated rasters instead of vectors for some parts of the image if they are exported as static images in a vector format like `.eps`, `.svg`, and/or `.pdf`.

### Exporting Chart Studio Charts As Static Images

To export your R graphs as static images using the Chart Studio web service, you can use the built-in `plotly_IMAGE()` function. 

#### Create A Chart Studio Account And Get An API Key

To use the `plotly_IMAGE()` function, you will need to have a [Chart Studio account](https://chart-studio.plot.ly/Auth/login/?action=signup#/) and an API key (which can be found [in your Chart Studio account online settings](https://plot.ly/settings/api)). Learn more about [getting started with Chart Studio in R](https://plot.ly/r/getting-started-with-chart-studio). 

#### Set Environment Variables In Your R Session

Let the R session know about your Chart Studio authorization credentials by setting environment variables using [`Sys.setenv()`](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/Sys.setenv).


```r
Sys.setenv("plotly_username" = "YOUR USER NAME")
Sys.setenv("plotly_api_key" = "YOUR API KEY")
```

#### Use The Development Version Of The `plotly` R Package

You will also need to be using the development version of the `plotly` R package in order to use the `plotly_IMAGE()` function. This can be installed from GitHub using the [`devtools`](https://cran.r-project.org/web/packages/devtools/index.html) R package by running the following command in your R session:

```r
devtools::install_github("ropensci/plotly")
```

#### Export R Graph As Static Image

The `plotly_IMAGE()` function exports your R plots as static images using the Chart Studio web service. The image will be stored in a file in the working directory of your R session.


```r
library(plotly)
p <- plot_ly(x = c(1,2,3,4), y = c(2,4,1,3), type = 'scatter', mode = 'lines')
plotly_IMAGE(p, format = "png", out_file = "output.png")
```

![](https://images.plot.ly/plotly-documentation/images/output.png)

### Alternative Methods Of Exporting Graphs As Static Images In R

#### Local Image Export

As an alternative to using the Chart Studio web service to export your R graphs as static images, you can [use the built-in `orca()` function](https://plot.ly/r/static-image-export) to export images locally. 

#### Embed R Charts in RMarkdown Documents

See [Embedding Graphs in RMarkdown](https://plot.ly/r/embedding-graphs-in-rmarkdown/) to learn more about embedding R charts in RMarkdown (.Rmd) files.
