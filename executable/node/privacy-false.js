var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var data = [
  {
    x: [0, 2, 4], 
    y: [0, 4, 2], 
    type: "scatter"
  }
];

var graph_options = {filename: "privacy-false", fileopt: "overwrite", world_readable: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});