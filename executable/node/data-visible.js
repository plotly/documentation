var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var trace0 = {
  x: [0, 1, 2, 3], 
  y: [0, 2, 4, 6], 
  visible: true, 
  type: "scatter"
};
var trace1 = {
  x: [0, 1, 2, 3], 
  y: [8, 4, 2, 0], 
  visible: false, 
  type: "scatter"
};
var data = [trace1, trace2];

plot_url = plolty.plot(data, function (err, msg) {
    console.log(msg);
});