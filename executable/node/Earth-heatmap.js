var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var unpack = require('ndarray-unpack');
var zeros = require('zeros');
var fill = require('ndarray-fill');

var size = 50;
var z = unpack(fill(zeros([size, size]), function(c,r) {
  return Math.sqrt((r*c)/(size*size));
}));

var data = [
  {
    z: z, 
    scl: "Earth", 
    type: "heatmap"
  }
];
var layout = {title: "Earth"};

var graph_options = {filename: "Earth-heatmap", fileopt: "overwrite", layout: layout}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});