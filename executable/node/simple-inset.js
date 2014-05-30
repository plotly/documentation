var plotly = require('plotly')('test-runner', '9h29fe3l0x'

var trace0 = {
  x: [1, 2, 3], 
  y: [4, 3, 2], 
  type: "scatter"
};
var trace1 = {
  x: [20, 30, 40], 
  y: [30, 40, 50], 
  xaxis: "x2", 
  yaxis: "y2", 
  type: "scatter"
};
var layout = {
  yaxis2: {
    domain: [0.6, 0.95], 
    anchor: "x2"
  }, 
  xaxis2: {
    domain: [0.6, 0.95], 
    anchor: "y2"
  }
};

