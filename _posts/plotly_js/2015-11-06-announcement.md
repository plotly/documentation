---
title: Plotly.js Open-Source Announcement
name: Plotly.js Open-Source Announcement
permalink: javascript/open-source-announcement/
description: Plotly.js, the core technology behind the Plotly platform, is now open-source
language: plotly_js
has_thumbnail: false
layout: langindex
language: plotly_js
---

# Plotly.js Open-Source Announcement

November 17, 2015

A growing number of graphing tools and libraries allow us to make beautiful, interactive web-based graphs. By interactively visualizing our data online, we can learn more, allow others to explore data, work in teams, and paint a complete picture.

Today, Plotly announced that they have open-sourced plotly.js, the core technology and JavaScript graphing library behind Plotly’s online platform. Any developer can now integrate Plotly’s library into their own applications and access the power of D3.js - the popular JavaScript graphics library used by the New York Times - for scientific charting. Plotly.js supports 36 chart types, including 3D plots, geographic maps, and statistical charts like density plots, histograms, box plots, and contour plots. Find the [GitHub repository here](https://github.com/plotly/plotlyjs).

Despite the possibilities that the web offers, the core plotting libraries in scientific software like MATLAB, R, and Python still create static image files rather than dynamic, interactive charts. Many technical and scientific projects still don't embrace web technology because of JavaScript libraries being commercially developed, expensive, narrow in scope, or difficult to learn and use. By open-sourcing Plotly’s easy-to-use, comprehensive library, Plotly hopes to bring the power of interactive plotting to every developer, team, data scientist, and analyst.

Plotly.js was instigated by [Dr. Alex Johnson](http://environment.harvard.edu/about/fellows/alex-johnson) and has been in development for over 3 years. 

## Plotly.js Highlights

#### Eight details that make the project unique.

1. **Scientific grade.** plotly.js is comparable in scope and features to MATLAB or Python’s matplotlib, but written in JavaScript, the language of the Web. 

2. **SVG & WebGL backends.** plotly.js uses both D3.js (SVG) and WebGL for graphics rendering. WebGL allows interactive rendering of hundreds of thousands to millions of x-y points, while D3.js is more practical for up to tens of thousands of points.

3. **Testing framework.** For [code contributors](https://github.com/plotly/plotlyjs/graphs/contributors), the plotly.js image testing framework makes it the most stable JavaScript charting library available. 

4. **User documentation.** The [plotly.js documentation](https://plot.ly/javascript) is hosted on GitHub pages and is open-source under a Creative Commons license. 

5. **Support & Community.** Plotly is sponsoring staff to update documentation, review pull requests, and patrol Plotly’s Stack Overflow and Discourse channels. Direct developer email support can be purchased through a [Plotly Pro plan](https://plot.ly/products/cloud/).

6. **No dependencies.** plotly.js is an “all-in-one bundle” with d3.js and stack.gl modules baked-in.

7. **No jQuery.** jQuery has been removed from plotly.js for significantly better performance and improved browser compatibility.

8. **Powered by a JSON schema** plotly.js is based on a new open-source [JSON schema](http://help.plot.ly/json-chart-schema/) for creating, saving, and sharing scientific charts.

#### A new JSON schema for data visualization

Plotly.js is based on a declarative, open-source [JSON schema](http://help.plot.ly/json-chart-schema/) that attempts to describe every physical aspect of any scientific chart. With this approach, the role of plotly.js is simple: **plotly.js takes the JSON specification of a chart and produces it as an interactive visualization.**

The JSON schema makes Plotly charts *language agnostic* - They can be easily translated from one format to another:

- Interactive chart: [https://plot.ly/~empet/6640](https://plot.ly/~empet/6640)
- JSON specification: [https://plot.ly/~empet/6640.json](https://plot.ly/~empet/6640.json)
- Raster image: [https://plot.ly/~empet/6640.png](https://plot.ly/~empet/6640.png)
- Vector image: [https://plot.ly/~empet/6640.svg](https://plot.ly/~empet/6640.svg)
- Excel: [https://plot.ly/~empet/6640.xlsx](https://plot.ly/~empet/6640.xlsx)
- Python code: [https://plot.ly/~empet/6640.py](https://plot.ly/~empet/6640.py)
- CSV data: [https://plot.ly/~empet/6640.csv](https://plot.ly/~empet/6640.csv)

Browse Plotly’s community-created [chart feed](https://plot.ly/feed/) and append “.json” to the URL of any chart to see its JSON specification.

#### Distinction from vega and vega-lite

The plotly.js JSON schema and API is more like MATLAB or Python’s matplotlib than most JavaScript charting libraries available. It focuses on the chart’s physical attributes and attempts to leave the chart data separate (a workflow that scientists and engineers are accustomed to). For chart types that require binning (contour plots, histograms) or min-max decimation (line plots with >100k lines), some precomputation in JavaScript has been unavoidable. 

The vega and vega-lite schemas are more opinionated in prescribing how the chart data is grouped, sliced, or statistically processed before graphical display. This allows for very rich chart display with a concise JSON description, but leaves less control to the user. Neither approach is more “correct”—they’re just different.

## Implications for developers

#### JavaScript Developers

The latest full version of plotly.js is available for free, unlimited use in any project. plotly.js code uses the MIT open-source license, the same license used by Bootstrap.js. The MIT open-source license puts no restrictions on how the code is used. Licensees who have previously purchased a plotly.js commercial license will no longer be charged the annual license fee and are encouraged to update to the latest plotly.js version under the MIT license.

The latest version of plotly.js can be downloaded from GitHub or the [documentation home](https://plot.ly/javascript/).

```<script src=”cdn.plot.ly/min.plotly.js”>```

#### R, Python, & MATLAB Engineers and Data Scientists

Plotly can now be used 100% offline in RStudio, MATLAB, or Jupyter notebook free-of-charge. The R, Python, and MATLAB clients for Plotly have always been open-source, while the core graphics layer—plotly.js—was closed-source. Now the entire stack is open-source.

This makes for a better user experience:

- There is no round-trip to Plotly’s server, so plotting is **fast.**
- For the same reason, you can plot more data.
- In RStudio, Plotly charts now appear natively in RStudio instead of opening in a browser tab.
- Everything is local — You can create charts completely independently from Plotly’s online platform.

[Download for IPython notebook](https://plot.ly/python/getting-started/) | [Download for RStudio](https://plot.ly/r/getting-started/) | [Download for MATLAB](https://plot.ly/matlab/getting-started/)

## Plans for future work

If you’re excited about what we’re doing, the best way to support our work is a Pro subscription to [Plotly Cloud](https://plot.ly/products/cloud/). Cloud subscriptions allow you to host and share Plotly charts created with plotly.js and gives your a direct line of developer support (by email) to Plotly staff. 

If you’re a JavaScript developer,  consider taking a look at the code and contributing to the plotly.js codebase or submitting Codepen examples to [community.plot.ly](http://community.plot.ly/c/plotly-js).

If you’re an R, Python, MATLAB, or Julia developer please consider contributing to one of the clients on [Plotly's GitHub](http://github.com/plotly/).

## Humans behind the project

#### plotly.js core developers

- Alex Johnson
  - plotly.js lead developer, architect, and instigator
- Mikola Lysenko
  - Stack.gl WebGL work lead
- Étienne Tétreault-Pinard
  - Geospatial work lead
- Chris Parmer
  - Documentation lead
- Ben Postlethwaite
  - Image testing server lead

#### R, Python, and MATLAB client developers

These domain specific libraries are allowing data scientists and engineers to easily create D3.js and stack.gl Plotly charts without any knowledge of JavaScript.

- Python
  - Andrew Seier, Chelsea Douglas, Chris Parmer, Étienne Tétreault-Pinard
- R
  - Carson Sievert, Marianne Corvellec
- MATLAB
  - Chuck Bronson, Chris Parmer

#### Financial sponsors

- Siemens Corporation
- National Research Council of Canada
- Rho Canada Ventures
- MHS Capital


