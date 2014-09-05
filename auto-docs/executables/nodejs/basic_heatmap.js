var plotly = require('plotly')('TestBot', 'r1neazxo9w')
var data = [
  {
    z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]], 
    type: "heatmap"
  }
];
var graph_options = {auto_open: false, fileopt: "overwrite", filename: "basic-heatmap"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});