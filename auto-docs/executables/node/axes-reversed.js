var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var data = [
  {
    x: [1, 2], 
    y: [1, 2], 
    type: "scatter"
  }
];
var layout = {xaxis: {autorange: "reversed"}};

var graph_options = {filename: "axes-reversed", fileopt: "overwrite", layout: layout, auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});