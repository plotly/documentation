var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var x = Math.random() * 500
{}

var graph_options = {filename: "basic-histogram", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});