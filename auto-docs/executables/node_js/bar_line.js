// Learn about API authentication here: plot.ly/nodejs/getting-started
// Find your api_key here: plot.ly/settings/api

var plotly = require('plotly')('TestBot', 'r1neazxo9w')


var trace1 = {
  x: [0, 1, 2, 3, 4, 5], 
  y: [1.5, 1, 1.3, 0.7, 0.8, 0.9], 
  type: "scatter"
};
var trace2 = {
  x: [0, 1, 2, 3, 4, 5], 
  y: [1, 0.5, 0.7, -1.2, 0.3, 0.4], 
  type: "bar"
};
var data = [trace1, trace2];
var graphOptions = {filename: "bar-line", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
