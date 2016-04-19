---
title: Plotly.js Function Reference
name: Plotly.js Function Reference
permalink: /javascript/plotlyjs-function-reference
layout: langindex
nosidebar: true
language: plotly_js
description: Plotly.js function reference. How to create, update, and modify graphs drawn with Plotly's Javascript Graphing Library.
redirect_from: /javascript-graphing-library/plotlyjs-function-reference
---

<h1 id="plotlyjs-function-reference" class="centered"><a class="no_underline" href="#plotlyjs-function-reference">Plotly Function Reference</a></h1>
<br><br><br>
<div class="row">
    <div class="four columns">
      <div class="toc" style="border-right: 1px solid #f3f3f3; padding-right: 20px;"><br><br>
          <ul>
              <li><a href="#other-resources" class="attribute-name"><p class="left-align">Other Plotly.js resources</p></a></li>
              <li><a href="#retrieving-data-layout" class="attribute-name"><p class="left-align">Retrieving the plot 'data' or 'layout' objects</p></a></li>
              <li><a href="#plotly-newplot" class="attribute-name"><p class="left-align">Plot with Plotly.newPlot</p></a></li>
              <li><a href="#plotly-restyle" class="attribute-name"><p class="left-align">Edit attributes with Plotly.restyle</p></a></li>
              <li><a href="#plotly-relayout" class="attribute-name"><p class="left-align">Update Layout Attributes with Plotly.relayout</p></a></li>
              <li><a href="#plotly-addtraces" class="attribute-name"><p class="left-align">Add Traces with Plotly.addTraces</p></a></li>
              <li><a href="#plotly-deletetraces" class="attribute-name"><p class="left-align">Delete traces with Plotly.deleteTraces</p></a></li>
              <li><a href="#plotly-movetraces" class="attribute-name"><p class="left-align">Move traces with Plotly.moveTraces</p></a></li>
              <li><a href="#plotly-redraw" class="attribute-name"><p class="left-align">Redraw with Plotly.redraw</p></a></li>
              <li><a href="#plotly-events" class="attribute-name"><p class="left-align">Using events</p></a></li>
          </ul>
      </div>
    </div>
<div class="eight columns">
<h4 id="other-resources"><a class="no_underline plot-blue" href="#other-resources">Other Plotly.js Resources</a></h4>

<ul>
<li><p><a href="/javascript/">Simple examples of Plotly.js graphs</a></p></li>
<li><p><a class="no_underline" href="/javascript/reference">Reference of all of valid keys of Plotly.js graphs</a></p></li>
<li><p>Find the JSON description of <b>any</b> plotly graph by adding <code>.json</code> to the end of <b>any</b> Plotly graph url. For example, the JSON to describe this graph: <a class="no_underline" href="https://plot.ly/~PlotBot/82">https://plot.ly/~PlotBot/82</a> is here : <a class="no_underline" href="https://plot.ly/~PlotBot/82.json">https://plot.ly/~PlotBot/82.json</a></p></li>
<li><p><a class="no_underline" href="https://github.com/plotly/postMessage-API">Updating hosted Plotly graphs through iFrames with our postMessage API</a></p></li>
<li><p>Support: <a class="no_underline" href="http://stackoverflow.com/questions/tagged/plotly?sort=newest&pageSize=15">StackOverflow</a> <a class="no_underline" href="http://community.plot.ly/">community.plot.ly/</a></p></li>
</ul>

<h4 id="retrieving-data-layout"><a class="no_underline plot-blue" href="#retrieving-data-layout">Retrieving the plot <code>data</code> or <code>layout</code></pre> objects</a></h4>

The plot <code>data</code> or <code>layout</code> can  be retrieved from the <code>&lt;div&gt;</code> element in which the plot was drawn:

<pre><code class="language-javascript hljs" data-lang="javascript">
var data = [trace1, trace2, trace3];
Plotly.newPlot('examplePlot', data, {title:'My Plot'});

var plotDiv = document.getElementById('examplePlot');
var plotData = plotDiv.data;
</code></pre>

<h4 id="plotly-newplot"><a>Plot with <code>Plotly.newPlot</code></a></h4>

Use <code>newPlot</code> to create a new plot in an empty <code>&lt;div&gt;</code> element.
A note on sizing: You can either supply height and width in <code>layout</code>, or give <code>graphDiv</code> a height and width in css.

