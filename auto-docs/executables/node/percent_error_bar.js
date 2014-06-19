var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var data = [
  {
    x: [0, 1, 2], 
    y: [6, 10, 2], 
    error_y: {
      value: 50, 
      type: "percent", 
      visible: true
    }, 
    type: "scatter"
  }
];

var graph_options = {filename: "percent-error-bar", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});