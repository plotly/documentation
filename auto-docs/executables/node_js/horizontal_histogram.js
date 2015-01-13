// Learn about API authentication here: {{BASE_URL}}/nodejs/getting-started
// Find your api_key here: {{BASE_URL}}/settings/api

var y = [];

for (var i = 0; i < 500; i ++) {
	y[i] = Math.random();
}

var plotly = require('plotly')('TestBot', 'r1neazxo9w');
var data = [
  {
    y: y, 
    type: "histogram"
  }
];
var graphOptions = {filename: "horizontal-histogram", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
