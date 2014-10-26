var plotly = require('plotly')('TestBot', 'r1neazxo9w')
var x = [];

for (var i = 0; i < 500; i ++) {
	x[i] = Math.random();
}


var data = [
  {
    x: x, 
    type: "histogram"
  }
];
var graph_options = {filename: "basic-histogram", fileopt: "overwrite"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});
