// Learn about API authentication here: {BASE_URL}/nodejs/getting-started
// Find your api_key here: {BASE_URL}/settings/api

var plotly = require('plotly')('TestBot', 'r1neazxo9w');
var trace1 = {
  x: [1, 2, 3], 
  y: [40, 50, 60], 
  name: "yaxis data", 
  type: "scatter"
};
var trace2 = {
  x: [2, 3, 4], 
  y: [4, 5, 6], 
  name: "yaxis2 data", 
  yaxis: "y2", 
  type: "scatter"
};
var data = [trace1, trace2];
var layout = {
  title: "Double Y Axis Example", 
  yaxis: {title: "yaxis title"}, 
  yaxis2: {
    title: "yaxis2 title", 
    titlefont: {color: "rgb(148, 103, 189)"}, 
    tickfont: {color: "rgb(148, 103, 189)"}, 
    overlaying: "y", 
    side: "right"
  }
};
var graphOptions = {layout: layout, filename: "multiple-axes-double", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
