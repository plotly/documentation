// Learn about API authentication here: plot.ly/nodejs/getting-started
// Find your api_key here: plot.ly/settings/api

var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var y = [];

for (var i = 0; i < 500; i ++) {
	y[i] = Math.random();
}


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
