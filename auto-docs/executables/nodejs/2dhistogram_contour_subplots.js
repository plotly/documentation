var plotly = require('plotly')('TestBot', 'r1neazxo9w')
var linspace = require('linspace');

var t = linspace(-1,1.2,2000);
var x = (Math.pow(t, 3)) + (0.3 * (Math.random() * 2000));
var y = (Math.pow(t, 6)) + (0.3 * (Math.random() * 2000));

var trace1 = {
  x: x, 
  y: y, 
  mode: "markers", 
  name: "points", 
  marker: {
    color: "rgb(102,0,0)", 
    size: 2, 
    opacity: 0.4
  }, 
  type: "scatter"
};
var trace2 = {
  x: x, 
  y: y, 
  name: "density", 
  ncontours: 20, 
  colorscale: "Hot", 
  reversescale: true, 
  showscale: false, 
  type: "histogram2dcontour"
};
var trace3 = {
  x: x, 
  name: "x density", 
  marker: {color: "rgb(102,0,0)"}, 
  yaxis: "y2", 
  type: "histogram"
};
var trace4 = {
  y: y, 
  name: "y density", 
  marker: {color: "rgb(102,0,0)"}, 
  xaxis: "x2", 
  type: "histogram"
};
var data = [trace1, trace2, trace3, trace4];
var layout = {
  showlegend: false, 
  autosize: false, 
  width: 600, 
  height: 550, 
  xaxis: {
    domain: [0, 0.85], 
    showgrid: false, 
    zeroline: false
  }, 
  yaxis: {
    domain: [0, 0.85], 
    showgrid: false, 
    zeroline: false
  }, 
  margin: {t: 50}, 
  hovermode: "closest", 
  bargap: 0, 
  xaxis2: {
    domain: [0.85, 1], 
    showgrid: false, 
    zeroline: false
  }, 
  yaxis2: {
    domain: [0.85, 1], 
    showgrid: false, 
    zeroline: false
  }
};
var graph_options = {layout: layout, filename: "2dhistogram-contour-subplots", fileopt: "overwrite"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});
