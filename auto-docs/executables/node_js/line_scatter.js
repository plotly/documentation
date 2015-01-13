// Learn about API authentication here: {BASE_URL}/nodejs/getting-started
// Find your api_key here: {BASE_URL}/settings/api

var plotly = require('plotly')('TestBot', 'r1neazxo9w');
var trace1 = {
  x: [1, 2, 3, 4], 
  y: [10, 15, 13, 17], 
  mode: "markers", 
  type: "scatter"
};
var trace2 = {
  x: [2, 3, 4, 5], 
  y: [16, 5, 11, 9], 
  mode: "lines", 
  type: "scatter"
};
var trace3 = {
  x: [1, 2, 3, 4], 
  y: [12, 9, 15, 12], 
  mode: "lines+markers", 
  type: "scatter"
};
var data = [trace1, trace2, trace3];
var graphOptions = {filename: "line-scatter", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
