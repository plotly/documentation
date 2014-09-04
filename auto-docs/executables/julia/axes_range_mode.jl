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
    "rangemode" => "tozero", 
    "autorange" => true
  ], 
  "yaxis" => [
    "rangemode" => "nonnegative", 
    "autorange" => true
  ]
]
response = Plotly.plot(data, ["layout" => layout, "auto_open" => false, "fileopt" => "overwrite", "filename" => "axes-range-mode"])
plot_url = response["url"]