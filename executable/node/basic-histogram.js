var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var x = Math.random() * 500

var data = [
  {
    x: x, 
    type: "histogram"
  }
];

plotly.plot(data, function (err, msg) {
    console.log(msg);
});