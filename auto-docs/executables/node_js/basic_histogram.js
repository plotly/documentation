// Learn about API authentication here: {BASE_URL}/nodejs/getting-started
// Find your api_key here: {BASE_URL}/settings/api

var x = [];

for (var i = 0; i < 500; i ++) {
	x[i] = Math.random();
}

var plotly = require('plotly')('TestBot', 'r1neazxo9w');
var data = [
  {
    x: x, 
    type: "histogram"
  }
];
var graphOptions = {filename: "basic-histogram", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
