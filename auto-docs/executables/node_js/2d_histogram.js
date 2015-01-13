// Learn about API authentication here: {BASE_URL}/nodejs/getting-started
// Find your api_key here: {BASE_URL}/settings/api

var x = [];
var y = [];

for (var i = 0; i < 500; i ++) {
	x[i] = Math.random();
	y[i] = Math.random() + 1;
}

var plotly = require('plotly')('TestBot', 'r1neazxo9w');
var data = [
  {
    x: x, 
    y: y, 
    type: "histogram2d"
  }
];
var graphOptions = {filename: "2d-histogram", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
