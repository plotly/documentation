var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var data = [
  {
    x: ["Liam", "Sophie", "Jacob", "Mia", "William", "Olivia"], 
    y: [8.0, 8.0, 12.0, 12.0, 13.0, 20.0], 
    text: ["4.17 below the mean", "4.17 below the mean", "0.17 below the mean", "0.17 below the mean", "0.83 above the mean", "7.83 above the mean"], 
    marker: {color: "rgb(142, 124, 195)"}, 
    type: "bar"
  }
];
var layout = {
  title: "Number of graphs made this week", 
  font: {family: "Raleway, sans-serif"}, 
  showlegend: false, 
  xaxis: {tickangle: -45}, 
  yaxis: {
    zeroline: false, 
    gridwidth: 2
  }, 
  bargap: 0.05
};

var graph_options = {filename: "bar-with-hover-text", fileopt: "overwrite", layout: layout, auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});