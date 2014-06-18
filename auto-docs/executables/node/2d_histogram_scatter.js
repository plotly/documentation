var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var x0 = (Math.random() * 100) / 5 + 0.5
var y0 = (Math.random() * 100) / 5 + 0.5
var x1 = Math.random() * 50
var y1 = Math.random() * 50 + 1.0


var x = [x0, x1]
var y = [y0, y1]
var trace1 = {
  x: x0, 
  y: y0, 
  mode: "markers", 
  marker: {
    symbol: "circle", 
    opacity: 0.7
  }, 
  type: "scatter"
};
var trace2 = {
  x: x1, 
  y: y1, 
  mode: "markers", 
  marker: {
    symbol: "square", 
    opacity: 0.7
  }, 
  type: "scatter"
};
var trace3 = {
  x: x, 
  y: y, 
  type: "histogram2d"
};
var data = [trace1, trace2, trace3];

var graph_options = {filename: "2d-histogram-scatter", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});