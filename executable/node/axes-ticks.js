var plotly = require('plotly')('test-runner', '9h29fe3l0x'

var trace0 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [8, 7, 6, 5, 4, 3, 2, 1, 0], 
  type: "scatter"
};
var trace1 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  type: "scatter"
};
var layout = {
  xaxis: {
    tick0: 0, 
    dtick: 0.25, 
    ticks: "outside", 
    ticklen: 8, 
    tickcolor: "#000", 
    tickwidth: 4, 
    autotick: false
  }, 
  yaxis: {
    tick0: 0, 
    dtick: 0.25, 
    ticks: "outside", 
    ticklen: 8, 
    tickcolor: "#000", 
    tickwidth: 4, 
    autotick: false
  }
};

