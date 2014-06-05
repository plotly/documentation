using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [1, 2, 3], 
    "y" => [2, 3, 4], 
    "type" => "scatter"
  ], 
  [
    "x" => [20, 30, 40], 
    "y" => [5, 5, 5], 
    "xaxis" => "x2", 
    "yaxis" => "y", 
    "type" => "scatter"
  ], 
  [
    "x" => [2, 3, 4], 
    "y" => [600, 700, 800], 
    "xaxis" => "x", 
    "yaxis" => "y3", 
    "type" => "scatter"
  ], 
  [
    "x" => [4000, 5000, 6000], 
    "y" => [7000, 8000, 9000], 
    "xaxis" => "x4", 
    "yaxis" => "y4", 
    "type" => "scatter"
  ]
]
layout = [
  "xaxis" => ["domain" => [0, 0.45]], 
  "yaxis" => ["domain" => [0, 0.45]], 
  "xaxis4" => [
    "domain" => [0.55, 1], 
    "anchor" => "y4"
  ], 
  "xaxis2" => ["domain" => [0.55, 1]], 
  "yaxis3" => ["domain" => [0.55, 1]], 
  "yaxis4" => [
    "domain" => [0.55, 1], 
    "anchor" => "x4"
  ]
]

response = Plotly.plot([data], ["layout" => layout, "filename" => "shared-axes-subplots", "fileopt" => "overwrite"])
plot_url = response["url"]