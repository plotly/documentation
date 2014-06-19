var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var data = [
  {
    x: [2, 4, 6], 
    y: [-3, 0, 3], 
    type: "scatter"
  }
];
var layout = {
  xaxis: {
    autorange: true, 
    rangemode: "tozero"
  }, 
  yaxis: {
    autorange: true, 
    rangemode: "nonnegative"
  }, 
  showlegend: false
};

var graph_options = {filename: "axes-range-mode", fileopt: "overwrite", layout: layout, auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});