var trace1 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [8, 7, 6, 5, 4, 3, 2, 1, 0], 
  type: "scatter"
};
var trace2 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  type: "scatter"
};
var data = [trace1, trace2];
var layout = {
  xaxis: {
    autotick: false, 
    ticks: "outside", 
    tick0: 0, 
    dtick: 0.25, 
    ticklen: 8, 
    tickwidth: 4, 
    tickcolor: "#000"
  }, 
  yaxis: {
    autotick: false, 
    ticks: "outside", 
    tick0: 0, 
    dtick: 0.25, 
    ticklen: 8, 
    tickwidth: 4, 
    tickcolor: "#000"
  }
};
Plotly.plot(divid, data, layout);
