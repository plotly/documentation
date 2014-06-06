var plotly = require('plotly')('test-runner', '9h29fe3l0x')

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

var graph_options = {filename: "error-bar-horizontal", fileopt: "overwrite"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});