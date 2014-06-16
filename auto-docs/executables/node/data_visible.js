var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var trace1 = {
  x: [0, 1, 2, 3], 
  y: [0, 2, 4, 6], 
  visible: true, 
  type: "scatter"
};
var trace2 = {
  x: [0, 1, 2, 3], 
  y: [8, 4, 2, 0], 
  visible: false, 
  type: "scatter"
};
var data = [trace1, trace2];

var graph_options = {filename: "data-visible", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});