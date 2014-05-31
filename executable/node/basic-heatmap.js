var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var data = [
  {
    z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]], 
    type: "heatmap"
  }
];

plot_url = plotly.plot(data, function (err, msg) {
    console.log(msg);
});