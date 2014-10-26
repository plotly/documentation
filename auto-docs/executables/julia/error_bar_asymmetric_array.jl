using Plotly
Plotly.signin("TestBot", "r1neazxo9w")

data = [
  [
    "x" => [1, 2, 3, 4], 
    "y" => [2, 1, 3, 4], 
    "error_y" => [
      "type" => "data", 
      "symmetric" => false, 
      "array" => [0.1, 0.2, 0.1, 0.1], 
      "arrayminus" => [0.2, 0.4, 1, 0.2]
    ], 
    "type" => "scatter"
  ]
]
response = Plotly.plot(data, ["filename" => "error-bar-asymmetric-array", "fileopt" => "overwrite"])
plot_url = response["url"]
