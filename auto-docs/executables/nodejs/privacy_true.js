var plotly = require('plotly')('TestBot', 'r1neazxo9w')

{}

var graph_options = {filename: "privacy-true", fileopt: "overwrite", auto_open: "false", world_readable: "true"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});