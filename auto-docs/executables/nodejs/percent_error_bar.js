var plotly = require('plotly')('TestBot', 'r1neazxo9w')
var data = [
  {
    x: [0, 1, 2], 
    y: [6, 10, 2], 
    error_y: {
      type: "percent", 
      value: 50, 
      visible: true
    }, 
    type: "scatter"
  }
];
var graph_options = {auto_open: false, fileopt: "overwrite", filename: "percent-error-bar"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});