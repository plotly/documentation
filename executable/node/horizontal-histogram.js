var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var y = Math.random() * 50

var data = [
  {
    y: y, 
    type: "histogram"
  }
];

var graph_options = {filename: "horizontal-histogram", fileopt: "overwrite"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});