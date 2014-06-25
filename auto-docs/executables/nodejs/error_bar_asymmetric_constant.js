var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var data = [
  {
    x: [1, 2, 3, 4], 
    y: [2, 1, 3, 4], 
    error_y: {
      type: "percent", 
      symmetric: false, 
      value: 15, 
      valueminus: 25
    }, 
    type: "scatter"
  }
];

var graph_options = {filename: "error-bar-asymmetric-constant", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});