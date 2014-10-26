var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var data = [
  {
    x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    y: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    type: "scatter"
  }
];
var layout = {
  autosize: false, 
  width: 500, 
  height: 500, 
  margin: {
    l: 50, 
    r: 50, 
    b: 100, 
    t: 100, 
    pad: 4
  }, 
  paper_bgcolor: "#7f7f7f", 
  plot_bgcolor: "#c7c7c7"
};
var graph_options = {layout: layout, filename: "size-margins", fileopt: "overwrite"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});
