---
title: Export JavaScript plots as JPG, PNG , SVG| Examples | Plotly
name: Export JavaScript plots as JPG, PNG ,SVG
permalink: javascript/static-image-export/
description: How to export plotly graphs as static images in JavaScript. Plotly supports jpg, png and svg image export.
layout: user-guide
name: Static Image Export
thumbnail: thumbnail/png-export.png
language: plotly_js
display_as: chart_type
page_type: example_index
has_thumbnail: true
display_as: file_settings
sitemap: false
---

You can save plotly graphs to static images and view them in your browser. Consider the following example:

    var d3 = Plotly.d3;
    var img_jpg= d3.select('#jpg-export');

    // Ploting the Graph

    var trace={x:[3,9,8,10,4,6,5],y:[5,7,6,7,8,9,8],type:"scatter"};
    var trace1={x:[3,4,1,6,8,9,5],y:[4,2,5,2,1,7,3],type:"scatter"};
    var data = [trace,trace1];
    var layout = {title : "Simple Javascript Graph"};
    Plotly.plot(
      'plotly_div',
       data,
       layout)

    // static image in jpg format

    .then(
    	function(gd)
	     {
	      Plotly.toImage(gd,{height:300,width:300})
	         .then(
	         	function(url)
	         {
	             img_jpg.attr("src", url);
	             return Plotly.toImage(gd,{format:'jpeg',height:400,width:400});
	         }
	         )
        });
To view this image in your page include following HTML tag:

    <img id="jpg-export"></img>

Height and width of the image can be adjusted by specifying the same in `toImage` call:


    Plotly.toImage(
    gd,{
      format:'jpeg',
      height:desired_height,
      width:desired_width,
    });


You can also save the image using different formats.

# Formats Supported

The common image formats: 'PNG', 'JPG/JPEG' are supported. In addition, formats like 'EPS', 'SVG' and 'PDF' are also supported.

**Note:** The SVG, EPS and PDF Formats are only available for Plotly Professional users. You can get more details on our [pricing page] (https://plot.ly/products/cloud/)


## Saving as PNG ##
	  img_png.attr("src", url);
	  Plotly.toImage(gd,{format:'png',height:400,width:400});

## Saving as SVG ##
    img_svg.attr("src", url);
    Plotly.toImage(gd,{format:'svg',height:800,width:800});
