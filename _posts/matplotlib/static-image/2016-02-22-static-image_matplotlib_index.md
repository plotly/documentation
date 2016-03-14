---
name: Matplotlib Static Image Export
permalink: matplotlib/static-image-export/
description: How to export plotly matplotlib graphs as static images in Python. Plotly supports png, svg, jpg, and pdf image export.
layout: getstart-base
thumbnail: thumbnail/png-export.png
language: matplotlib
page_type: example_index
has_thumbnail: true
display_as: basic
sitemap: false
order: 5
---
<div class="content-box">
<p>You can save static images using the `save_as` method. This is similar to `save_fig` method available in matplotlib:</p><br>

<pre><code># Import modules
import plotly.plotly as py
import plotly.tools as tls
import matplotlib.pyplot as plt

# Create a plot
x = [1, 2]
y = [2, 4]
plt.plot(x, y)

# Get Matplotlib Figure
mpl_fig = plt.gcf() 

# Convert to plotly figure
plotly_fig = tls.mpl_to_plotly(mpl_fig) 

# Save image
py.image.save_as(plotly_fig, 'your_image_filename.png') 
</code></pre>

In Addition, you can specify the size of the matplotlib/plotly figure to be saved by using following method:

<pre><code>import plotly.plotly as py
py.image.save_as(plotly_fig, 'your_image_filename.png', height=desired_height, width=desired_width) 
</code></pre>

<p>You can also display inline static images in IPython:</p><br>

<pre><code>import plotly.plotly as py
py.image.ishow(plotly_fig)
</code></pre>


<p>You can view the static version of any Plotly graph by appending <code class="no-padding">.png</code>,
<code class="no-padding">.pdf</code>, <codeclass="no-padding">.eps</code>, or <code class="no-padding">.svg</code> to the end of the URL.</p><br>
<p>For example, view the static image of <a href="https://plot.ly/~chris/1638">https://plot.ly/~chris/1638</a> at <a href="https://plot.ly/~chris/1638.png">https://plot.ly/~chris/1638.png</a>.</p><br>

<p>Combine this with the <code>requests</code> package and download the latest version of your Plotly graph:</p><br>


<pre><code>import requests

image_bytes = requests.get('https://plot.ly/~chris/1638.png').content
</code></pre>
<br>

</div><br>
