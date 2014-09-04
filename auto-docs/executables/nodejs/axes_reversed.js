var plotly = require('plotly')('TestBot', 'r1neazxo9w')
var data = [
  {
    x: [1, 2], 
    y: [1, 2], 
    type: "scatter"
  }
];
var layout = {xaxis: {autorange: "reversed"}};
var graph_options = {layout: layout, auto_open: false, fileopt: "overwrite", filename: "axes-reversed"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});