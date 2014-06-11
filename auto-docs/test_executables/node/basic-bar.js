var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var data = [
  {
    x: ["giraffes", "orangutans", "monkeys"], 
    y: [20, 14, 23], 
    type: "bar"
  }
];

var graph_options = {filename: "basic-bar", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});