<pre><code class="language-javascript hljs" data-lang="javascript">
var trace1 = {
  x: [1999, 2000, 2001, 2002],
  y: [10, 15, 13, 17],
  type: 'scatter'
};
var trace2 = {
  x: [1999, 2000, 2001, 2002],
  y: [16, 5, 11, 9],
  type: 'scatter'
};
var data = [trace1, trace2];
var layout = {
  title: 'Sales Growth',
  xaxis: {
    title: 'Year',
    showgrid: false,
    zeroline: false
  },
  yaxis: {
    title: 'Percent',
    showline: false
  }
};
Plotly.newPlot(graphDiv, data, layout);

// deprecated: calling plot again will add new trace(s) to the plot,
// but will ignore new layout.
var data2 = [{
  x: [1999, 2000, 2001, 2002],
  y: [10, 9, 8, 7],
  type: 'scatter'
}];
var layout2 = {title: 'Revenue'};
Plotly.newPlot(graphDiv, data2, layout2);
</code></pre>
<br>

<p data-height="440" data-theme-id="15263" data-slug-hash="meaKwE" data-default-tab="result" data-user="plotly" class='codepen' data-preview="true">See the Pen <a href='http://codepen.io/plotly/pen/meaKwE/'>Plotly.newPlot</a> by plotly (<a href='http://codepen.io/plotly'>@plotly</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<br>

You can hide the link to Plotly's cloud with <code>{showLink: false}</code> as the 4th argument.<br>
<code>Plotly.plot(divid, data, layout, {showLink: false})</code>

There are several other options that you can supply as the fourth argument. See more examples of the <a href="https://plot.ly/javascript/configuration-options/">configuration options.</a>

<h4 id="plotly-restyle"><a class="no_underline plot-blue" href="#plotly-restyle">Edit attributes with <code>Plotly.restyle</code></a></h4>

A more efficient means of changing parameters in the data array. When restyling, you may choose to have the specified changes effect as many traces as desired. The update is given as a single object and the traces that are effected are given as a list of traces indices. Note, leaving the trace indices unspecified assumes that you want to restyle <b>all</b> the traces.

<pre><code class="language-javascript hljs" data-lang="javascript">
// restyle a single trace using attribute strings
var update = {
    opacity: 0.4,
    marker.color: 'red'
};
Plotly.restyle(graphDiv, update, 0);

// restyle all traces using attribute strings
var update = {
    opacity: 0.4,
    marker.color: 'red'
};
Plotly.restyle(graphDiv, update);

// restyle two traces using attribute strings
var update = {
    opacity: 0.4,
    marker.color: 'red'
};
Plotly.restyle(graphDiv, update, [1, 2]);
</code></pre>

<br>

<p data-height="400" data-theme-id="15263" data-slug-hash="meaKYw" data-default-tab="result" data-user="plotly" class='codepen' data-preview="true">See the Pen <a href='http://codepen.io/plotly/pen/meaKYw/'>Plotly.restyle</a> by plotly (<a href='http://codepen.io/plotly'>@plotly</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<br>

The above examples have applied values across single or multiple traces. However, you can also specify <b>arrays</b> of values to apply to traces <b>in turn</b>.

<pre><code class="language-javascript hljs" data-lang="javascript">
// restyle the first trace's marker color 'red' and the second's 'green'
var update = {
    marker.color: ['red', 'green']
};
Plotly.restyle(graphDiv, update, [0, 1])

// alternate between red and green for all traces (note omission of traces)
var update = {
    marker.color: ['red', 'green']
};
Plotly.restyle(graphDiv, update)
</code></pre>

<br>

<p data-height="515" data-theme-id="15263" data-slug-hash="NGeBGL" data-default-tab="result" data-user="plotly" class='codepen' data-preview="true">See the Pen <a href='http://codepen.io/plotly/pen/NGeBGL/'>Plotly.restyle Traces in Turn</a> by plotly (<a href='http://codepen.io/plotly'>@plotly</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<br>

In restyle, arrays are assumed to be used in conjunction with the trace indices provided. Therefore, to apply an array <b>as a value</b>, you need to wrap it in an additional array. For example:

<pre><code class="language-javascript hljs" data-lang="javascript">
// update the color attribute of the first trace so that the markers within the same trace
// have different colors
var update = {
    marker.color: [['red', 'green']]
}
Plotly.restyle(graphDiv, update, [0])

// update two traces with new z data
var update = {z: [[[1,2,3], [2,1,2], [1,1,1]], [[0,1,1], [0,2,1], [3,2,1]]]};
Plotly.restyle(graphDiv, update, [1, 2])
</code></pre>

<br>

<p data-height="502" data-theme-id="15263" data-slug-hash="wKRxJE" data-default-tab="result" data-user="plotly" class='codepen' data-preview="true">See the Pen <a href='http://codepen.io/plotly/pen/wKRxJE/'>Plotly.restyle Arrays </a> by plotly (<a href='http://codepen.io/plotly'>@plotly</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<br>

The term <b>attribute strings</b> is used above to mean <b>flattened</b> (e.g., <code>{marker: {color: 'red'}}</code> vs. <code>{'marker.color': red}</code>). When you pass an attribute string to restyle inside the update object, it’s assumed to mean <b>update only this attribute</b>. Therefore, if you wish to replace and entire sub-object, you may simply specify <b>one less level of nesting</b>.

<pre><code class="language-javascript hljs" data-lang="javascript">
// replace the entire marker object with the one provided
var update = {
    marker: {color: 'red'}
};
Plotly.restyle(graphDiv, update, [0])
</code></pre>

<br>

<p data-height="528" data-theme-id="15263" data-slug-hash="LpMBOy" data-default-tab="result" data-user="plotly" class='codepen' data-preview="true">See the Pen <a href='http://codepen.io/plotly/pen/LpMBOy/'>Plotly.restyle Attribute strings </a> by plotly (<a href='http://codepen.io/plotly'>@plotly</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<br>

<h4 id="plotly-relayout"><a class="no_underline plot-blue" href="#plotly-relayout">Update layout attributes with <code>Plotly.relayout</code></a></h4>

A more efficient means of updating just the layout in a graphDiv. The call signature and arguments for relayout are similar (but simpler) to restyle. Because there are no indices to deal with, arrays need not be wrapped. Also, no argument specifying applicable trace indices is passed in.

<pre><code class="language-javascript hljs" data-lang="javascript">
// update only values within nested objects
var update = {
    title: 'New Title',
    'xaxis.range': [0, 5]
};
Plotly.relayout(graphDiv, update)
</code></pre>

<br>

<p data-height="526" data-theme-id="15263" data-slug-hash="meajqx" data-default-tab="result" data-user="plotly" class='codepen' data-preview="true">See the Pen <a href='http://codepen.io/plotly/pen/meajqx/'>Plotly.relayout</a> by plotly (<a href='http://codepen.io/plotly'>@plotly</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<br>

Again, caution should be taken regarding flat <b>attribute strings</b> vs sub-objects used with relayout. In the above example, the value for <code>range</code> <b>in</b> <code>xaxis</code> is update. Conversly, below, the <code>xaxis</code> object is <b>replaced</b> with one that only has the range value:

<pre><code class="language-javascript hljs" data-lang="javascript">
// update an entire nested object with relayout
var update = {
    tile: 'some new title',
    xaxis: {range: [0, 5]}
};
Plotly.relayout(graphDiv, update)
</code></pre>

<br>

<p data-height="507" data-theme-id="15263" data-slug-hash="jbXpZj" data-default-tab="result" data-user="plotly" class='codepen' data-preview="true">See the Pen <a href='http://codepen.io/plotly/pen/jbXpZj/'>Plotly.relayout - xaxis replace</a> by plotly (<a href='http://codepen.io/plotly'>@plotly</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<br>

<h4 id="plotly-addtraces"><a class="no_underline plot-blue" href="#plotly-addtraces">Add Traces with <code>Plotly.addTraces</code></a></h4>

This allows you to add <b>new</b> traces to an existing <code>graphDiv</code> at any location in its data array.

<pre><code class="language-javascript hljs" data-lang="javascript">
// add a single trace to an existing graphDiv
Plotly.addTraces(graphDiv, {y: [2,1,2]});

// add two traces
Plotly.addTraces(graphDiv, [{y: [2,1,2]}, {y: [4, 5, 7]}]);

// add a trace at the beginning of the data array
Plotly.addTraces(graphDiv, {y: [1, 5, 7]}, 0);
</code></pre>

<br>

<p data-height="510" data-theme-id="15263" data-slug-hash="xwmJvL" data-default-tab="result" data-user="plotly" class='codepen' data-preview="true">See the Pen <a href='http://codepen.io/plotly/pen/xwmJvL/'>Plotly.addtraces</a> by plotly (<a href='http://codepen.io/plotly'>@plotly</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<br>

<h4 id="plotly-deletetraces"><a class="no_underline plot-blue" href="#plotly-deletetraces">Delete Traces with <code>Plotly.deleteTraces</code></a></h4>

This allows you to remove traces from an existing <code>graphDiv</code> by specifying the indices of the traces to be removed.

<pre><code class="language-javascript hljs" data-lang="javascript">
// remove the first trace
Plotly.deleteTraces(graphDiv, 0);

// remove the last two traces
Plotly.deleteTraces(graphDiv, [-2, -1]);
</code></pre>

<br>

<p data-height="503" data-theme-id="15263" data-slug-hash="meaGRo" data-default-tab="result" data-user="plotly" class='codepen' data-preview="true">See the Pen <a href='http://codepen.io/plotly/pen/meaGRo/'>Plotly.deleteTraces</a> by plotly (<a href='http://codepen.io/plotly'>@plotly</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<br>

<h4 id="plotly-movetraces"><a class="no_underline plot-blue" href="#plotly-movetraces">Move Traces with <code>Plotly.moveTraces</code></a></h4>

This allows you to reorder traces in an existing <code>graphDiv</code>. This will change the ordering of the layering and the legend.

<pre><code class="language-javascript hljs" data-lang="javascript">
// move the first trace (at index 0) the the end of the data array
Plotly.moveTraces(graphDiv, 0);

// move selected traces (at indices [0, 3, 5]) to the end of the data array
Plotly.moveTraces(graphDiv, [0, 3, 5]);

// move last trace (at index -1) to the beginning of the data array (index 0)
Plotly.moveTraces(graphDiv, -1, 0);

// move selected traces (at indices [1, 4, 5]) to new indices [0, 3, 2]
Plotly.moveTraces(graphDiv, [1, 4, 5], [0, 3, 2]);
</code></pre>

<br>

<p data-height="500" data-theme-id="15263" data-slug-hash="LpMJyB" data-default-tab="result" data-user="plotly" class='codepen' data-preview="true">See the Pen <a href='http://codepen.io/plotly/pen/LpMJyB/'>Plotly.moveTraces</a> by plotly (<a href='http://codepen.io/plotly'>@plotly</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<br>

<h4 id="plotly-redraw"><a class="no_underline plot-blue" href="#plotly-redraw">Redraw with <code>Plotly.redraw</code></a></h4>

Use <code>redraw</code> to trigger a complete recalculation and redraw of the graph. This is not the fastest way to change single attributes, but may be the simplest way. You can make any arbitrary change to the data and layout objects, including completely replacing them, then call redraw.

<pre><code class="language-javascript hljs" data-lang="javascript">
// make a modification to a graphDiv's data and redraw
graphDiv.data[0].opacity = 0.4;
Plotly.redraw(graphDiv);

// make many modifications and redraw
graphDiv.data[1].marker.color = 'red';
graphDiv.data.push({x: [1,2,3,4], y: [4,3,2,1], mode: 'lines+markers'})
graphDiv.layout.showlegend = false;
Plotly.redraw(graphDiv);
</code></pre>

<br>

<p data-height="515" data-theme-id="15263" data-slug-hash="GpPXdV" data-default-tab="result" data-user="plotly" class='codepen' data-preview="true">See the Pen <a href='http://codepen.io/plotly/pen/GpPXdV/'>Plotly.redraw</a> by plotly (<a href='http://codepen.io/plotly'>@plotly</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<br>

<h4 id="plotly-events"><a class="no_underline plot-blue" href="#plotly-redraw">Using events</a></h4>

Plots emit events prefixed with <code>plotly_</code> when clicked or hovered over, and event handlers can be bound to events using the <code>on</code> method that is exposed by the plot div object. It is possible to use jQuery events, but plotly.js no longer bundles jQuery, so we recommend using the plotly.js implementation.

<pre><code class="language-javascript hljs" data-lang="javascript">
// You can obtain the plot using document.getElementById('graphDiv')
graphDiv.on('plotly_click', function(data){
    // do something using the event data
});
</code></pre>

<br>

As well as <code>plotly\_click</code>, there is <code>plotly\_beforehover</code>, <code>plotly\_hover</code> and <code>plotly_unhover</code>.

<br>

<h4 id="plotly-plot"><a class="no_underline plot-blue" href="#note-plotly-plot">A note on <code>Plotly.plot</code></a></h4>

<code>Plotly.plot</code> is like <code>newPlot</code>, but it isn't idempotent (you can't call it multiple times in a row).
    </div>
</div>
