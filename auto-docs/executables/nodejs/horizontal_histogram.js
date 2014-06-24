var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var y = Math.random() * 50
{}

var graph_options = {filename: "horizontal-histogram", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});