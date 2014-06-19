using Plotly

using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

trace1 = [
  "x" => [1, 2, 3], 
  "y" => [4, 3, 2], 
  "type" => "scatter"
]
trace2 = [
  "x" => [20, 30, 40], 
  "y" => [30, 40, 50], 
  "xaxis" => "x2", 
  "yaxis" => "y2", 
  "type" => "scatter"
]
data = [trace1, trace2]
layout = [
  "yaxis2" => [
    "domain" => [0.6, 0.95], 
    "anchor" => "x2"
  ], 
  "xaxis2" => [
    "domain" => [0.6, 0.95], 
    "anchor" => "y2"
  ]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "simple-inset", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]