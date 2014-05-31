var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var data = [
  {
    x: [1, 2, 3, 4], 
    y: [2, 1, 3, 4], 
    error_y: {
      value: 15, 
      type: "percent", 
      symmetric: false, 
      valueminus: 25
    }, 
    type: "scatter"
  }
];

plot_url = plolty.plot(data, function (err, msg) {
    console.log(msg);
});