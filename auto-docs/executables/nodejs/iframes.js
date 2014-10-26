var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var trace1 = {
  x: [1, 2, 3, 4], 
  y: [1, 4, 9, 16], 
  name: "$\alpha_{1c} = 352 \pm 11 \text{ km s}^{-1}$", 
  type: "scatter"
};
var trace2 = {
  x: [1, 2, 3, 4], 
  y: [0.5, 2, 4.5, 8], 
  name: "$\beta_{1c} = 25 \pm 11 \text{ km s}^{-1}$", 
  type: "scatter"
};
var data = [trace1, trace2];
var layout = {
  xaxis: {title: "$\sqrt{(n_\text{c}(t|{T_\text{early}}))}$"}, 
  yaxis: {title: "$d, r \text{ (solar radius)}$"}
};
var graph_options = {layout: layout, filename: "iframes", fileopt: "overwrite"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});
