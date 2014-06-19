using Plotly

using Plotly
Plotly.signin("theengineear", "o9zlr0hy6z")

data = [
  [
    "x" => [1, 2, 3, 4], 
    "y" => [2, 1, 3, 4], 
    "error_y" => [
      "value" => 15, 
      "type" => "percent", 
      "symmetric" => false, 
      "valueminus" => 25
    ], 
    "type" => "scatter"
  ]
]

response = Plotly.plot([data], ["filename" => "error-bar-asymmetric-constant", "fileopt" => "overwrite", "auto_open" => "false"])
plot_url = response["url"]