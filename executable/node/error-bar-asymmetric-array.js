var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var data = [
  {
    x: [1, 2, 3, 4], 
    y: [2, 1, 3, 4], 
    error_y: {
      array: [0.1, 0.2, 0.1, 0.1], 
      type: "data", 
      symmetric: false, 
      arrayminus: [0.2, 0.4, 1, 0.2]
    }, 
    type: "scatter"
  }
];

plotly.plot(data, function (err, msg) {
    console.log(msg);
});