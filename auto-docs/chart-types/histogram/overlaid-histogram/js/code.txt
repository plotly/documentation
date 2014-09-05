import numpy as np
x0 = np.random.randn(500)
x1 = np.random.randn(500)+1
var plotly = require('plotly')('TestBot', 'r1neazxo9w')
var trace1 = {
  x: x0, 
  opacity: 0.75, 
  type: "histogram"
};
var trace2 = {
  x: x1, 
  opacity: 0.75, 
  type: "histogram"
};
var data = [trace1, trace2];
var layout = {barmode: "overlay"};
var graph_options = {layout: layout, auto_open: false, fileopt: "overwrite", filename: "overlaid-histogram"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});