var plotly = require('plotly')('TestBot', 'r1neazxo9w')

{}

var graph_options = {filename: "append", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});