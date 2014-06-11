var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var data = [
  {
    x: [1, 2, 3, 4], 
    y: [2, 1, 3, 4], 
    error_x: {
      value: 10, 
      type: "percent"
    }, 
    type: "scatter"
  }
];

var graph_options = {filename: "error-bar-horizontal", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});