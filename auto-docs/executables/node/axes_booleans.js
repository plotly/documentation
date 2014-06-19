var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var trace1 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [8, 7, 6, 5, 4, 3, 2, 1, 0], 
  type: "scatter"
};
var trace2 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  type: "scatter"
};
var data = [trace1, trace2];
var layout = {
  xaxis: {
    showline: false, 
    ticks: "", 
    showticklabels: false, 
    showgrid: false, 
    autorange: true, 
    autotick: true, 
    zeroline: false
  }, 
  yaxis: {
    showline: false, 
    ticks: "", 
    showticklabels: false, 
    showgrid: false, 
    autorange: true, 
    autotick: true, 
    zeroline: false
  }
};

var graph_options = {filename: "axes-booleans", fileopt: "overwrite", layout: layout, auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});