var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var x0 = Math.random() * 500
var x1 = Math.random() * 500 + 1
var trace1 = {
  x: x0, 
  name: "control", 
  marker: {
    line: {
      color: "grey", 
      width: 0
    }, 
    color: "fuchsia", 
    opacity: 0.75
  }, 
  autobinx: false, 
  xbins: {
    start: -3.2, 
    end: 2.8, 
    size: 0.2
  }, 
  histnorm: "count", 
  type: "histogram"
};
var trace2 = {
  x: x1, 
  name: "experimental", 
  marker: {color: "rgb(255, 217, 102)"}, 
  opacity: 0.75, 
  autobinx: false, 
  xbins: {
    start: -1.8, 
    end: 4.2, 
    size: 0.2
  }, 
  type: "histogram"
};
var data = [trace1, trace2];
var layout = {
  title: "Sampled Results", 
  xaxis: {title: "Value"}, 
  yaxis: {title: "Count"}, 
  barmode: "overlay", 
  bargap: 0.25, 
  bargroupgap: 0.3, 
  bardir: "v"
};

var graph_options = {filename: "style-histogram", fileopt: "overwrite", layout: layout, auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});