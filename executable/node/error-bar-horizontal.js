var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var data = [
  {
    x: [1, 2, 3, 4], 
    y: [2, 1, 3, 4], 
    error_x: {
      value: 10, 
      type: "percent"
    }, 
    type: "scatter"
  }
];

plot_url = plotly.plot(data, function (err, msg) {
    console.log(msg);
});