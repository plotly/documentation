var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var linspace = require('linspace');

var t = linspace(-1,1.2,2000);
var x = (Math.pow(t, 3)) + (0.3 * (Math.random() * 2000));
var y = (Math.pow(t, 6)) + (0.3 * (Math.random() * 2000));

var trace1 = {
  x: x, 
  y: y, 
  name: "points", 
  mode: "markers", 
  marker: {
    size: 2, 
    color: "rgb(102,0,0)", 
    opacity: 0.4
  }, 
  type: "scatter"
};
var trace2 = {
  x: x, 
  y: y, 
  scl: "Hot", 
  reversescl: true, 
  name: "density", 
  ncontours: 20, 
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
  width: 600, 
  height: 550, 
  autosize: false, 
  margin: {t: 50}, 
  hovermode: "closest", 
  bargap: 0, 
  showlegend: false, 
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

plotly.plot(data, layout, function (err, msg) {
    console.log(msg);
});