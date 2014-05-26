using Plotly
Plotly.signin("test-runner", "9h29fe3l0x")

data = [
  [
    "x" => [1, 2, 3, 4], 
    "y" => [2, 1, 3, 4], 
    "error_y" => [
      "symmetric" => false, 
      "value" => 15, 
      "valueminus" => 25, 
      "type" => "percent"
    ]
  ]
]

response = Plotly.plot([data], ["filename" => "error-bar-asymmetric-constant", "fileopt" => "overwrite"])
plot_url = response["url"]