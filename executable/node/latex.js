var plotly = require('plotly')('test-runner', '9h29fe3l0x'

var trace0 = {
  x: [1, 2, 3, 4], 
  y: [1, 4, 9, 16], 
  name: "$\alpha_{1c} = 352 \pm 11 \text{ km s}^{-1}$", 
  type: "scatter"
};
var trace1 = {
  x: [1, 2, 3, 4], 
  y: [0.5, 2, 4.5, 8], 
  name: "$\beta_{1c} = 25 \pm 11 \text{ km s}^{-1}$", 
  type: "scatter"
};
var layout = {
  xaxis: {title: "$\sqrt{(n_\text{c}(t|{T_\text{early}}))}$"}, 
  yaxis: {title: "$d, r \text{ (solar radius)}$"}
};

