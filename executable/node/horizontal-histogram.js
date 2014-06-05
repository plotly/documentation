var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var y = Math.random() * 50

var data = [
  {
    y: y, 
    type: "histogram"
  }
];

plotly.plot(data, function (err, msg) {
    console.log(msg);
});