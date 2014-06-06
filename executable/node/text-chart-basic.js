var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var trace1 = {
  x: [0, 1, 2], 
  y: [1, 1, 1], 
  text: ["Text A", "Text B", "Text C"], 
  textposition: "top", 
  name: "Lines, Markers and Text", 
  mode: "lines+markers+text", 
  type: "scatter"
};
var trace2 = {
  x: [0, 1, 2], 
  y: [2, 2, 2], 
  text: ["Text D", "Text E", "Text F"], 
  textposition: "bottom", 
  name: "Markers and Text", 
  mode: "markers+text", 
  type: "scatter"
};
var trace3 = {
  x: [0, 1, 2], 
  y: [3, 3, 3], 
  text: ["Text G", "Text H", "Text I"], 
  textposition: "bottom", 
  name: "Lines and Text", 
  mode: "lines+text", 
  type: "scatter"
};
var data = [trace1, trace2, trace3];
var layout = {showlegend: false};

var graph_options = {filename: "text-chart-basic", fileopt: "overwrite", layout: layout}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});