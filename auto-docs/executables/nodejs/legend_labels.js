var plotly = require('plotly')('TestBot', 'r1neazxo9w')
var trace1 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [0, 3, 6, 4, 5, 2, 3, 5, 4], 
  name: "Blue Trace", 
  type: "scatter"
};
var trace2 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [0, 4, 7, 8, 3, 6, 3, 3, 4], 
  name: "Orange Trace", 
  type: "scatter"
};
var data = [trace1, trace2];
var graph_options = {auto_open: false, fileopt: "overwrite", filename: "legend-labels"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});