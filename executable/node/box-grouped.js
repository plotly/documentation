var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var x = ['day 1', 'day 1', 'day 1', 'day 1', 'day 1', 'day 1',
         'day 2', 'day 2', 'day 2', 'day 2', 'day 2', 'day 2']

var trace1 = {
  y: [0.2, 0.2, 0.6, 1.0, 0.5, 0.4, 0.2, 0.7, 0.9, 0.1, 0.5, 0.3], 
  x: x, 
  name: "kale", 
  marker: {color: "#3D9970"}, 
  type: "box"
};
var trace2 = {
  y: [0.6, 0.7, 0.3, 0.6, 0.0, 0.5, 0.7, 0.9, 0.5, 0.8, 0.7, 0.2], 
  x: x, 
  name: "radishes", 
  marker: {color: "#FF4136"}, 
  type: "box"
};
var trace3 = {
  y: [0.1, 0.3, 0.1, 0.9, 0.6, 0.6, 0.9, 1.0, 0.3, 0.6, 0.8, 0.5], 
  x: x, 
  name: "carrots", 
  marker: {color: "#FF851B"}, 
  type: "box"
};
var data = [trace1, trace2, trace3];
var layout = {
  yaxis: {
    title: "normalized moisture", 
    zeroline: false
  }, 
  boxmode: "group"
};

var graph_options = {filename: "box-grouped", fileopt: "overwrite", layout: layout}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});