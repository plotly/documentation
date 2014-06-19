var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

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
    scl: [["0.0", "rgb(165,0,38)"], ["0.111111111111", "rgb(215,48,39)"], ["0.222222222222", "rgb(244,109,67)"], ["0.333333333333", "rgb(253,174,97)"], ["0.444444444444", "rgb(254,224,144)"], ["0.555555555556", "rgb(224,243,248)"], ["0.666666666667", "rgb(171,217,233)"], ["0.777777777778", "rgb(116,173,209)"], ["0.888888888889", "rgb(69,117,180)"], ["1.0", "rgb(49,54,149)"]], 
    type: "heatmap"
  }
];

var graph_options = {filename: "custom-colorscale", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});