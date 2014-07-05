var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var trace1 = {
  x: [0, 1, 2], 
  y: [1, 1, 1], 
  mode: "lines+markers+text", 
  name: "Lines, Markers and Text", 
  text: ["Text A", "Text B", "Text C"], 
  textposition: "top right", 
  textfont: {
    family: "sans serif", 
    size: 18, 
    color: "#1f77b4"
  }, 
  type: "scatter"
};
var trace2 = {
  x: [0, 1, 2], 
  y: [2, 2, 2], 
  mode: "lines+markers+text", 
  name: "Lines and Text", 
  text: ["Text G", "Text H", "Text I"], 
  textposition: "bottom", 
  textfont: {
    family: "sans serif", 
    size: 18, 
    color: "#ff7f0e"
  }, 
  type: "scatter"
};
var data = [trace1, trace2];
var layout = {showlegend: false};

var graph_options = {filename: "text-chart-styling", fileopt: "overwrite", layout: layout, auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});