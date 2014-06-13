var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var x0 = Math.random() * 500
var x1 = Math.random() * 500 + 1
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

var graph_options = {filename: "overlaid-histogram", fileopt: "overwrite", layout: layout, auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});