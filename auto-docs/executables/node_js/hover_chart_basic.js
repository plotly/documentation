// Learn about API authentication here: {BASE_URL}/nodejs/getting-started
// Find your api_key here: {BASE_URL}/settings/api

var plotly = require('plotly')('TestBot', 'r1neazxo9w');
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
var graphOptions = {layout: layout, filename: "hover-chart-basic", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
