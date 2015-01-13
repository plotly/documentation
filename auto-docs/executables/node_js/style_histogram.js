// Learn about API authentication here: {BASE_URL}/nodejs/getting-started
// Find your api_key here: {BASE_URL}/settings/api

var x0 = [];
var x1 = [];

for (var i = 0; i < 500; i ++) {
	x0[i] = Math.random();
	x1[i] = Math.random() + 1;
}

var plotly = require('plotly')('TestBot', 'r1neazxo9w');
var trace1 = {
  x: x0, 
  histnorm: "count", 
  name: "control", 
  autobinx: false, 
  xbins: {
    start: -3.2, 
    end: 2.8, 
    size: 0.2
  }, 
  marker: {
    color: "fuchsia", 
    line: {
      color: "grey", 
      width: 0
    }, 
    opacity: 0.75
  }, 
  type: "histogram"
};
var trace2 = {
  x: x1, 
  name: "experimental", 
  autobinx: false, 
  xbins: {
    start: -1.8, 
    end: 4.2, 
    size: 0.2
  }, 
  marker: {color: "rgb(255, 217, 102)"}, 
  opacity: 0.75, 
  type: "histogram"
};
var data = [trace1, trace2];
var layout = {
  title: "Sampled Results", 
  xaxis: {title: "Value"}, 
  yaxis: {title: "Count"}, 
  barmode: "overlay", 
  bargap: 0.25, 
  bargroupgap: 0.3
};
var graphOptions = {layout: layout, filename: "style-histogram", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
