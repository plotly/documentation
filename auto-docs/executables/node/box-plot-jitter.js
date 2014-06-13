var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var data = [
  {
    y: [0, 1, 1, 2, 3, 5, 8, 13, 21], 
    boxpoints: "all", 
    jitter: 0.3, 
    pointpos: -1.8, 
    type: "box"
  }
];

var graph_options = {filename: "box-plot-jitter", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});