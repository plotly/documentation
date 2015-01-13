// Learn about API authentication here: {BASE_URL}/nodejs/getting-started
// Find your api_key here: {BASE_URL}/settings/api

var plotly = require('plotly')('TestBot', 'r1neazxo9w');
var data = [
  {
    x: [1, 2, 3, 4], 
    y: [5, 4, -3, 2], 
    marker: {color: ["#447adb", "#447adb", "#db5a44", "#447adb"]}, 
    type: "bar"
  }
];
var graphOptions = {filename: "bar-marker-array", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
