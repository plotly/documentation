---
title: ggdendro lattice dendrograms | plotly
name: ggdendro lattice dendrograms
permalink: ggplot2/ggdendro-dendrograms
description: How to make a dendrogram with ggdendro and ggplot2
layout: base
thumbnail: thumbnail/dendrogram.jpg
language: ggplot2
page_type: example_index
has_thumbnail: true
display_as: chart_type
order: 14
---





```r
library(ggplot2)
library(ggdendro)
library(plotly)

#dendogram data
x <- as.matrix(scale(mtcars))
dd.col <- as.dendrogram(hclust(dist(x)))
dd.row <- as.dendrogram(hclust(dist(t(x))))
dx <- dendro_data(dd.row)
dy <- dendro_data(dd.col)

# helper function for creating dendograms
ggdend <- function(df) {
  ggplot() +
    geom_segment(data = df, aes(x=x, y=y, xend=xend, yend=yend)) +
    labs(x = "", y = "") + theme_minimal() +
    theme(axis.text = element_blank(), axis.ticks = element_blank(),
          panel.grid = element_blank())
}

# x/y dendograms
px <- ggdend(dx$segments)
py <- ggdend(dy$segments) + coord_flip()

# heatmap
col.ord <- order.dendrogram(dd.col)
row.ord <- order.dendrogram(dd.row)
xx <- scale(mtcars)[col.ord, row.ord]
xx_names <- attr(xx, "dimnames")
df <- as.data.frame(xx)
colnames(df) <- xx_names[[2]]
df$car <- xx_names[[1]]
df$car <- with(df, factor(car, levels=car, ordered=TRUE))
mdf <- reshape2::melt(df, id.vars="car")
p <- ggplot(mdf, aes(x = variable, y = car)) + geom_tile(aes(fill = value))


# hide axis ticks and grid lines
eaxis <- list(
  showticklabels = FALSE,
  showgrid = FALSE,
  zeroline = FALSE
)

p_empty <- plot_ly(filename="r-docs/dendrogram") %>%
  # note that margin applies to entire plot, so we can
  # add it here to make tick labels more readable
  layout(margin = list(l = 200),
         xaxis = eaxis,
         yaxis = eaxis)

subplot(px, p_empty, p, py, nrows = 2, margin = 0.01)
```

<iframe height="900" id="igraph" scrolling="no" seamless="seamless" src="https://plot.ly/~RPlotBot/1166.embed" width="800" frameBorder="0"></iframe>
