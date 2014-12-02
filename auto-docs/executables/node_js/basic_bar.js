// Learn about API authentication here: plot.ly/nodejs/getting-started
// Find your api_key here: plot.ly/settings/api

var plotly = require('plotly')('TestBot', 'r1neazxo9w')


var data = [
  {
    x: ["giraffes", "orangutans", "monkeys"], 
    y: [20, 14, 23], 
    type: "bar"
  }
];
var graphOptions = {filename: "basic-bar", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
