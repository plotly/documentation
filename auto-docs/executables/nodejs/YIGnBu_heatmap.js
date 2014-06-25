var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var unpack = require('ndarray-unpack');
var zeros = require('zeros');
var fill = require('ndarray-fill');

var size = 50;
var z = unpack(fill(zeros([size, size]), function(c,r) {
  return r+c;
}));

var data = [
  {
    z: z, 
    scl: "YIGnBu", 
    type: "heatmap"
  }
];
var layout = {title: "YIGnBu"};

var graph_options = {filename: "YIGnBu-heatmap", fileopt: "overwrite", layout: layout, auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});