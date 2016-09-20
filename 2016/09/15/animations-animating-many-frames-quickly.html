var n = 100;
var x = [], y = [], z = [];
var dt = 0.015;

for (i = 0; i < n; i++) {
  x[i] = Math.random() * 2 - 1;
  y[i] = Math.random() * 2 - 1;
  z[i] = 30 + Math.random() * 10;
}

Plotly.plot('graph', [{
  x: x,
  y: z,
  mode: 'markers'
}], {
  xaxis: {range: [-40, 40]},
  yaxis: {range: [0, 60]}
})

function compute () {
  var s = 10, b = 8/3, r = 28;
  var dx, dy, dz;
  var xh, yh, zh;
  for (var i = 0; i < n; i++) {
    dx = s * (y[i] - x[i]);
    dy = x[i] * (r - z[i]) - y[i];
    dz = x[i] * y[i] - b * z[i];

    xh = x[i] + dx * dt * 0.5;
    yh = y[i] + dy * dt * 0.5;
    zh = z[i] + dz * dt * 0.5;

    dx = s * (yh - xh);
    dy = xh * (r - zh) - yh;
    dz = xh * yh - b * zh;

    x[i] += dx * dt;
    y[i] += dy * dt;
    z[i] += dz * dt;
  }
}

function update () {
  compute();

  Plotly.animate('graph', {
    data: [{x: x, y: z}]
  }, {
    transition: {
      duration: 0
    },
    frame: {
      duration: 0,
      redraw: false
    }
  });

  requestAnimationFrame(update);
}

requestAnimationFrame(update);
