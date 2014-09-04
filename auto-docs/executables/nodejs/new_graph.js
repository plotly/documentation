var plotly = require('plotly')('TestBot', 'r1neazxo9w')
var trace1 = {
  x: [1, 2, 3, 4], 
  y: [10, 15, 13, 17], 
  type: "scatter"
};
var trace2 = {
  x: [1, 2, 3, 4], 
  y: [16, 5, 11, 9], 
  type: "scatter"
};
var data = [trace1, trace2];
var graph_options = {auto_open: false, fileopt: "overwrite", filename: "new-graph"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});