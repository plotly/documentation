var plotly = require('plotly')('TestBot', 'r1neazxo9w')
var x0 = Math.random() * 500
var x1 = Math.random() * 500 + 1

var trace1 = {
  x: x0, 
  type: "histogram"
};
var trace2 = {
  x: x1, 
  type: "histogram"
};
var data = [trace1, trace2];
var layout = {barmode: "stacked"};
var graph_options = {layout: layout, filename: "stacked-histogram", fileopt: "overwrite"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});
