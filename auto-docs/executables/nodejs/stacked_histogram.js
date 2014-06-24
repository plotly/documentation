var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var x0 = Math.random() * 500
var x1 = Math.random() * 500 + 1
{}

var graph_options = {filename: "stacked-histogram", fileopt: "overwrite", layout: layout, auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});