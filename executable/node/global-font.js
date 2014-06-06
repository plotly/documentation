var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var data = [
  {
    x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    y: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    type: "scatter"
  }
];
var layout = {
  title: "Global Font", 
  font: {
    family: "Courier New, monospace", 
    size: 18, 
    color: "#7f7f7f"
  }
};

var graph_options = {filename: "global-font", fileopt: "overwrite", layout: layout}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});