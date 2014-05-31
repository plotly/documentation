var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var trace0 = {
  x: [1, 2, 3, 4], 
  y: [10, 11, 12, 13], 
  mode: "markers", 
  marker: {
    size: [12, 22, 32, 42], 
    color: ["hsl(0,100,40)", "hsl(33,100,40)", "hsl(66,100,40)", "hsl(99,100,40)"], 
    opacity: [0.6, 0.7, 0.8, 0.9]
  }, 
  type: "scatter"
};
var trace1 = {
  x: [1, 2, 3, 4], 
  y: [11, 12, 13, 14], 
  mode: "markers", 
  marker: {
    symbol: ["circle", "square", "diamond", "cross"], 
    size: 18, 
    color: "rgb(31, 119, 180)"
  }, 
  type: "scatter"
};
var trace2 = {
  x: [1, 2, 3, 4], 
  y: [12, 13, 14, 15], 
  mode: "markers", 
  marker: {
    line: {
      color: ["rgb(120,120,120)", "rgb(120,120,120)", "red", "rgb(120,120,120)"], 
      width: [2, 2, 6, 2]
    }, 
    size: 18
  }, 
  type: "scatter"
};
var data = [trace1, trace2, trace3];
var layout = {showlegend: false};

plot_url = plolty.plot(data, layout, function (err, msg) {
    console.log(msg);
});