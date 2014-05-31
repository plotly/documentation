var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var trace0 = {
  x: [1, 2, 3, 4], 
  y: [0, 2, 3, 5], 
  fill: "tozeroy", 
  type: "scatter"
};
var trace1 = {
  x: [1, 2, 3, 4], 
  y: [3, 5, 1, 7], 
  fill: "tonexty", 
  type: "scatter"
};
var data = [trace1, trace2];

plot_url = plotly.plot(data, function (err, msg) {
    console.log(msg);
});