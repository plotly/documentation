var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

y0 = Math.random() * 50
y1 = Math.random() * 50 + 1
var trace1 = {
  y: y0, 
  type: "box"
};
var trace2 = {
  y: y1, 
  type: "box"
};
var data = [trace1, trace2];

var graph_options = {filename: "basic-box-plot", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});