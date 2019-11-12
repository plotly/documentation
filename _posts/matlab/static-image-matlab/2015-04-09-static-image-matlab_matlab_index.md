---
name: Save plots as JPG, PDF, PNG | saveas
permalink: matlab/static-image-export/
description: How to export plotly graphs as static images in MATLAB. Plotly supports png, svg, jpg, and pdf image export.
layout: base
thumbnail: thumbnail/static-image-matlab.jpg
language: matlab
page_type: example_index
display_as: get_request
sitemap: false
---

<div class="content-box">
<p>You can save static images using the following syntax :</p><br>

<pre><code>
>> saveplotlyfig(figure, 'your_image_filename.png')</code></pre>

<p>figure is a struct with data and layout fields.</p><br>
<p>figure.data is a cell array of structs, containing your trace and data information.</p><br>
<p>figure.layout is a struct containing your plot's styling information.</p></br>

<p>Alternatively, you can exclude the layout information and simply provide the data information as follows:

<pre><code>>> saveplotlyfig(data, 'your_image_filename.png')</code></pre></br>
<p>data is a cell array of structs, containing your trace and data information.</p><br>


<p>Combine this with a GET request on a plot you (or someone else) has already created :<p></br>

<pre><code>>> figure = getplotlyfig('demos', 1526)
>> saveplotlyfig(figure, 'your_image_filename.png')
</code></pre>

<p>This will save a static image of a plot you've pulled from Plotly's Servers. Plotly supports PNG, PDF, JPEG, SVG.</p><br>

<p>Take a look at the following examples rendered using saveplotlyfig:</p><br>

<h6>PNG Example:</h6>

<img src="https://plot.ly/~PlotBot/149.png" alt="Example of a MATLAB<sup>&reg;</sup> figure exported to PNG format">

<h6>PDF Example:</h6>

<iframe src="https://plot.ly/static/api_docs/image/matlab_user_guide/MatlabImageExample.pdf" scrolling="no" height="550" width="550" frameborder="0"></iframe>

<h6>SVG Example:</h6>

<img src="https://plot.ly/~etpinard/199.svg" alt="Example of a MATLAB<sup>&reg;</sup> figure exported to SVG format">

<h6>JPEG Example</h6>

<img src="https://plot.ly/~Dreamshot/539.jpeg" alt="Example of a MATLAB<sup>&reg;</sup> figure exported to JPEG format">

<br>
</div><br>
