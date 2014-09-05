import numpy as np
x = np.random.randn(500)
var plotly = require('plotly')('TestBot', 'r1neazxo9w')
var data = [
  {
    x: x, 
    type: "histogram"
  }
];
var graph_options = {auto_open: false, fileopt: "overwrite", filename: "basic-histogram"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});