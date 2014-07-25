var x0 = [];
var y0 = [];
var x1 = [];
var y1 = [];

for (var i = 0; i < 500; i ++) {
	x0[i] = Math.random() / 5 * 0.5;
	y0[i] = Math.random() / 5 * 0.5;
}

for (var i = 0; i < 50; i ++) {
	x1[i] = Math.random();
	y1[i] = Math.random() + 1;
}

var x = [x0, x1]
var y = [y0, y1]
