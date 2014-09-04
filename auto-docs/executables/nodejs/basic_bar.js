var plotly = require('plotly')('TestBot', 'r1neazxo9w')
var data = [
  {
    x: ["giraffes", "orangutans", "monkeys"], 
    y: [20, 14, 23], 
    type: "bar"
  }
];
var graph_options = {auto_open: false, fileopt: "overwrite", filename: "basic-bar"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});