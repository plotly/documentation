var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var linspace = require('linspace');
var unpack = require('ndarray-unpack');
var zeros = require('zeros');
var fill = require('ndarray-fill');

var size = 100
var x = linspace(-2 * Math.PI, 2 * Math.PI, size)
var y = linspace(-2 * Math.PI, 2 * Math.PI, size)
var z = unpack(zeros([size,size]))
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    r2 = (x * (i * i) + y * (j * j))
      z[i][j] = Math.sin(x * i) * Math.cos(y * j) * Math.sin(r2) / Math.log(r2+1)
  }
}
var data = [
  {
    z: z, 
    x: x, 
    y: y, 
    type: "contour"
  }
];

var graph_options = {filename: "simple-contour", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});