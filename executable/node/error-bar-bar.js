var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var trace0 = {
  x: ["Trial 1", "Trial 2", "Trial 3"], 
  y: [3, 6, 4], 
  name: "Control", 
  error_y: {
    array: [1, 0.5, 1.5], 
    type: "data", 
    visible: true
  }, 
  type: "bar"
};
var trace1 = {
  x: ["Trial 1", "Trial 2", "Trial 3"], 
  y: [4, 7, 3], 
  name: "Experimental", 
  error_y: {
    array: [0.5, 1, 2], 
    type: "data", 
    visible: true
  }, 
  type: "bar"
};
var data = [trace1, trace2];
var layout = {barmode: "group"};

plot_url = plolty.plot(data, layout, function (err, msg) {
    console.log(msg);
});