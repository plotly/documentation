var plotly = require('plotly')('test-runner', '9h29fe3l0x')

var data = [
  {
    x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    y: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    type: "scatter"
  }
];
var layout = {
  width: 500, 
  height: 500, 
  autosize: false, 
  margin: {
    l: 50, 
    r: 50, 
    b: 100, 
    t: 100, 
    pad: 4
  }, 
  paper_bgcolor: "#7f7f7f", 
  plot_bgcolor: "#c7c7c7"
};

plot_url = plotly.plot(data, layout, function (err, msg) {
    console.log(msg);
});