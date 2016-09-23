---
name: Static Image Export
permalink: r/static-image-export/
description: How to export plotly graphs as static images in R. Plotly supports png, svg, jpg, and pdf image export.
layout: getstart-base
thumbnail: thumbnail/png-export.png
language: r
page_type: example_index
has_thumbnail: true
order: 2
display_as: get_request
sitemap: false
---

Recent versions of the R package include an `export()` function, which does image export locally, but requires the webshot package:


```r
if (!require("webshot")) install.packages("webshot")
tmpFile <- tempfile(fileext = ".png")
export(plot_ly(), file = tmpFile)
```

```
## Warning: No trace type specified and no positional attributes specified
```

```
## No trace type specified:
##   Based on info supplied, a 'scatter' trace seems appropriate.
##   Read more about this trace type -> https://plot.ly/r/reference/#scatter
```

```
## No scatter mode specifed:
##   Setting the mode to markers
##   Read more about this attribute -> https://plot.ly/r/reference/#scatter-mode
```

```r
browseURL(tmpFile)
```

Another option is to do image export through your plotly account. First, if you haven't already, let the R package know about your credentials


```r
Sys.setenv("plotly_username" = "YOUR USER NAME")
Sys.setenv("plotly_api_key" = "YOUR API KEY")
```


```r
library(plotly)
plotly_IMAGE(plot_ly(x = 1, y = 1), format = "png", out_file = "output.png")
```

```
## No trace type specified:
##   Based on info supplied, a 'scatter' trace seems appropriate.
##   Read more about this trace type -> https://plot.ly/r/reference/#scatter
```

```
## No scatter mode specifed:
##   Setting the mode to markers
##   Read more about this attribute -> https://plot.ly/r/reference/#scatter-mode
```

```
## Error in process.image(append_class(resp, "image")): Internal Server Error (HTTP 500).
```

This will export the image on plotly's servers and write the contents to a local file `"output.png"` in your working directory.

You can also view the static version of any Plotly graph by appending `.png`,
`.pdf`, `.eps`, or `.svg` to the end of the URL. For example, view the static image of <https://plot.ly/~chris/1638> at <https://plot.ly/~chris/1638.png>. See [Using Plotly with rmarkdown/knitr](https://plot.ly/r/knitr/) for a way to embed these links in rmarkdown/knitr (Rmd) files.
