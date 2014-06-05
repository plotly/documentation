var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var trace1 = {
  x: [1, 2, 3], 
  y: [40, 50, 60], 
  name: "yaxis data", 
  type: "scatter"
};
var trace2 = {
  x: [2, 3, 4], 
  y: [4, 5, 6], 
  name: "yaxis2 data", 
  yaxis: "y2", 
  type: "scatter"
};
var data = [trace1, trace2];
var layout = {
  title: "Double Y Axis Example", 
  yaxis: {title: "yaxis title"}, 
  yaxis2: {
    title: "yaxis2 title", 
    titlefont: {color: "rgb(148, 103, 189)"}, 
    tickfont: {color: "rgb(148, 103, 189)"}, 
    side: "right", 
    overlaying: "y"
  }
};

plotly.plot(data, layout, function (err, msg) {
    console.log(msg);
});