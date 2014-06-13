var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var data = [
  {
    z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]], 
    type: "heatmap"
  }
];

var graph_options = {filename: "basic-heatmap", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});