var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var x = Math.random() * 50
var y = Math.random() * 50 + 1

var data = [
  {
    x: x, 
    y: y, 
    type: "histogram2d"
  }
];

var graph_options = {filename: "2d-histogram", fileopt: "overwrite"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});