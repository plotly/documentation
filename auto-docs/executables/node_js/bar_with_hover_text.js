// Learn about API authentication here: plot.ly/nodejs/getting-started
// Find your api_key here: plot.ly/settings/api

var plotly = require('plotly')('TestBot', 'r1neazxo9w');
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
var graphOptions = {layout: layout, filename: "bar-with-hover-text", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
