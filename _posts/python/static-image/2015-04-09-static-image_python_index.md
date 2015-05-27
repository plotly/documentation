---
name: Static Image Export
permalink: python/static-image-export/
description: How to export plotly graphs as static images in {language}. Plotly supports png, svg, jpg, and pdf image export.
layout: base
thumbnail: /images/static-image.png
language: python
page_type: example_index
has_thumbnail: false
display_as: get_request
---

You can save static images using the following syntax:

<div class="z-depth-1">
<pre>import plotly.plotly as py
py.image.save_as({'data': data}, 'your_image_filename.png')
</pre>
</div>
You can also display inline static images in IPython:

<div class="z-depth-1">
<pre>import plotly.plotly as py
py.image.ishow({'data': data})
</pre>
</div>

Combine this with a GET request on a plot you (or someone else) has already created:

<div class="z-depth-1">
<pre>figure = py.get_figure('demos', '1571')
py.image.save_as(figure, 'your_image_filename.png')
</pre>
</div>

This will save a static image of a plot you've pulled from Plotly's Servers.

You can view the static version of any Plotly graph by appending <code>.png</code>,
<code>.pdf</code>, <code>.eps</code>, or <code>.svg</code> to the end of the URL.
For example, view the static image of <a href="https://plot.ly/~chris/1638">https://plot.ly/~chris/1638</a> at <a href="https://plot.ly/~chris/1638.png">https://plot.ly/~chris/1638.png</a>.

Combine this with the <code>requests</code> package and download the latest version of your Plotly graph:

<div class="z-depth-1">
<pre>import requests

image_bytes = requests.get('https://plot.ly/~chris/1638.png').content
</pre>
</div>
