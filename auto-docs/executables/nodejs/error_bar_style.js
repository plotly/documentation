var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var linspace = require('linspace')

x_theo = linspace(-4, 4, 100)
sincx = Math.sin(x_theo) / x_theo
var x = [-3.8, -3.03, -1.91, -1.46, -0.89, -0.24, -0.0, 0.41, 0.89, 1.01, 1.91, 2.28, 2.79, 3.56]
var y = [-0.02, 0.04, -0.01, -0.27, 0.36, 0.75, 1.03, 0.65, 0.28, 0.02, -0.11, 0.16, 0.04, -0.15]
{}

var graph_options = {filename: "error-bar-style", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});