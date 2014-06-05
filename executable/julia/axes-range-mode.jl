using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

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

response = Plotly.plot([data], ["layout" => layout, "filename" => "axes-range-mode", "fileopt" => "overwrite"])
plot_url = response["url"]