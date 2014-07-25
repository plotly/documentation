var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var y = [];

for (var i = 0; i < 500; i ++) {
	y[i] = Math.random();
}

var data = [
  {
    y: y, 
    type: "histogram"
  }
];

var graph_options = {filename: "horizontal-histogram", fileopt: "overwrite", auto_open: false}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});