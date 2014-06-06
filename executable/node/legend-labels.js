var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var trace1 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [0, 3, 6, 4, 5, 2, 3, 5, 4], 
  name: "Orange Trace", 
  type: "scatter"
};
var trace2 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [0, 4, 7, 8, 3, 6, 3, 3, 4], 
  name: "Blue Trace", 
  type: "scatter"
};
var data = [trace1, trace2];

var graph_options = {filename: "legend-labels", fileopt: "overwrite"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});