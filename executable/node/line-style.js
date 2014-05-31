var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var trace0 = {
  x: [1, 2, 3], 
  y: [4, 5, 6], 
  name: "Experiment", 
  marker: {
    symbol: "square", 
    line: {
      color: "darkblue", 
      width: 3
    }, 
    size: 12, 
    color: "rgb(54,144,192)", 
    opacity: 1.0
  }, 
  line: {
    dash: "dot", 
    color: "rgb(3,78,123)", 
    width: 6
  }, 
  type: "scatter"
};
var trace1 = {
  x: [1, 2, 3], 
  y: [2, 10, 12], 
  name: "Control", 
  marker: {
    symbol: "cross", 
    line: {
      color: "", 
      width: 0
    }, 
    size: 16, 
    color: "fuchsia", 
    opacity: 0.9
  }, 
  line: {
    dash: "dashdot", 
    color: "purple", 
    width: 4
  }, 
  type: "scatter"
};
var data = [trace1, trace2];

plot_url = plolty.plot(data, function (err, msg) {
    console.log(msg);
});