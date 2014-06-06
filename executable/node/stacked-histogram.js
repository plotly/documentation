var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var x0 = Math.random() * 500
var x1 = Math.random() * 500 + 1

var trace1 = {
  x: x0, 
  type: "histogram"
};
var trace2 = {
  x: x1, 
  type: "histogram"
};
var data = [trace1, trace2];
var layout = {barmode: "stacked"};

var graph_options = {filename: "stacked-histogram", fileopt: "overwrite", layout: layout}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});