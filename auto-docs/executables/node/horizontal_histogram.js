var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var y = Math.random() * 50
var data = [
  {
    y: y, 
    type: "histogram"
  }
];

var graph_options = {filename: "horizontal-histogram", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});