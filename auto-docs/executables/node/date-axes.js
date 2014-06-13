var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var data = [
  {
    x: ["2013-10-04 22:23:00", "2013-11-04 22:23:00", "2013-12-04 22:23:00"], 
    y: [1, 3, 6], 
    type: "scatter"
  }
];

var graph_options = {filename: "date-axes", fileopt: "overwrite", auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});