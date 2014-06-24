var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var x = Math.random() * 50
var y = Math.random() * 50 + 1
{}

var graph_options = {filename: "2d-histogram-options", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});