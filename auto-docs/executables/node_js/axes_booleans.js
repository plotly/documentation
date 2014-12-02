// Learn about API authentication here: plot.ly/nodejs/getting-started
// Find your api_key here: plot.ly/settings/api

var plotly = require('plotly')('TestBot', 'r1neazxo9w')


var trace1 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [8, 7, 6, 5, 4, 3, 2, 1, 0], 
  type: "scatter"
};
var trace2 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  type: "scatter"
};
var data = [trace1, trace2];
var layout = {
  xaxis: {
    autorange: true, 
    showgrid: false, 
    zeroline: false, 
    showline: false, 
    autotick: true, 
    ticks: "", 
    showticklabels: false
  }, 
  yaxis: {
    autorange: true, 
    showgrid: false, 
    zeroline: false, 
    showline: false, 
    autotick: true, 
    ticks: "", 
    showticklabels: false
  }
};
var graphOptions = {layout: layout, filename: "axes-booleans", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
