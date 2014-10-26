var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var data = [
  {
    x: [0, 1, 2], 
    y: [1, 3, 2], 
    mode: "markers", 
    text: ["Text A", "Text B", "Text C"], 
    type: "scatter"
  }
];
var layout = {title: "Hover over the points to see the text"};
var graph_options = {layout: layout, filename: "hover-chart-basic", fileopt: "overwrite"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});
