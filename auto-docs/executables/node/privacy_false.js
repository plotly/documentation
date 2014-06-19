var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var data = [
  {
    x: [0, 2, 4], 
    y: [0, 4, 2], 
    type: "scatter"
  }
];

var graph_options = {filename: "privacy-false", fileopt: "overwrite", auto_open: "false", world_readable: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});