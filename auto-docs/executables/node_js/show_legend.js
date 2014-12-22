// Learn about API authentication here: plot.ly/nodejs/getting-started
// Find your api_key here: plot.ly/settings/api

var plotly = require('plotly')('TestBot', 'r1neazxo9w');


var trace1 = {
  x: [0, 1, 2], 
  y: [1, 2, 3], 
  name: "First Trace", 
  showlegend: false, 
  type: "scatter"
};
var trace2 = {
  x: [0, 1, 2, 3], 
  y: [8, 4, 2, 0], 
  name: "Second Trace", 
  showlegend: true, 
  type: "scatter"
};
var data = [trace1, trace2];
var graphOptions = {filename: "show-legend", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
