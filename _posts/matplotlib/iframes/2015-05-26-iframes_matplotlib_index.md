---
name: Embedding Graphs in HTML
permalink: matplotlib/embed-matplotlib-graphs-in-HTML/
description: How to embed plotly's matplotlib graphs with an iframe in HTML.
layout: base
language: matplotlib
page_type: example_index
has_thumbnail: false
display_as: get_request
---

Plotly graphs can be embedded in any HTML page. This includes [IPython notebooks](https://plot.ly/ipython-notebooks/),
[Wordpress sites](https://wordpress.org/plugins/wp-plotly/), dashboards, blogs, and more.

For more on embedding Plotly graphs in HTML documents, [see our tutorial](https://plot.ly/how-to-embed-plotly-graphs-in-websites/).

From Python, you can generate the HTML code to embed Plotly graphs with the <code>plotly.tools.get_embed</code> function.


```
import plotly.tools as tls

tls.get_embed('https://plot.ly/~chris/1638')
```
