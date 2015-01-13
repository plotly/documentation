// Learn about API authentication here: {{BASE_URL}}/nodejs/getting-started
// Find your api_key here: {{BASE_URL}}/settings/api

var plotly = require('plotly')('TestBot', 'r1neazxo9w');
var data = [
  {
    x: [0, 1, 2], 
    y: [6, 10, 2], 
    error_y: {
      type: "data", 
      array: [1, 2, 3], 
      visible: true
    }, 
    type: "scatter"
  }
];
var graphOptions = {filename: "basic-error-bar", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
