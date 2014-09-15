var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var data = [
  {
    x: [1, 2, 3, 4], 
    y: [2, 1, 3, 4], 
    error_y: {
      type: "data", 
      symmetric: false, 
      array: [0.1, 0.2, 0.1, 0.1], 
      arrayminus: [0.2, 0.4, 1, 0.2]
    }, 
    type: "scatter"
  }
];
var graph_options = {fileopt: "overwrite", filename: "error-bar-asymmetric-array"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});