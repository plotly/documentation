using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [2, 4, 6], 
    "y" => [-3, 0, 3]
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

response = Plotly.plot([data], ["layout" => layout, "filename" => "axes-range-mode", "fileopt" => "overwrite"])
plot_url = response["url"]