var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var data = [
  {
    x: [1, 2, 3, 4], 
    y: [5, 4, -3, 2], 
    marker: {color: ["#447adb", "#447adb", "#db5a44", "#447adb"]}, 
    type: "bar"
  }
];

var graph_options = {filename: "bar-marker-array", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});