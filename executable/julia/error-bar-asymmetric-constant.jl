using Plotly

using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

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

response = Plotly.plot([data], ["filename" => "error-bar-asymmetric-constant", "fileopt" => "overwrite"])
plot_url = response["url"]