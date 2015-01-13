// Learn about API authentication here: {{BASE_URL}}/nodejs/getting-started
// Find your api_key here: {{BASE_URL}}/settings/api

var x0 = Math.random() * 500
var x1 = Math.random() * 500 + 1

var plotly = require('plotly')('TestBot', 'r1neazxo9w');
var trace1 = {
  x: x0, 
  type: "histogram"
};
var trace2 = {
  x: x1, 
  type: "histogram"
};
var data = [trace1, trace2];
var layout = {barmode: "stack"};
var graphOptions = {layout: layout, filename: "stacked-histogram", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
