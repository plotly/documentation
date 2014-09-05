var plotly = require('plotly')('TestBot', 'r1neazxo9w')
var data = [
  {
    z: [[1, 20, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]], 
    x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], 
    y: ["Morning", "Afternoon", "Evening"], 
    type: "heatmap"
  }
];
var graph_options = {auto_open: false, fileopt: "overwrite", filename: "labelled-heatmap"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});