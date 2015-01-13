// Learn about API authentication here: {BASE_URL}/nodejs/getting-started
// Find your api_key here: {BASE_URL}/settings/api

var plotly = require('plotly')('TestBot', 'r1neazxo9w');
var data = [
  {
    x: [0, 2, 4], 
    y: [0, 4, 2], 
    type: "scatter"
  }
];
var graphOptions = {filename: "privacy-false", world_readable: false, fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
