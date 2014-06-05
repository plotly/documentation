var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var x = Math.random() * 50
var y = Math.random() * 50 + 1

var data = [
  {
    x: x, 
    y: y, 
    type: "histogram2d"
  }
];

plotly.plot(data, function (err, msg) {
    console.log(msg);
});