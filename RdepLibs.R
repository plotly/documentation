# install.packages("plotly")
# r/3d/3d-tri-surf/Helicopter
# install.packages("geomorph")
# r/3d/3d-tri-surf/Maps -- Example updated & functional, thanks to @mdsummer
# install.packages("maptools")
devtools::install_github("hypertidy/anglr")
# r/3d/cone/3D Cone of Wind Dataset
# install.packages("rjson")
# r/animations/2017-05-28-cumulative-animations/Cumulative Lines Animation
# install.packages("dplyr")
# r/animations/2017-05-28-cumulative-animations/Filled-Area Animation
# install.packages("quantmod")
# r/animations/2017-05-28-cumulative-animations/Mulitple Trace Animations
# install.packages("gapminder")
# r/basic/2015-07-30-graphing-multiple-chart-types/Loess Smoother with Uncertainty Bounds
# install.packages("broom")
# r/basic/2015-07-30-graphing-multiple-chart-types/Plotting Forecast Object
# install.packages("forecast")
# r/basic/2016-09-29-line/Mapping data to linetype
# install.packages("plyr")
# r/basic/scattergl/2015-08-10-knitr/2016-02-25-scattergl-timeseries
# install.packages("readr")
# r/controls/2016-08-10-dropdowns/Simple Dropdown Menu Example
# install.packages("MASS")
# r/fundamentals/2015-08-10-knitr/
# install.packages("htmltools")
# r/layout/2015-07-30-legend/Hiding the legend
# install.packages("tidyr")
# r/maps/2017-04-12-county-level-choropleth/Add County-Level Data
# install.packages("tidyverse")
# r/maps/2018-06-22-sf/
# install.packages("sf")
# r/scientific/2015-07-30-contour-plots/Create Matrix and Plot Contour
# install.packages("stringr")
# install.packages("reshape2")
# r/scientific/2015-12-31-network-graph/Read Graph File
# install.packages("igraph")
# install.packages("igraphdata")
# r/scientific/2018-08-03-heatmap-webgl/WebGL Heatmap from an Image
# install.packages("jpeg")
# r/shiny/2015-07-30-shiny
# install.packages("shiny")
# r/shiny/coupled-events/click-selection
# install.packages("mlbench")
# install.packages("shinythemes")
# r/statistical/2015-07-30-2D-Histogram/Basic 2D Histogram
# install.packages('mvtnorm')
# ggplot2/2011-11-29-scale-x/By Month
# install.packages("ggplot2")
# install.packages("scales")
# ggplot2/2016-11-29-facet-grid/Time Series Data
# install.packages("gridExtra")
# ggplot2/2016-11-29-geom_boxplot/Time Series Facets
# install.packages("foreign")
# install.packages("Hmisc")
# ggplot2/2016-11-29-geom_line/Mulitple Points
# install.packages("data.table")
# ggplot2/2016-11-29-geom_polygon/Ellipses
# install.packages("proto")
# ggplot2/2016-11-29-geom_polygon/Convex Hull
# install.packages("RColorBrewer")
# ggplot2/2016-11-29-geom_polygon/County-Level Boundaries
# install.packages("maps")
# ggplot2/2016-11-29-geom_ribbon/Facets
# install.packages("mgcv")
# ggplot2/2016-11-29-geom_ribbon/Prediction Bands
# install.packages("nlme")
# ggplot2/2016-11-29-geom_smooth/Facets
# install.packages("Lahman")
# ggplot2/2017-04-21-geom_quantile/Basic Example
# install.packages("quantreg")
# ggplot2/2019-07-30-geom_text/Customed Colour and Size Scale
devtools::install_github("johannesbjork/LaCroixColoR")


install.packages("miniCRAN")
library(miniCRAN)
all_pkgs <- sapply(
  c(
    "plotly",
    "geomorph",
    "maptools",
    "rjson",
    "dplyr",
    "quantmod",
    "gapminder",
    "broom",
    "forecast",
    "plyr",
    "readr",
    "MASS",
    "htmltools",
    "tidyr",
    "tidyverse",
    "sf",
    "stringr",
    "reshape2",
    "igraph",
    "igraphdata",
    "jpeg",
    "shiny",
    "mlbench",
    "shinythemes",
    'mvtnorm',
    "ggplot2",
    "scales",
    "gridExtra",
    "foreign",
    "Hmisc",
    "data.table",
    "proto",
    "RColorBrewer",
    "maps",
    "mgcv",
    "nlme",
    "Lahman",
    "quantreg"
  ),
  pkgDep,
  suggests = FALSE
)

# All CRAN dependencies
allDependencies <- sort(unique(unlist(all_pkgs)))
# Already installed packages
installedPackages <- installed.packages()[,"Package"]
# Filter out already installed dependencies
toInstall <- allDependencies[!(allDependencies %in% installedPackages)]

# Install packages
doInstall <- TRUE
if(doInstall) {
  install.packages(toInstall, repos = "http://cran.us.r-project.org")
}

# Append non-cran packages to load list
invisible(append(toInstall, c("anglr", "LaCroixColoR")))
# Load Packages
invisible(lapply(toInstall, library, character.only = TRUE))













