// Learn about API authentication here: plot.ly/nodejs/getting-started
// Find your api_key here: plot.ly/settings/api

var plotly = require('plotly')('TestBot', 'r1neazxo9w')


var data = [
  {
    x: [2, 4, 6], 
    y: [-3, 0, 3], 
    type: "scatter"
  }
];
var layout = {
  showlegend: false, 
  xaxis: {
    rangemode: "tozero", 
    autorange: true
  }, 
  yaxis: {
    rangemode: "nonnegative", 
    autorange: true
  }
};
var graphOptions = {layout: layout, filename: "axes-range-mode", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
