var plotly = require('plotly')('TestBot', 'r1neazxo9w')
var trace1 = {
  x: ["giraffes", "orangutans", "monkeys"], 
  y: [20, 14, 23], 
  name: "SF Zoo", 
  type: "bar"
};
var trace2 = {
  x: ["giraffes", "orangutans", "monkeys"], 
  y: [12, 18, 29], 
  name: "LA Zoo", 
  type: "bar"
};
var data = [trace1, trace2];
var layout = {barmode: "stack"};
var graph_options = {layout: layout, auto_open: false, fileopt: "overwrite", filename: "stacked-bar"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});