---
title: Plotly.js Function Reference
name: Plotly.js Function Reference
permalink: /javascript/plotlyjs-function-reference
layout: getstart
language: plotly_js
description: Plotly.js function reference. How to create, update, and modify graphs drawn with Plotly's Javascript Graphing Library.
redirect_from: /javascript-graphing-library/plotlyjs-function-reference
---

# Plotly Object Reference

#### Other Plotly.js Resources</h5>

- [Simple examples of Plotly.js graphs](https://plot.ly/javascript/)
- [Reference of all of valid keys of Plotly.js graphs](https://plot.ly/javascript/reference)
- Find the JSON description of **any** plotly graph by adding `.json` to the end of **any** Plotly graph url.
For example, the JSON to describe this graph: [https://plot.ly/~PlotBot/82](https://plot.ly/~PlotBot/82)
is here: [https://plot.ly/~PlotBot/82.json](https://plot.ly/~PlotBot/82.json)
- [Updating hosted Plotly graphs through iFrames with our postMessage API](https://github.com/plotly/postMessage-API)
- Support: [StackOverflow](http://stackoverflow.com/questions/tagged/plotly?sort=newest&pageSize=15), [@plotlygraphs](https://twitter.com/plotlygraphs)


### Plot with `Plotly.newPlot`

Use `newPlot` to create a new plot in an empty `<div>` element.
A note on sizing: You can either supply height and width in `layout`, or give `graphDiv` a height and width in css.

```
var trace1 = {
  x: [1999, 2000, 2001, 2002],
  y: [10, 15, 13, 17],
  type: "scatter"
};
var trace2 = {
  x: [1999, 2000, 2001, 2002],
  y: [16, 5, 11, 9],
  type: "scatter"
};
var data = [trace1, trace2];
var layout = {
  title: "Sales Growth",
  xaxis: {
    title: "Year",
    showgrid: false,
    zeroline: false
  },
  yaxis: {
    title: "Percent",
    showline: false
  }
};
Plotly.newPlot(graphDiv, data, layout);

// deprecated: calling plot again will add new trace(s) to the plot,
// but will ignore new layout.
var data2 = [{
  x: [1999, 2000, 2001, 2002],
  y: [10, 9, 8, 7],
  type: "scatter"
}];
var layout2 = {title: "Revenue"};
Plotly.newPlot(graphDiv, data2, layout2);
```

You can hide the link to Plotly's cloud with ```{showLink: false}``` as the 4th argument.
```
Plotly.plot(divid, data, layout, {showLink: false})
```

### Edit attributes with `Plotly.restyle`

A more efficient means of changing parameters in the data array. When restyling, you may choose to have the specified changes effect as many traces as desired. The update is given as a single object and the traces that are effected are given as a list of traces indices. Note, leaving the trace indices unspecified assumes that you want to restyle **all** the traces.

```javascript
// restyle a single trace using attribute strings
var update = {
    'opacity': 0.4,
    'marker.color' = 'red'
};
Plotly.restyle(graphDiv, update, 0);

// restyle all traces using attribute strings
var update = {
    'opacity': 0.4,
    'marker.color' = 'red'
};
Plotly.restyle(graphDiv, update);

// restyle two traces using attribute strings
var update = {
    'opacity': 0.4,
    'marker.color' = 'red'
};
Plotly.restyle(graphDiv, update, [1, 2]);
```


The above examples have applied values across single or multiple traces. However, you can also specify **arrays** of values to apply to traces **in turn**.

```javascript
// restyle the first trace's marker color 'red' and the second's 'green'
var update = {
    'marker.color': ['red', 'green']
};
Plotly.restyle(graphDiv, update, [0, 1])

// alternate between red and green for all traces (note omission of traces)
var update = {
    'marker.color': ['red', 'green']
};
Plotly.restyle(graphDiv, update)
```


In restyle, arrays are assumed to be used in conjunction with the trace indices provided. Therefore, to apply an array **as a value**, you need to wrap it in an additional array. For example:

```javascript
// update the color attribute of the first trace so that the markers within the same trace
// have different colors
var update = {
    'marker.color': [['red', 'green']]
}
Plotly.restyle(graphDiv, update, [0])

// update two traces with new z data
var update = {'z': [[[1,2,3], [2,1,2], [1,1,1]], [[0,1,1], [0,2,1], [3,2,1]]]};
Plotly.restyle(graphDiv, update, [1, 2])
```


The term **attribute strings** is used above to mean **flattened** (e.g., `{marker: {color: 'red'}}` vs. `{'marker.color': red}`). When you pass an attribute string to restyle inside the update object, it’s assumed to mean **update only this attribute**. Therefore, if you wish to replace and entire sub-object, you may simply specify **one less level of nesting**.

```javascript
// replace the entire marker object with the one provided
var update = {
    'marker': {color: 'red'}
};
Plotly.restyle(graphDiv, update, [0])
```

### Update layout attributes with `Plotly.relayout`

A more efficient means of updating just the layout in a graphDiv. The call signature and arguments for relayout are similar (but simpler) to restyle. Because there are no indices to deal with, arrays need not be wrapped. Also, no argument specifying applicable trace indices is passed in.

```javascript
// update only values *within* nested objects
var update = {
    title: 'some new title',
    'xaxis.range': [0, 5]
};
Plotly.relayout(graphDiv, update)
```


Again, caution should be taken regarding flat **attribute strings** vs sub-objects used with relayout. In the above example, the value for `range` **in** `xaxis` is update. Conversly, below, the `xaxis` object is **replaced** with one that only has the range value:

```javascript
// update an entire nested object with relayout
var update = {
  tile: 'some new title',
    xaxis: {range: [0, 5]}
};
Plotly.relayout(graphDiv, update)
```

### Add Traces with `Plotly.addTraces`

This allows you to add **new** traces to an existing `graphDiv` at any location in its data array.

```javascript
// add a single trace to an existing graphDiv
Plotly.addTraces(graphDiv, {'y': [2,1,2]});

// add two traces
Plotly.addTraces(graphDiv, [{'y': [2,1,2]}, {'y': [4, 5, 7]}]);

// add a trace at the beginning of the data array
Plotly.addTraces(graphDiv, {'y': [1, 5, 7]}, 0);
```

### Delete Traces with `Plotly.deleteTraces`

This allows you to remove traces from an existing `graphDiv` by specifying the indices of the traces to be removed.

```javascript
// remove the first trace
Plotly.deleteTraces(graphDiv, 0);

// remove the last two traces
Plotly.deleteTraces(graphDiv, [-2, -1]);
```

### Move Traces with `Plotly.moveTraces`

This allows you to reorder traces in an existing `graphDiv`. This will change the ordering of the layering and the legend.

```javascript
// move the first trace (at index 0) the the end of the data array
Plotly.moveTraces(graphDiv, 0);

// move selected traces (at indices [0, 3, 5]) to the end of the data array
Plotly.moveTraces(graphDiv, [0, 3, 5]);

// move last trace (at index -1) to the beginning of the data array (index 0)
Plotly.moveTraces(graphDiv, -1, 0);

// move selected traces (at indices [1, 4, 5]) to new indices [0, 3, 2]
Plotly.moveTraces(graphDiv, [1, 4, 5], [0, 3, 2]);
```

### Redraw with `Plotly.redraw`

Use `redraw` to trigger a complete recalculation and redraw of the graph. This is not the fastest way to change single attributes, but may be the simplest way. You can make any arbitrary change to the data and layout objects, including completely replacing them, then call redraw.

```
// make a modification to a `graphDiv`'s data and redraw
graphDiv.data[0].opacity = 0.4;
Plotly.redraw(graphDiv);

// make many modifications and redraw
graphDiv.data[1].marker.color = 'red';
graphDiv.data.push({x: [1,2,3,4], y: [4,3,2,1], mode: 'lines+markers'})
graphDiv.layout.showlegend = false;
Plotly.redraw(graphDiv);
```


### A note on `Plotly.plot`

`Plotly.plot` is like `newPlot`, but it isn't idempotent (you can't call it multiple times in a row).
