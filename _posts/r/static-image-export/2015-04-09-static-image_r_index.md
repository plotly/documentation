---
name: Static Image Export
permalink: r/static-image-export/
description: How to export plotly graphs as static images in R. Plotly supports png, svg, jpg, and pdf image export.
layout: getstart-base
thumbnail: thumbnail/static-image.jpg
language: r
page_type: example_index
has_thumbnail: false
display_as: get_request
sitemap: false
---

<div class="content-box">
<p>First, you'll need to set the following environment variables:</P><br>

<pre><code>Sys.setenv("plotly_username" = "YOUR USER NAME")
Sys.setenv("plotly_api_key" = "YOUR API KEY")
</pre></code>	

<p>You can save static images using the following syntax:</p><br>

<pre><code>library(plotly)

# p is a plotly object created using plot_ly
plotly_IMAGE(p, format = "png", out_file = "output.png")
</code></pre>

<p>You can also display a plotly interactive image in R-Markdown as such:</p><br>

<pre><code>p <- plot_ly(x = rnorm(1000), y = rnorm(1000), mode = "markers")
p
</code></pre>

<p>Combine this with a GET request on a plot you (or someone else) has already created:</p><br>

<pre><code>p <- get_figure('demos', '1571')
plotly_IMAGE(p, format = "png", out_file = "output.png")
</code></pre>


<p>This will save a static image of a plot you've pulled from Plotly's Servers.</p><br>

<p>You can view the static version of any Plotly graph by appending <code class="no-padding">.png</code>,
<code class="no-padding">.pdf</code>, <codeclass="no-padding">.eps</code>, or <code class="no-padding">.svg</code> to the end of the URL.</p><br>
<p>For example, view the static image of <a href="https://plot.ly/~chris/1638">https://plot.ly/~chris/1638</a> at <a href="https://plot.ly/~chris/1638.png">https://plot.ly/~chris/1638.png</a>.</p><br>