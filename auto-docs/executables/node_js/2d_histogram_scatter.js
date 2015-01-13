// Learn about API authentication here: {BASE_URL}/nodejs/getting-started
// Find your api_key here: {BASE_URL}/settings/api

var x0 = [];
var y0 = [];
var x1 = [];
var y1 = [];

for (var i = 0; i < 500; i ++) {
	x0[i] = Math.random() / 5 * 0.5;
	y0[i] = Math.random() / 5 * 0.5;
}

for (var i = 0; i < 50; i ++) {
	x1[i] = Math.random();
	y1[i] = Math.random() + 1;
}

var x = [x0, x1]
var y = [y0, y1]

var plotly = require('plotly')('TestBot', 'r1neazxo9w');
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
var graphOptions = {filename: "2d-histogram-scatter", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
