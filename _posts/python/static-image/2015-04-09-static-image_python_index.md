---
name: Static Image Export
permalink: python/static-image-export/
description: How to export plotly graphs as static images in {language}. Plotly supports png, svg, jpg, and pdf image export.
layout: getstart-base
thumbnail: /images/static-image.png
language: python
page_type: example_index
has_thumbnail: false
display_as: get_request
---
<div class="content-box">
<p>You can save static images using the following syntax:</p><br>

<pre><code>import plotly.plotly as py
py.image.save_as({'data': data}, 'your_image_filename.png')
</code></pre>
<p>You can also display inline static images in IPython:</p><br>


<pre>import plotly.plotly as py
py.image.ishow({'data': data})
</pre>


<p>Combine this with a GET request on a plot you (or someone else) has already created:</p><br>


<pre><code>figure = py.get_figure('demos', '1571')
py.image.save_as(figure, 'your_image_filename.png')
</code></pre>


<p>This will save a static image of a plot you've pulled from Plotly's Servers.</p><br>

<p>You can view the static version of any Plotly graph by appending <code class="no-padding">.png</code>,
<code class="no-padding">.pdf</code>, <codeclass="no-padding">.eps</code>, or <code class="no-padding">.svg</code> to the end of the URL.</p><br>
<p>For example, view the static image of <a href="https://plot.ly/~chris/1638">https://plot.ly/~chris/1638</a> at <a href="https://plot.ly/~chris/1638.png">https://plot.ly/~chris/1638.png</a>.</p><br>

<p>Combine this with the <code>requests</code> package and download the latest version of your Plotly graph:</p><br>


<pre><code>import requests

image_bytes = requests.get('https://plot.ly/~chris/1638.png').content
</code></pre>
<br>

</div><br>
