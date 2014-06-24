using Plotly

using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

data = [
  [
    "x" => [2, 4, 6], 
    "y" => [-3, 0, 3], 
    "type" => "scatter"
  ]
]
layout = [
  "showlegend" => false, 
  "xaxis" => [
    "autorange" => true, 
    "rangemode" => "tozero"
  ], 
  "yaxis" => [
    "autorange" => true, 
    "rangemode" => "nonnegative"
  ]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "axes-range-mode", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]