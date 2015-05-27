---
name: Save MATLAB plots as JPG, PDF, PNG | <code>saveas</code>
permalink: matlab/static-image-export/
description: How to export plotly graphs as static images in {language}. Plotly supports png, svg, jpg, and pdf image export.
layout: base
thumbnail: /images/static-image-matlab.png
language: matlab
page_type: example_index
has_thumbnail: false
display_as: get_request
---

You can save static images using the following syntax :

<code>>> saveplotlyfig(figure, 'your_image_filename.png')</code>

figure is a struct with data and layout fields.
figure.data is a cell array of structs, containing your trace and data information.
figure.layout is a struct containing your plot's styling information.

Alternatively, you can exclude the layout information and simply provide the data information as follows:

<code>>> saveplotlyfig(data, 'your_image_filename.png')</code>
data is a cell array of structs, containing your trace and data information.


Combine this with a GET request on a plot you (or someone else) has already created :

<pre>>> figure = getplotlyfig('demos', 1526)
>> saveplotlyfig(figure, 'your_image_filename.png')
</pre>

This will save a static image of a plot you've pulled from Plotly's Servers. Plotly supports PNG, PDF, JPEG, SVG.

Take a look at the following examples rendered using saveplotlyfig:

PNG Example:
![Example of a MATLAB figure exported to PNG format](https://plot.ly/~PlotBot/149.png)

PDF Example:

<iframe src="https://plot.ly/static/api_docs/image/matlab_user_guide/MatlabImageExample.pdf" scrolling="no" height="550" width="550" frameborder="0"></iframe>

SVG Example:

![Example of a MATLAB figure exported to SVG format](https://plot.ly/~etpinard/199.svg)

JPEG Example

![Example of a MATLAB figure exported to JPEG format](https://plot.ly/~Dreamshot/539.jpeg)
