using Plotly

using Plotly
Plotly.signin("theengineear", "o9zlr0hy6z")

data = [
  [
    "x" => [2, 4, 6], 
    "y" => [-3, 0, 3], 
    "type" => "scatter"
  ]
]
layout = [
  "xaxis" => [
    "autorange" => true, 
    "rangemode" => "tozero"
  ], 
  "yaxis" => [
    "autorange" => true, 
    "rangemode" => "nonnegative"
  ], 
  "showlegend" => false
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "axes-range-mode", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]