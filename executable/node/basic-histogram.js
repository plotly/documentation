var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var x = Math.random() * 500

var data = [
  {
    x: x, 
    type: "histogram"
  }
];

var graph_options = {filename: "basic-histogram", fileopt: "overwrite"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});