var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var trace1 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [8, 7, 6, 5, 4, 3, 2, 1, 0], 
  type: "scatter"
};
var trace2 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  type: "scatter"
};
var data = [trace1, trace2];
var layout = {
  xaxis: {
    title: "AXIS TITLE", 
    showticklabels: true, 
    tickangle: 45, 
    exponentformat: "e", 
    showexponent: "All", 
    titlefont: {
      family: "Arial, sans-serif", 
      size: 18, 
      color: "lightgrey"
    }, 
    tickfont: {
      family: "Old Standard TT, serif", 
      size: 14, 
      color: "black"
    }
  }, 
  yaxis: {
    title: "AXIS TITLE", 
    showticklabels: true, 
    tickangle: 45, 
    exponentformat: "e", 
    showexponent: "All", 
    titlefont: {
      family: "Arial, sans-serif", 
      size: 18, 
      color: "lightgrey"
    }, 
    tickfont: {
      family: "Old Standard TT, serif", 
      size: 14, 
      color: "black"
    }
  }
};

var graph_options = {filename: "axes-labels", fileopt: "overwrite", layout: layout}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});