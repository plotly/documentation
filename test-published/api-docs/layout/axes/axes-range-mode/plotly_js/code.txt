var data = [
  {
    x: [2, 4, 6], 
    y: [-3, 0, 3], 
    type: "scatter"
  }
];
var layout = {
  showlegend: false, 
  xaxis: {
    rangemode: "tozero", 
    autorange: true
  }, 
  yaxis: {
    rangemode: "nonnegative", 
    autorange: true
  }
};
Plotly.plot(divid, data, layout);
