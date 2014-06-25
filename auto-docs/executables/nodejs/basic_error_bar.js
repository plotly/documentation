var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var data = [
  {
    x: [0, 1, 2], 
    y: [6, 10, 2], 
    error_y: {
      type: "data", 
      array: [1, 2, 3], 
      visible: true
    }, 
    type: "scatter"
  }
];

var graph_options = {filename: "basic-error-bar", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});