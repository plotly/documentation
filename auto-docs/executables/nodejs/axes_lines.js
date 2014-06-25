var plotly = require('plotly')('TestBot', 'r1neazxo9w')

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
    zerolinewidth: 4, 
    gridwidth: 2, 
    showgrid: true, 
    zerolinecolor: "#969696", 
    gridcolor: "#bdbdbd", 
    linecolor: "#636363", 
    mirror: "ticks", 
    zeroline: true, 
    showline: true, 
    linewidth: 6
  }, 
  yaxis: {
    zerolinewidth: 4, 
    gridwidth: 2, 
    showgrid: true, 
    zerolinecolor: "#969696", 
    gridcolor: "#bdbdbd", 
    linecolor: "#636363", 
    mirror: "ticks", 
    zeroline: true, 
    showline: true, 
    linewidth: 6
  }
};

var graph_options = {filename: "axes-lines", fileopt: "overwrite", layout: layout, auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});