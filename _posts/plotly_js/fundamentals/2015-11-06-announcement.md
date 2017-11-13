---
title: Plotly.js Open-Source Announcement
name: Plotly.js Open-Source Announcement
permalink: javascript/open-source-announcement/
language: plotly_js
has_thumbnail: false
layout: user-guide
no_sidebar: true
language: plotly_js
---

# Plotly.js Open-Source Announcement


November 17, 2015

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">✨ Announcement ✨ 100% of Plotly&#39;s JavaScript charting library is now free and open-source.<a href="https://t.co/5bneDRdV98">https://t.co/5bneDRdV98</a> <a href="https://t.co/NADG6eaEmA">pic.twitter.com/NADG6eaEmA</a></p>&mdash; plotly (@plotlygraphs) <a href="https://twitter.com/plotlygraphs/status/666667595903459328">November 17, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

A growing number of graphing tools and libraries allow anyone to make beautiful, interactive web-based graphs. By interactively visualizing our data online, we share complex ideas in an exploratory, visual, open, and collaborative way.

**Today, Plotly is announcing that we have open-sourced plotly.js, the core technology and JavaScript graphing library behind Plotly’s products** (MIT license). It's all out there and free. Any developer can now integrate Plotly’s library into their own applications unencumbered. Plotly.js supports 20 chart types, including 3D plots, geographic maps, and statistical charts like density plots, histograms, box plots, and contour plots.

We’re big fans of collaboration, freedom, and perpetual motion. Open-source has become the de facto distribution for gold-standard scientific and business intelligence software. We want to support, participate in, and amplify this trend. By open-sourcing Plotly's core technology, everyone benefits from peer-review and Plotly's products will continue to be the most cutting-edge offering for exploratory visualization. Plotly.js has the quality, accessibility, and scope to be the charting standard for the Web, but we can only achieve this breadth by working across communities and making the distribution truly unencumbered, portable, and free.

Despite the possibilities that the web offers, the core plotting libraries in scientific software like MATLAB, R, and Python still create static image files rather than dynamic, interactive charts. Many technical and scientific projects still don't embrace web technology because of JavaScript libraries being commercially developed, expensive, narrow in scope, or difficult to learn and use. By open-sourcing Plotly’s easy-to-use, comprehensive library, Plotly hopes to bring the power of interactive plotting to every developer, team, data scientist, and analyst.

