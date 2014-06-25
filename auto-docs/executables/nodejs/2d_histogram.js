var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var x = Math.random() * 50
var y = Math.random() * 50 + 1
var data = [
  {
    x: x, 
    y: y, 
    type: "histogram2d"
  }
];

var graph_options = {filename: "2d-histogram", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});