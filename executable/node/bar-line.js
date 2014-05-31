var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var trace0 = {
  x: [0, 1, 2, 3, 4, 5], 
  y: [1.5, 1, 1.3, 0.7, 0.8, 0.9], 
  type: "scatter"
};
var trace1 = {
  x: [0, 1, 2, 3, 4, 5], 
  y: [1, 0.5, 0.7, -1.2, 0.3, 0.4], 
  type: "bar"
};
var data = [trace1, trace2];

plot_url = plolty.plot(data, function (err, msg) {
    console.log(msg);
});