var plotly = require('plotly')('TestBot', 'r1neazxo9w')

y0 = Math.random() * 50
y1 = Math.random() * 50 + 1
{}

var graph_options = {filename: "basic-box-plot", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});