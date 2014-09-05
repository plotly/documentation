using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
data = [
  [
    "x" => [1, 2, 3, 4], 
    "y" => [2, 1, 3, 4], 
    "error_y" => [
      "type" => "percent", 
      "symmetric" => false, 
      "value" => 15, 
      "valueminus" => 25
    ], 
    "type" => "scatter"
  ]
]
response = Plotly.plot(data, ["auto_open" => false, "fileopt" => "overwrite", "filename" => "error-bar-asymmetric-constant"])
plot_url = response["url"]