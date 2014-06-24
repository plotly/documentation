var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var linspace = require('linspace');

var t = linspace(-1,1.2,2000);
var x = (Math.pow(t, 3)) + (0.3 * (Math.random() * 2000));
var y = (Math.pow(t, 6)) + (0.3 * (Math.random() * 2000));
{}

var graph_options = {filename: "2dhistogram-contour-subplots", fileopt: "overwrite", layout: layout, auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});