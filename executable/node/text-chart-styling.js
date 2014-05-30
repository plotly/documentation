var plotly = require('plotly')('test-runner', '9h29fe3l0x'

var trace0 = {
  x: [0, 1, 2], 
  y: [1, 1, 1], 
  text: ["Text A", "Text B", "Text C"], 
  textposition: "top right", 
  name: "Lines, Markers and Text", 
  mode: "lines+markers+text", 
  textfont: {
    family: "sans serif", 
    size: 18, 
    color: "#1f77b4"
  }, 
  type: "scatter"
};
var trace1 = {
  x: [0, 1, 2], 
  y: [2, 2, 2], 
  text: ["Text G", "Text H", "Text I"], 
  textposition: "bottom", 
  name: "Lines and Text", 
  mode: "lines+markers+text", 
  textfont: {
    family: "sans serif", 
    size: 18, 
    color: "#ff7f0e"
  }, 
  type: "scatter"
};
var layout = {showlegend: false};

