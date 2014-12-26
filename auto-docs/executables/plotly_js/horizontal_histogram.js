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
Plotly.plot(divid, data);
