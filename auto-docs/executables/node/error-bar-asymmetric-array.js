var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var data = [
  {
    x: [1, 2, 3, 4], 
    y: [2, 1, 3, 4], 
    error_y: {
      array: [0.1, 0.2, 0.1, 0.1], 
      type: "data", 
      symmetric: false, 
      arrayminus: [0.2, 0.4, 1, 0.2]
    }, 
    type: "scatter"
  }
];

var graph_options = {filename: "error-bar-asymmetric-array", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});