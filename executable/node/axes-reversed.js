var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var data = [
  {
    x: [1, 2], 
    y: [1, 2], 
    type: "scatter"
  }
];
var layout = {xaxis: {autorange: "reversed"}};

var graph_options = {filename: "axes-reversed", fileopt: "overwrite", layout: layout}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});