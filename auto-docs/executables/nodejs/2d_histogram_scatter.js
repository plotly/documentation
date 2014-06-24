var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var x0 = (Math.random() * 100) / 5 + 0.5
var y0 = (Math.random() * 100) / 5 + 0.5
var x1 = Math.random() * 50
var y1 = Math.random() * 50 + 1.0


var x = [x0, x1]
var y = [y0, y1]
{}

var graph_options = {filename: "2d-histogram-scatter", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});