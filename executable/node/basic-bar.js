var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var data = [
  {
    x: ["giraffes", "orangutans", "monkeys"], 
    y: [20, 14, 23], 
    type: "bar"
  }
];

var graph_options = {filename: "basic-bar", fileopt: "overwrite"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});