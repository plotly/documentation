var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var data = [
  {
    y: [0, 1, 1, 2, 3, 5, 8, 13, 21], 
    boxpoints: "all", 
    jitter: 0.3, 
    pointpos: -1.8, 
    type: "box"
  }
];

var graph_options = {filename: "box-plot-jitter", fileopt: "overwrite"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});