Plotly.js was instigated by [Dr. Alex Johnson](http://environment.harvard.edu/about/fellows/alex-johnson) and has been in development for over 3 years.

 Access the [GitHub repository here](https://github.com/plotly/plotly.js).

<div>
    <a href="https://plot.ly/~jackp/15667/" target="_blank" title="Petal Length vs Sepal Width" style="display: block; text-align: center;"><img src="https://plot.ly/~jackp/15667.png" alt="Petal Length vs Sepal Width" style="max-width: 100%;width: 925px;"  width="925" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="jackp:15667"  src="https://plot.ly/embed.js" async></script>
</div>

A contour density plot drawn with plotly.js. Visit the [plotly.js documentation](https://plot.ly/javascript/) to to get started.

## Plotly.js Highlights

#### Seven details that make the project unique

1. **Scientific grade.** Plotly.js is comparable in scope and features to MATLAB or Python’s matplotlib, but written in JavaScript, the language of the Web.

2. **SVG & WebGL backends.** Plotly.js uses both D3.js (SVG) and WebGL for graphics rendering. WebGL allows interactive rendering of hundreds of thousands to millions of x-y points, while D3.js is more practical for up to tens of thousands of points and vector-quality image export.

3. **Testing framework.** For [code contributors](https://github.com/plotly/plotly.js/blob/master/CONTRIBUTING.md), the plotly.js image testing framework makes it the most stable JavaScript charting library available.

4. **User documentation.** The [plotly.js documentation](https://plot.ly/javascript) is hosted on GitHub pages and is open-source under a Creative Commons license.

5. **No dependencies.** Plotly.js is an “all-in-one bundle” with d3.js and stack.gl modules baked-in.

6. **No jQuery.** jQuery has been removed from plotly.js for significantly better performance and improved browser compatibility.

7. **Powered by a JSON schema** Plotly.js is based on a new open-source [JSON schema](http://help.plot.ly/json-chart-schema/) for creating, saving, and sharing scientific charts.

#### A new JSON schema for data visualization

Plotly.js is based on a declarative, open-source [JSON schema](http://help.plot.ly/json-chart-schema/) that attempts to describe every physical aspect of any scientific chart. With this approach, the role of plotly.js is simple: **plotly.js takes the JSON specification of a chart and produces it as an interactive visualization.**

The JSON schema makes Plotly charts *language agnostic* - They can be easily translated from one format to another:

- Interactive chart: [https://plot.ly/~empet/6640](https://plot.ly/~empet/6640)
- JSON specification: [https://plot.ly/~empet/6640.json](https://plot.ly/~empet/6640.json)
- plotly.js code: [https://plot.ly/~empet/6640.json](https://plot.ly/~empet/6640.js)
- Raster image: [https://plot.ly/~empet/6640.png](https://plot.ly/~empet/6640.png)
- Vector image: [https://plot.ly/~empet/6640.svg](https://plot.ly/~empet/6640.svg)
- Python code: [https://plot.ly/~empet/6640.py](https://plot.ly/~empet/6640.py)
- CSV data: [https://plot.ly/~empet/6640.csv](https://plot.ly/~empet/6640.csv)

Browse Plotly’s community-created [chart feed](https://plot.ly/feed/) and append “.json” to the URL of any chart to see its JSON specification.

#### Distinction from vega and vega-lite

The plotly.js JSON schema and API is more like MATLAB or Python’s matplotlib than most JavaScript charting libraries available. It focuses on the chart’s physical attributes and attempts to leave the chart data separate (a workflow that scientists and engineers are accustomed to). For chart types that require binning (contour plots, histograms) or min-max decimation (line plots with >100k lines), some precomputation in JavaScript has been unavoidable.

The vega and vega-lite schemas are more opinionated in prescribing how the chart data is grouped, sliced, or statistically processed before graphical display. This allows for complicated chart display with a concise JSON description, but leaves less control to the user. Neither approach is more “correct”—they’re just different.

## Implications for developers

#### JavaScript Developers

The latest full version of plotly.js is available for free, unlimited use in any project. Plotly.js code uses the MIT open-source license, the same license used by Bootstrap.js. The MIT open-source license puts no restrictions on how the code is used. Licensees who have previously purchased a plotly.js commercial license will no longer be charged the annual license fee and are encouraged to update to the latest plotly.js version under the MIT license.

The latest version of plotly.js can be downloaded from GitHub or the [documentation home](https://plot.ly/javascript/).

```<script src=”https://cdn.plot.ly/plotly-latest.min.js”>```

#### R, Python, & MATLAB Engineers and Data Scientists

Plotly can now be used 100% offline in RStudio, MATLAB, or Jupyter notebook free-of-charge. The R, Python, and MATLAB clients for Plotly have always been open-source, while the core graphics layer—plotly.js—was closed-source. Now the entire stack is open-source.

This makes for a better user experience:

- There is no round-trip to Plotly’s server, so plotting is **fast.**
- For the same reason, you can plot more data.
- In RStudio, Plotly charts now appear natively in RStudio instead of opening in a browser tab.
- Everything is local — You can create charts completely independently from Plotly’s online platform.

[Download for IPython notebook](https://plot.ly/python/getting-started/) | [Download for RStudio](https://plot.ly/r/getting-started/) | [Download for MATLAB](https://plot.ly/matlab/getting-started/)

## Future plans and contributing

The plotly.js roadmap is constantly changing, but 2016 is likely to be focused on performance. We would like the higher performance 2D WebGL graphics backend to reach feature parity with the more mature SVG (D3.js) backend.

If you’re a JavaScript developer, consider taking a look at the plotly.js code on [GitHub](https://github.com/plotly/plotly.js). Submitting Codepen examples to [community.plot.ly](http://community.plot.ly/c/plotly-js) for the documentation is also a great way to contribute.

If you’re an R, Python, MATLAB, or Julia developer please consider contributing to one of the clients on [Plotly's GitHub](http://github.com/plotly/).

## Humans behind the project

#### Plotly.js core developers

- **Alex Johnson**: Plotly.js lead developer, architect, and instigator
- **Mikola Lysenko**: Stack.gl WebGL work lead
- **Étienne Tétreault-Pinard**: Geospatial work lead
- **Chris Parmer**: Documentation lead
- **Ben Postlethwaite**: Image testing server lead

#### R, Python, and MATLAB client developers

These domain specific libraries are allowing data scientists and engineers to easily create D3.js and stack.gl Plotly charts without any knowledge of JavaScript.

- **Python**: Andrew Seier, Chelsea Douglas, Chris Parmer, Étienne Tétreault-Pinard
- **R**: Carson Sievert, Marianne Corvellec, Toby Dylan Hocking, Baobao Zhang
- **MATLAB**: Chuck Bronson, Chris Parmer

#### Financial sponsors

- Siemens Corporation
- National Research Council of Canada
- Rho Canada Ventures
- MHS Capital
