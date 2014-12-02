var x0 = [];
var x1 = [];

for (var i = 0; i < 500; i ++) {
	x0[i] = Math.random();
	x1[i] = Math.random() + 1;
}


var trace1 = {
  x: x0, 
  opacity: 0.75, 
  type: "histogram"
};
var trace2 = {
  x: x1, 
  opacity: 0.75, 
  type: "histogram"
};
var data = [trace1, trace2];
var layout = {barmode: "overlay"};
Plotly.plot(divid, data, layout);
