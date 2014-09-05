using Plotly
Plotly.signin("TestBot", "r1neazxo9w")
data = [
  [
    "x" => [0, 1, 2], 
    "y" => [6, 10, 2], 
    "error_y" => [
      "type" => "data", 
      "array" => [1, 2, 3], 
      "visible" => true
    ], 
    "type" => "scatter"
  ]
]
response = Plotly.plot(data, ["auto_open" => false, "fileopt" => "overwrite", "filename" => "basic-error-bar"])
plot_url = response["url"]